const db = require('../../configs/db')
const { sql } = require('slonik')

const drop = async () => {
  try {

    await db.query(sql`
      -- static
      DROP TABLE IF EXISTS users CASCADE;

      -- extensions
      DROP EXTENSION IF EXISTS "uuid-ossp";
    
    `)

    console.info('> drops done! 🚀')
  } catch (error) {
    console.info('> drops error! ❌')
    console.info('>', error.message)
  }
}

drop()