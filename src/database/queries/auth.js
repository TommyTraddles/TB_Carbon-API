const { sql } = require("slonik");

const searchByEmail = async (db, { email, username }) => {
  return await db.maybeOne(sql`
    SELECT * FROM users WHERE email = ${email} OR username = ${username}
  `);
};

const searchByToken = async (db, { token }) => {
  return await db.maybeOne(sql`
    SELECT * FROM users WHERE token_confirm = ${token} 
  `);
};

const register = async (db, { email, hashed, username, token }) => {
  try {
    // confirm doesn't exist
    const result = await searchByEmail(db, { email, username });
    if (result) throw new Error("Username or Email taken");

    // create user
    return await db.query(sql`
    INSERT INTO users ( email, username, hash, token_confirm ) 
    VALUES (${email}, ${username} , ${hashed}, ${token});
    `);
  } catch (e) {
    console.info("> error at 'register' query: ", e.message);
    return false;
  }
};

const activate = async (db, { token }) => {
  try {
    // confirm does exist
    const result = await searchByToken(db, { token });
    if (!result) throw new Error("User not found by given token")

    // activate account
    const update = await db.query(sql`
      UPDATE users
      SET active = true, token_confirm = null, modified_at = now()
      WHERE token_confirm = ${token};
    `)
    return result
  } catch (e) {
    console.info("> error at 'activate' query: ", e.message);
    return false;
  }
};

module.exports = {
  auth: { register, activate },
};
