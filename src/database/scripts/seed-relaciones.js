const db = require('../../configs/db')
const { sql } = require('slonik')

const insert = async () => {
  try {

    return db.transaction( async tx => {

    // users
    await tx.query(sql`

    

    `)
    console.info('> seeds done! 🚀')
  
  })
  } catch (error) {
    console.info('> seeds error! ❌')
    console.info('>', error.message)
  }
}

insert()