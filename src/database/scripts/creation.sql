
-- CREATE DATABASE eCO2db;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
      id                                           uuid            PRIMARY KEY default uuid_generate_v4(),
      email                                        VARCHAR(50)     unique not null,
      hash                                         TEXT            not null,
      username                                     VARCHAR(50)     unique,
      token_reset                                  TEXT            ,
      token_confirm                                TEXT            ,
      token_session                                TEXT            ,
      active                                       BOOLEAN         default false,
      created_at                                   TIMESTAMP       not null default (now() at time zone 'UTC'),
      modified_at                                  TIMESTAMP       not null default (now() at time zone 'UTC')
    );

CREATE TABLE USUARIOS (
	ID_usuario                                     uuid            PRIMARY KEY default uuid_generate_v4(),
	Nombre                                         VARCHAR(50)     NOT NULL,
    Apellidos                                      VARCHAR(50),
	Fecha_nacimiento                               DATE,
	Tel_movil                                      CHAR(13)        UNIQUE NOT NULL
	);

CREATE TABLE CAT_SERVICIOS (
	ID_servicio                                    uuid            PRIMARY KEY default uuid_generate_v4(),
	Nombre_servicio                                VARCHAR(45)     UNIQUE NOT NULL,
	Descripcion_servicio                           VARCHAR(250),
	Implicaciones_medioambientales_del_servicio    VARCHAR(400)
	);

CREATE TABLE ORGANIZACIONES (
	ID_organizacion                                uuid            PRIMARY KEY default uuid_generate_v4(),
	Nombre                                         VARCHAR(100)     UNIQUE NOT NULL,
	CNAE                                           VARCHAR(10)     UNIQUE NOT NULL,
	Direccion_postal                               VARCHAR(150),
	Cod_postal                                     CHAR(5),
	Telefono                                       CHAR(13)        UNIQUE NOT NULL
    );

CREATE TABLE INICIATIVAS (
	ID_iniciativa	                               uuid             PRIMARY KEY default uuid_generate_v4(),
	Nombre                                         VARCHAR(100)     UNIQUE NOT NULL,
	Descripcion_corta                              VARCHAR(150),
	Descripcion_larga                              VARCHAR(1000),
	Cod_postal                                     CHAR(5),
	Correo_electronico                             VARCHAR(100)      UNIQUE NOT NULL,
    HC_red_base                                    CHAR(5)
    );

CREATE TABLE ACTIVIDADES_REDUCCION (
	ID_actividad                                   uuid            PRIMARY KEY default uuid_generate_v4(),
	Titulo_act                                     VARCHAR(70)     UNIQUE NOT NULL,
	Ambito                                         VARCHAR(50),
	Descripcion                                    VARCHAR(300),
	Cantidad_reducible                             CHAR(5),
    Promocionado                                   BOOLEAN,
    Num_dias_para_logro                            CHAR(1)
    );

CREATE TABLE DIRECCIONES (
    cod_postal                                     CHAR(5)         PRIMARY KEY,
    Municipio                                      VARCHAR(100)     NOT NULL,
    Provincia                                      VARCHAR(100)     NOT NULL,
    Comunidad_autonoma                             VARCHAR(100)     NOT NULL,
    latitud                                        INTEGER         NOT NULL,
    longitud                                       INTEGER         NOT NULL
    );

CREATE TABLE LOGROS (
  	ID_logro                                       uuid            PRIMARY KEY default uuid_generate_v4(),
    Icono                                          VARCHAR(150)    NOT NULL,
    Logro                                          VARCHAR(100)    NOT NULL,
    Vertical                                       VARCHAR(100)     NOT NULL
    );

