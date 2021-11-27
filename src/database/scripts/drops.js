const db = require('../../configs/db')
const { sql } = require('slonik')

const drop = async () => {
  try {

    await db.query(sql`
      -- DROP DATABASE IF EXISTS eCO2db;
      DROP EXTENSION IF EXISTS "uuid-ossp" CASCADE;
      DROP TABLE IF EXISTS users CASCADE;
      DROP TABLE IF EXISTS USUARIOS CASCADE;
      DROP TABLE IF EXISTS CAT_SERVICIOS CASCADE;
      DROP TABLE IF EXISTS INICIATIVAS CASCADE;
      DROP TABLE IF EXISTS ACTIVIDADES_REDUCCION CASCADE;
      DROP TABLE IF EXISTS DIRECCIONES CASCADE;
      DROP TABLE IF EXISTS ORGANIZACIONES CASCADE;
      DROP TABLE IF EXISTS LOGROS CASCADE;
      DROP TABLE IF EXISTS FORMULARIO_INICIAL CASCADE;
      DROP TABLE IF EXISTS Actividades_sustituciones CASCADE;
      DROP TABLE IF EXISTS Donaciones CASCADE;
      DROP TABLE IF EXISTS Compromisos_diarios CASCADE;
      DROP TABLE IF EXISTS Relaciones_interpersonales CASCADE;
      DROP TABLE IF EXISTS Localizacion CASCADE;
      DROP TABLE IF EXISTS Servicios CASCADE;
      DROP TABLE IF EXISTS Vacaciones CASCADE;
      DROP TABLE IF EXISTS Viajes CASCADE;
      DROP TABLE IF EXISTS Actividad_fisica CASCADE;
      DROP TABLE IF EXISTS HC0_calculo CASCADE;
      DROP TABLE IF EXISTS Logrado CASCADE;
      DROP TABLE IF EXISTS registro_huella_c CASCADE;
      DROP TABLE IF EXISTS alojamiento CASCADE;
      DROP TABLE IF EXISTS transportes CASCADE;
      DROP TABLE IF EXISTS tipo_vivienda CASCADE;
      DROP TABLE IF EXISTS calefaccion CASCADE;
      DROP TABLE IF EXISTS alimentacion CASCADE;
      DROP TABLE IF EXISTS vehiculos CASCADE;
      DROP TABLE IF EXISTS combustible CASCADE;
      DROP TABLE IF EXISTS deportes CASCADE;  
    `)

    console.info('> drops done! 🚀')
  } catch (error) {
    console.info('> drops error! ❌')
    console.info('>', error.message)
  }
}

drop()