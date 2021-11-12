const db = require('../../configs/db')
const { sql } = require('slonik')

const insert = async () => {
  try {

    return db.transaction( async tx => {

    // users
    await tx.query(sql`
    INSERT INTO users
        ( email, username, hash, token_confirm ) 
      VALUES 
        ('email', 'username', 'hash', 'token'),
        ('email1', 'username1', 'hash', 'token');
    `)
    console.info('> seeds done! 🚀')
  
  })
  } catch (error) {
    console.info('> seeds error! ❌')
    console.info('>', error.message)
  }
}

insert()