const db = require('../../configs/db')
const { sql } = require('slonik')

const deletion = async () => {
  try {
    await db.query(sql`
      -- static
      DELETE FROM users;
    `)

    console.info('> drops done! 🚀')
  } catch (error) {
    console.info('> drops error! ❌')
    console.info('>', error.message)
  }
}

deletion()