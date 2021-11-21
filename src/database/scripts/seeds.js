const db = require('../../configs/db')
const { sql } = require('slonik')

const insert = async () => {
  try {

    return db.transaction( async tx => {

    // users
    await tx.query(sql`
    INSERT INTO users
        ( email, hash, token_confirm ) 
      VALUES 
        ('email', 'hash', 'token'),
        ('email1', 'hash', 'token');
    `)
    console.info('> seeds done! 🚀')
  
  })
  } catch (error) {
    console.info('> seeds error! ❌')
    console.info('>', error.message)
  }
}

insert()