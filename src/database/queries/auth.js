const { sql } = require("slonik");

const searchByEmail = async (db, { email, username }) => {
  return await db.maybeOne(sql`
    SELECT * FROM users WHERE email = ${email} OR username = ${username}
  `);
};

const searchByActivationToken = async (db, { token }) => {
  return await db.maybeOne(sql`
    SELECT * FROM users WHERE token_confirm = ${token} 
  `);
};

const searchByPasswordToken = async (db, { token, email }) => {
  return await db.maybeOne(sql`
    SELECT * FROM users WHERE token_reset = ${token} AND email = ${email}
  `);
};

const register = async (db, { email, hashed, username, token }) => {
  try {
    //
    const result = await searchByEmail(db, { email, username });
    if (result) throw new Error("Username or Email taken");
    //
    return await db.query(sql`
    INSERT INTO users ( email, username, hash, token_confirm ) 
    VALUES (${email}, ${username} , ${hashed}, ${token});
    `);
  } catch (e) {
    console.info("> error at 'register' query: ", e.message);
    return false;
  }
};

const confirm = async (db, { token }) => {
  try {
    //
    const result = await searchByActivationToken(db, { token });
    if (!result) throw new Error("User not found by given token")
    //
    const update = await db.query(sql`
      UPDATE users
      SET active = true, token_confirm = null, modified_at = now()
      WHERE token_confirm = ${token};`)
    return result
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
    WHERE email = ${email};`)
  } catch (e) {
    console.info("> error at 'forgot' query: ", e.message);
    return false;
  }
}

const reset = async (db, { email, hashed }) => {
  try {
    return await db.query(sql`
    UPDATE users
    SET hash = ${hashed}, token_reset = null, modified_at = now()
    WHERE email = ${email};`)
  } catch (e) {
    console.info("> error at 'reset' query: ", e.message);
    return false;
  }
}

module.exports = {
  auth: { searchByEmail, searchByPasswordToken, register, confirm, forgot, reset },
};