CREATE TABLE FORMULARIO_INICIAL (
  	ID_formulario                                  uuid            PRIMARY KEY default uuid_generate_v4(),
    ID_vivienda                                    uuid            NOT NULL default uuid_generate_v4(),
    ID_calefaccion                                 uuid            NOT NULL default uuid_generate_v4(),
    ID_alimentacion                                uuid            NOT NULL default uuid_generate_v4(),
    ID_vehiculo                                    uuid            NOT NULL default uuid_generate_v4(),
    ID_combustible                                 uuid            NOT NULL default uuid_generate_v4(),
  	Sup_m2                                         CHAR(5),
  	n_personas_vivienda                            CHAR(5),
  	consumo_luz                                    CHAR(5),
  	Frec_consumo_locales                           CHAR(5),
    N_comidas_fuera_semana                         CHAR(5),
    N_km_anno                                      CHAR(5),
    Compras_ropa                                   CHAR(5),
    Serv_streaming                                 BOOLEAN,
    Uso_streaming_h_sem                            CHAR(5)
    );

-- Tablas de relación (secundarias)

CREATE TABLE Actividades_sustituciones (
    ID_actividad                                  uuid            PRIMARY KEY default uuid_generate_v4(),
    ID_usuario                                    uuid            NOT NULL default uuid_generate_v4(),
    ID_serv_org                                   uuid            NOT NULL default uuid_generate_v4(),
    Tipo_act                                      VARCHAR(100)     NOT NULL,
    Ambito_act                                    VARCHAR(100)     NOT NULL,
    HCarbono_asignada                             INTEGER         NOT NULL,
    Descripcion_detallada                         VARCHAR(1000)   NOT NULL
    );

CREATE TABLE Donaciones (
    ID_usuario                                    uuid            NOT NULL default uuid_generate_v4(),
    ID_iniciativa                                 uuid            NOT NULL default uuid_generate_v4(),
    HCarbono_asignada                             INTEGER         NOT NULL,
    Descripcion_detallada                         VARCHAR(1000)   NOT NULL
    );

CREATE TABLE Compromisos_diarios (
    ID_actividad                                  uuid            NOT NULL default uuid_generate_v4(),
    ID_usuario                                    uuid            NOT NULL default uuid_generate_v4(),
    Fecha_diaria                                  DATE            NOT NULL,
    Aceptacion_compromiso                         BOOLEAN,  --Hay que hacer que según el Num_dias_para_logro, active ese número de días según la primera fecha del compromiso
    Compromiso_realizado                          BOOLEAN,
    Notas_usuario                                 VARCHAR(1000)
    );

CREATE TABLE Relaciones_interpersonales (
    ID_usuario_1                                  uuid            NOT NULL default uuid_generate_v4(),
    ID_usuario_2                                  uuid            NOT NULL default uuid_generate_v4(),
    Fecha_inscripcion_relacion                    DATE            NOT NULL,
    Tipo                                          VARCHAR(40)     NOT NULL
    );

CREATE TABLE Localizacion (
    ID_usuario                                    uuid            NOT NULL default uuid_generate_v4(),
    cod_postal                                    CHAR(5)         NOT NULL,
    Fecha_actualizacion                           DATE            NOT NULL,
    latitud                                       INTEGER         NOT NULL,
    longitud                                      INTEGER         NOT NULL
    );

CREATE TABLE Servicios (
    ID_serv_org                                   uuid            PRIMARY KEY default uuid_generate_v4(),
    ID_servicio                                   uuid            NOT NULL default uuid_generate_v4(),
    ID_organizacion                               uuid            NOT NULL default uuid_generate_v4(),
    HCarbono_asignada                             INTEGER         NOT NULL,
    Descripcion_detallada                         VARCHAR(1000)
    );

CREATE TABLE Vacaciones (
    ID_formulario                                  uuid          NOT NULL default uuid_generate_v4(),
    ID_alojamiento                                 uuid          NOT NULL default uuid_generate_v4(),
    N_dias                                         CHAR(5)       NOT NULL
    );

