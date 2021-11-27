const db = require('../../configs/db')
const { sql } = require('slonik')

const insert = async () => {
  try {

    return db.transaction( async tx => {

    // users
    await tx.query(sql`

    INSERT INTO DIRECCIONES 
        (Provincia, Municipio, cod_postal, latitud, longitud)
    VALUES
        ('Araba/Álava', 'Alegría-Dulantzi', '240', '-2.71243731', '42.93981158'),
        ('Araba/Álava', 'Alegría-Dulantzi', '1193', '-2.71243731', '42.93981158');

    `)
    console.info('> seeds-direcciones done! 🚀')
  
  })
  } catch (error) {
    console.info('> seeds-direcciones error! ❌')
    console.info('>', error.message)
  }
}

insert()