const db = require('../../configs/db')
const { sql } = require('slonik')

const insert = async () => {
  try {

    return db.transaction( async tx => {

    /**
     * review all the SQL queries to debug the foreign key integrity constraint. insert or update on table "usuarios" violates foreign key constraint "usuarios_id_usuario_fkey".
     */
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