const db = require('../../configs/db')
const { sql } = require('slonik')

const insert = async () => {
  try {

    return db.transaction( async tx => {

    // users
    await tx.query(sql`

INSERT INTO DIRECCIONES 
    (cod_postal, Municipio, Provincia, latitud, longitud)
VALUES
    ('240', 'Alegría-Dulantzi', 'Araba/Álava', -2.712437310, 42.939811580),
    ('1193', 'Alegría-Dulantzi', 'Araba/Álava', -2.712437310, 42.939811580);

    `)
    console.info('> seeds-direcciones done! 🚀')
  
  })
  } catch (error) {
    console.info('> seeds-direcciones error! ❌')
    console.info('>', error.message)
  }
}

insert()