CREATE TABLE Viajes (
    ID_formulario                                  uuid          NOT NULL default uuid_generate_v4(),
    ID_transporte                                  uuid          NOT NULL default uuid_generate_v4(),
    Vacacional                                     BOOLEAN,
    distancia_km                                   CHAR(5)       NOT NULL,
    n_horas_sem                                    CHAR(5)       NOT NULL
    );

CREATE TABLE Actividad_fisica (
    ID_formulario                                  uuid          NOT NULL default uuid_generate_v4(),
    ID_deporte                                     uuid          NOT NULL default uuid_generate_v4(),
    N_h_sem                                        CHAR(5)       NOT NULL
    );

CREATE TABLE HC0_calculo (
    ID_formulario                                  uuid          NOT NULL default uuid_generate_v4(),
    ID_usuario                                     uuid          NOT NULL default uuid_generate_v4(),
    Fecha_calculo                                  DATE,
    Hogar                                          CHAR(5)       NOT NULL,
    Transporte                                     CHAR(5)       NOT NULL,
    Alimentacion                                   CHAR(5)       NOT NULL,
    Otros                                          CHAR(5)       NOT NULL,
    Inicial                                        BOOLEAN
    );

CREATE TABLE Logrado (
    ID_usuario                                     uuid          NOT NULL default uuid_generate_v4(),
    ID_logro                                       uuid          NOT NULL default uuid_generate_v4(),
    Logrado                                        BOOLEAN
    );

-- Tablas auxiliares

CREATE TABLE registro_huella_c (
    ID_organizacion                               uuid           PRIMARY KEY default uuid_generate_v4(),
    Fecha_inscripcion                             DATE           NOT NULL,
    Sello                                         VARCHAR(40)    NOT NULL,
    Alcance                                       CHAR(1)        NOT NULL
    );

CREATE TABLE alojamiento (
    ID_alojamiento                               uuid            PRIMARY KEY default uuid_generate_v4(),
    Tipo                                         VARCHAR(100)     NOT NULL,
    HC_base                                      CHAR(5)         NOT NULL
    );

CREATE TABLE transportes (
    ID_transporte                                uuid            PRIMARY KEY default uuid_generate_v4(),
    Tipo                                         VARCHAR(100)     NOT NULL,
    HC_base                                      CHAR(5)         NOT NULL
    );

CREATE TABLE tipo_vivienda (
    ID_vivienda                                  uuid            PRIMARY KEY default uuid_generate_v4(),
    Tipo                                         VARCHAR(100)     NOT NULL,
    HC_base                                      CHAR(5)         NOT NULL
    );

CREATE TABLE calefaccion (
    ID_calefaccion                               uuid            PRIMARY KEY default uuid_generate_v4(),
    Tipo                                         VARCHAR(100)     NOT NULL,
    HC_base                                      CHAR(5)         NOT NULL
    );

CREATE TABLE alimentacion (
    ID_alimentacion                              uuid            PRIMARY KEY default uuid_generate_v4(),
    Tipo                                         VARCHAR(100)     NOT NULL,
    HC_base                                      CHAR(5)         NOT NULL
    );

CREATE TABLE vehiculos (
    ID_vehiculo                                  uuid            PRIMARY KEY default uuid_generate_v4(),
    Tipo                                         VARCHAR(100)     NOT NULL,
    HC_base                                      CHAR(5)         NOT NULL
    );

CREATE TABLE combustible (
    ID_combustible                               uuid            PRIMARY KEY default uuid_generate_v4(),
    Tipo                                         VARCHAR(100)     NOT NULL,
    HC_base                                      CHAR(5)         NOT NULL
    );

CREATE TABLE deportes (
    ID_deporte                                   uuid            PRIMARY KEY default uuid_generate_v4(),
    Tipo                                         VARCHAR(100)     NOT NULL,
    HC_base                                      CHAR(5)         NOT NULL
    );

-- Relaciones entre tablas

ALTER TABLE USUARIOS
    ADD FOREIGN KEY(ID_usuario) REFERENCES users(id);

