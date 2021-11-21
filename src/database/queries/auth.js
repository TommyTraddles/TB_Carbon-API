const { sql } = require("slonik");

const searchByEmail = async (db, { email }) => {
  return await db.maybeOne(sql`
    SELECT * FROM users WHERE email = ${email}
  `);
};

// const searchByUsername = async (db, { username }) => {
//   return await db.maybeOne(sql`
//     SELECT * FROM users WHERE username = ${username}
//   `);
// };

const searchByActivationToken = async (db, { token }) => {
  return await db.maybeOne(sql`
    SELECT * FROM users WHERE token_confirm = ${token} 
  `);
};

const searchBySessionToken = async (db, { email, token }) => {
  return await db.maybeOne(sql`
    SELECT * FROM users WHERE email = ${email} AND token_session = ${token} 
  `);
};

const searchByPasswordToken = async (db, { token, email }) => {
  return await db.maybeOne(sql`
    SELECT * FROM users WHERE token_reset = ${token} AND email = ${email}
  `);
};

const register = async (db, { email, hashed, token }) => {
  try {
    const result = await searchByEmail(db, { email });
    if (result) throw new Error("Email taken");
    return await db.query(sql`
      INSERT INTO users ( email, hash, token_confirm ) 
      VALUES (${email}, ${hashed}, ${token});
    `);
  } catch (e) {
    console.info("> error at 'register' query: ", e.message);
    return false;
  }
};

const registerSSO = async (db, { email, hashed, name, active }) => {
  try {
    const result = await searchByEmail(db, { email });
    if (result) throw new Error("Email taken");
    return await db.query(sql`
      INSERT INTO users ( email, name, hash, active ) 
      VALUES (${email}, ${name} , ${hashed}, ${active});
    `);
  } catch (e) {
    console.info("> error at 'register' query: ", e.message);
    return false;
  }
};

const confirm = async (db, { token }) => {
  try {
    const result = await searchByActivationToken(db, { token });
    if (!result) throw new Error("User not found by given token");
    const update = await db.query(sql`
      UPDATE users
      SET active = true, token_confirm = null, modified_at = now()
      WHERE token_confirm = ${token};`);
    return result;
  } catch (e) {
    console.info("> error at 'confirm' query: ", e.message);
    return false;
  }
};

const forgot = async (db, { email, token }) => {
  try {
    return await db.query(sql`
      UPDATE users 
      SET token_reset = ${token}, modified_at = now() 
      WHERE email = ${email};`);
  } catch (e) {
    console.info("> error at 'forgot' query: ", e.message);
    return false;
  }
};

const reset = async (db, { email, hashed }) => {
  try {
    return await db.query(sql`
      UPDATE users
      SET hash = ${hashed}, token_reset = null, modified_at = now()
      WHERE email = ${email};`);
  } catch (e) {
    console.info("> error at 'reset' query: ", e.message);
    return false;
  }
};

const login = async (db, { email }, fn) => {
  try {
    const result = await searchByEmail(db, { email });
    if (!result) throw new Error("Password or Email are incorrect");
    const validPass = await fn(result.hash);
    if (!validPass) throw new Error("Invalid password");
    return result;
  } catch (e) {
    console.info("> error at 'login' query: ", e.message);
    return false;
  }
};

const updateSessionToken = async (db, {token, email }) => {
  try {
    return await db.query(sql`
      UPDATE users
      SET token_session = ${token}, modified_at = now()
      WHERE email = ${email};
    `)
  } catch (e) {
    console.info("> error at 'updateSessionToken' query: ", e.message);
    return false;
  }
}


module.exports = {
  auth: {
    searchByPasswordToken,
    searchBySessionToken,
    updateSessionToken,
    registerSSO,
    searchByEmail,
    register,
    confirm,
    forgot,
    reset,
    login,
  },
};
