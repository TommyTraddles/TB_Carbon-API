const { sql } = require('slonik')

const exists = async (db, {email, username}) => {
  return await db.maybeOne(sql`
    SELECT * FROM users WHERE email = ${email} OR username = ${username}
  `)
}

const register = async (db, {email, hashed, username, token}) => {
  try {
    // confirm doesn't exist
    const result = await exists(db, {email, username})
    if(result) throw new Error ('Username or Email taken')
    
    // create user 
    return await db.query(sql`
    INSERT INTO users ( email, username, hash, token_confirm ) 
    VALUES (${email}, ${username} , ${hashed}, ${token});
    `)
  } catch (e) {
    console.info("> error at 'register' query: ", e.message)
    return false
  }
}

module.exports = {
  register,
}