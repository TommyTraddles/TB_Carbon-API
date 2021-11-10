const db = require('../../configs/db')
const { sql } = require('slonik')

const create = async () => {
  try {

    return db.transaction(async tx => {

    // extension and enum
    await tx.query(sql`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    `)

    // users  (state => comunidad autónoma)
    await tx.query(sql`
    CREATE TABLE users (
      id            uuid            PRIMARY KEY default uuid_generate_v4(),
      email         VARCHAR(50)     unique not null,
      username      VARCHAR(50)     unique not null,
      hash          TEXT            not null,
      first_name    VARCHAR(50)     ,
      last_name     VARCHAR(50)     ,
      DNI           VARCHAR(50)     unique not null,
      date_birth    VARCHAR(50)     ,
      phone         VARCHAR(50)     ,
      postcode      VARCHAR(50)     ,
      city          VARCHAR(50)     ,
      state         VARCHAR(50)     ,
      country       VARCHAR(50)     ,
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

    //collaborating companies (state => counidad autónoma)
    await tx.query(sql`
    CREATE TABLE collaborating_companies (
      id_company    uuid            PRIMARY KEY default uuid_generate_v4(),
      name          VARCHAR(50)     ,
      CNAE          VARCHAR(50)     ,
      address       VARCHAR(50)     ,
      postcode      VARCHAR(50)     ,
      phone         VARCHAR(50)     ,
      city          VARCHAR(50)     ,
      state         VARCHAR(50)     ,
      country       Varchar(50)     ,
    );
    `)

    //carbon footprint login
    await tx.query(sql`
    CREATE TABLE carbon_footprint_log (
      id_company    uuid            references collaborating_companies(id),
      created_at    TIMESTAMP       not null default (now() at time zone 'UTC'),
      stamp         VARCHAR(50)     ,
      scope         DECIMAL NOT NULL,

    );
    `)

    //carbon database
    await tx.query(sql`
    CREATE TABLE carbon_data (
      id            uuid            references users(id),
      created_at    TIMESTAMP       not null default (now() at time zone 'UTC'),
    );
    `)

    //donations
    await tx.query(sql`
    CREATE TABLE donations (
      id_donations   uuid           PRIMARY KEY default uuid_generate_v4(),
      id             uuid           references users(id),
      id_company     uuid           references collaborating_companies(id),
      donation_date  TIMESTAMP NOT NULL DEFAULT (now() AT TIME ZONE 'UTC'),
      end_date_of_donation  TIMESTAMP NOT NULL DEFAULT (now() AT TIME ZONE 'UTC'),
      donated_amount DECIMAL NOT null,
    );
    `)

    //personal relationships
    await tx.query(sql`
    CREATE TABLE personal_relationships (
      id_relationship uuid           PRIMARY KEY default uuid_generate_v4(),
      id              uuid           references users(id),
      initiation_date TIMESTAMP NOT NULL DEFAULT (now() AT TIME ZONE 'UTC'),
      relationship_type VARCHAR(50),
    );
    `)
    
    //vehicle
    await tx.query(sql`
    CREATE TABLE vehicle (
      id_vehicle      uuid            PRIMARY KEY default uuid_generate_v4(), 

    )`)

    //mobility
    await tx.query(sql`
    CREATE TABLE mobility (
      id_mobility     uuid            PRIMARY KEY default uuid_generate_v4(),
      id_vehicle      uuid            references vehicle(id),
      id              uuid            references users(id),
    );
    `)

    //employment data
    await tx.query(sql`
    CREATE TABLE employment_data (
      id_employment_data  uuid        PRIMARY KEY default uuid_generate_v4(),
      id              uuid            references users(id),
    )`)

    console.info('> creation done! 🚀')
  })
  } catch (error) {
    console.info('> creation error! ❌')
    console.info('>', error.message)
  }
}

create()