const db = require('../../configs/db')
const { sql } = require('slonik')

const create = async () => {
  try {

    return db.transaction(async tx => {

    // extension and enum
    await tx.query(sql`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    `)

    // users
    await tx.query(sql`
    CREATE TABLE users (
      id            uuid            PRIMARY KEY default uuid_generate_v4(),
      email         VARCHAR(50)     unique not null,
      username      VARCHAR(50)     unique not null,
      hash          TEXT            not null,
      first_name    VARCHAR(50)     ,
      last_name     VARCHAR(50)     ,
      -- tokens
      token_reset   TEXT            ,
      token_confirm TEXT            ,
      token_session TEXT            ,
      -- user preferences
      dark_theme    BOOLEAN         default false,
      -- user assets
      profile_pic   TEXT            ,
      -- marketing
      newsletter    BOOLEAN         default false,
      -- danger zone
      active        BOOLEAN         not null default false,
      deleted       BOOLEAN         not null default false,
      created_at    TIMESTAMP       not null default (now() at time zone 'UTC'),
      modified_at   TIMESTAMP       not null default (now() at time zone 'UTC')
    );
    `)

    console.info('> creation done! 🚀')
  })
  } catch (error) {
    console.info('> creation error! ❌')
    console.info('>', error.message)
  }
}

create()