const db = require('../../configs/db')
const { sql } = require('slonik')

const insert = async () => {
  try {

    return db.transaction( async tx => {

    // users
    await tx.query(sql`

      INSERT INTO users 
          (email, hash, token_confirm ) 
        VALUES
          ('Luisa.Fernandez@gmail.com', 'LuisaFer76', 'token'),
          ('Esther.Casado@gmail.com', 'EsterCasado', 'token'),
          ('Carlos.Campo@gmail.com', 'Carlos69', 'token'),
          ('Sonia.Gutierrez@gmail.com', 'Sonia_Guti', 'token'),
          ('Maria.Benitez@hotmail.com', 'Machan', 'token'),
          ('Mari.Carmen.Gonzalez@hotmail.es', 'Maca_laguapa', 'token'),
          ('Jose.Ma.Apolo@hotmail.com', 'JMApolo', 'token');

    `)
    console.info('> seeds done! 🚀')
  
  })
  } catch (error) {
    console.info('> seeds error! ❌')
    console.info('>', error.message)
  }
}

insert()