ALTER TABLE Relaciones_interpersonales
    ADD FOREIGN KEY(ID_usuario_1) REFERENCES USUARIOS(ID_usuario),
    ADD FOREIGN KEY(ID_usuario_2) REFERENCES USUARIOS(ID_usuario);

ALTER TABLE registro_huella_c
    ADD FOREIGN KEY(ID_organizacion) REFERENCES ORGANIZACIONES(ID_organizacion);

ALTER TABLE Servicios
    ADD FOREIGN KEY(ID_servicio) REFERENCES CAT_SERVICIOS(ID_servicio),
    ADD FOREIGN KEY(ID_organizacion) REFERENCES ORGANIZACIONES(ID_organizacion);

ALTER TABLE Actividades_sustituciones
    ADD FOREIGN KEY(ID_usuario) REFERENCES USUARIOS(ID_usuario),
    ADD FOREIGN KEY(ID_serv_org) REFERENCES Servicios(ID_serv_org);

ALTER TABLE Donaciones
    ADD FOREIGN KEY(ID_usuario) REFERENCES USUARIOS(ID_usuario),
    ADD FOREIGN KEY(ID_iniciativa) REFERENCES INICIATIVAS(ID_iniciativa);

ALTER TABLE Compromisos_diarios
    ADD FOREIGN KEY(ID_usuario) REFERENCES USUARIOS(ID_usuario),
    ADD FOREIGN KEY(ID_actividad) REFERENCES ACTIVIDADES_REDUCCION(ID_actividad);

ALTER TABLE Localizacion
    ADD FOREIGN KEY(ID_usuario) REFERENCES USUARIOS(ID_usuario),
    ADD FOREIGN KEY(cod_postal) REFERENCES DIRECCIONES(cod_postal);

ALTER TABLE ORGANIZACIONES
    ADD FOREIGN KEY(cod_postal) REFERENCES DIRECCIONES(cod_postal);

ALTER TABLE INICIATIVAS
    ADD FOREIGN KEY(cod_postal) REFERENCES DIRECCIONES(cod_postal); 

ALTER TABLE HC0_calculo
    ADD FOREIGN KEY(ID_usuario) REFERENCES USUARIOS(ID_usuario),
    ADD FOREIGN KEY(ID_formulario) REFERENCES FORMULARIO_INICIAL(ID_formulario);

ALTER TABLE Vacaciones
    ADD FOREIGN KEY(ID_alojamiento) REFERENCES alojamiento(ID_alojamiento),
    ADD FOREIGN KEY(ID_formulario) REFERENCES FORMULARIO_INICIAL(ID_formulario);

ALTER TABLE Viajes
    ADD FOREIGN KEY(ID_transporte) REFERENCES transportes(ID_transporte),
    ADD FOREIGN KEY(ID_formulario) REFERENCES FORMULARIO_INICIAL(ID_formulario);

ALTER TABLE Actividad_fisica
    ADD FOREIGN KEY(ID_deporte) REFERENCES deportes(ID_deporte),
    ADD FOREIGN KEY(ID_formulario) REFERENCES FORMULARIO_INICIAL(ID_formulario);

ALTER TABLE FORMULARIO_INICIAL
    ADD FOREIGN KEY(ID_vivienda) REFERENCES tipo_vivienda(ID_vivienda),
    ADD FOREIGN KEY(ID_calefaccion) REFERENCES calefaccion(ID_calefaccion),
    ADD FOREIGN KEY(ID_alimentacion) REFERENCES alimentacion(ID_alimentacion),
    ADD FOREIGN KEY(ID_vehiculo) REFERENCES vehiculos(ID_vehiculo),
    ADD FOREIGN KEY(ID_combustible) REFERENCES combustible(ID_combustible);

ALTER TABLE Logrado
    ADD FOREIGN KEY(ID_usuario) REFERENCES USUARIOS(ID_usuario),
    ADD FOREIGN KEY(ID_logro) REFERENCES LOGROS(ID_logro);
