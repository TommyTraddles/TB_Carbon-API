-- ✅ GENERAR ID

-- ✅
INSERT INTO USUARIOS
        (ID_usuario, Nombre, Apellidos, Fecha_nacimiento, Tel_movil)
    VALUES
        ('7379aab0-8770-46a7-98b0-f3b9ff1a45ac', 'Luisa', 'Fernández', '1976-9-25', 600000000),
        ('915274d2-a765-4f4e-8819-82c337d700d2', 'Esther', 'Casado', '1983-03-02', 600000001),
        ('5560b217-eeb7-44ba-b31a-da3cc23f719b', 'Carlos', 'Campo', '1969-06-05', 600000002),
        ('b0c3403a-0b4a-4007-9dc8-c21f86224ede', 'Sonia', 'Gutierrez', '1987-1-2', 600000003),
        ('2139fb78-7d80-427f-a1d6-87d2b892e5be', 'María', 'Benitez', '1979-5-5', 600000004),
        ('16866e30-6682-4768-b384-ce0edb63271d', 'Mari Carmen', 'Gonzalez', '1988-6-4', 600000005),
        ('895a109a-2f85-425a-b439-eb9599cbaf6b', 'José María', 'Apolo', '1975-11-1', 600000006);

-- ✅
INSERT INTO FORMULARIO_INICIAL
        (ID_vivienda, Sup_m2, n_personas_vivienda, consumo_luz, ID_calefaccion, Frec_consumo_locales, ID_alimentacion, N_comidas_fuera_semana, ID_vehiculo, ID_combustible, N_km_anno, Compras_ropa, Serv_streaming, Uso_streaming_h_sem)
    VALUES
        ('0c968cb0-21ee-4e17-8970-b3dcb653c92c', '60', '1', '163', '11f062ec-5286-4d35-b3bc-d524830a5f4a', '3', '3411b4a5-36a9-4976-a22c-63fa1fb4d6cd', '1', 'a1d86a47-a342-4851-bff1-63110bf21393', '2b0633ba-6e18-4701-865c-5b3a79dd253a', '12646', '6', true, '80'),
        ('0c968cb0-21ee-4e17-8970-b3dcb653c92c', '120', '2', '291', '3af5e6e8-dcf1-4fea-82ce-e9e1539a8903', '4', 'c096187c-51ed-46e2-a468-b7f2b9cc892a', '4', '2f3198eb-5b63-4755-82c3-ccf1f3fa9083', 'd5ca5070-745d-4961-a48d-141ccb806875', '20938', '3', false, '0'),
        ('d541e9e7-5d2d-418e-b296-bd53fdae20d0', '92', '4', '310', '8f287cbb-fc74-4147-91d8-903716a27467', '1', '14a88ac4-f77f-4d8c-a460-0a1b99f5fbc0', '5', '128d1b0f-3c32-404a-9b81-3a0b017ba82d', '2b0633ba-6e18-4701-865c-5b3a79dd253a', '60988', '2', true, '185'),
        ('0c968cb0-21ee-4e17-8970-b3dcb653c92c', '96', '1', '198', '2244225a-9d89-4098-a713-312d1ecbda12', '3', '01c6f8f7-f129-4ed8-a833-bc4a64812414', '3', '2f3198eb-5b63-4755-82c3-ccf1f3fa9083', 'e98847b1-d5cc-4fed-a805-75fa32c18763', '10009', '4', true, '90'),
        ('d541e9e7-5d2d-418e-b296-bd53fdae20d0', '100', '2', '240', '2244225a-9d89-4098-a713-312d1ecbda12', '6', 'd5954776-f6ca-43db-9ac2-0a1682d17d92', '2', '2f3198eb-5b63-4755-82c3-ccf1f3fa9083', 'fda88539-ea37-4b81-883f-0ecfec9c9b43', '35660', '2', false, '0'),
        ('f0295909-0536-4333-be81-4d7d3018d9fe', '300', '1', '480', 'b61e2e86-4ec9-48bd-8adc-67a673f9ad93', '0', '90faed3f-68ae-42ae-a7ab-672824814a47', '0', '128d1b0f-3c32-404a-9b81-3a0b017ba82d', 'fda88539-ea37-4b81-883f-0ecfec9c9b43', '9800', '1', false, '0'),
        ('bd365c62-231d-44e2-9633-cf7a0f1b73df', '164', '3', '392', '11f062ec-5286-4d35-b3bc-d524830a5f4a', '1', '14a88ac4-f77f-4d8c-a460-0a1b99f5fbc0', '2', 'fe102f56-5608-4472-85c1-5d6c9413c096', 'fda88539-ea37-4b81-883f-0ecfec9c9b43', '14288', '9', true, '79');

-- ✅
INSERT INTO RELACIONES_INTERPERSONALES
        (ID_usuario_1, ID_usuario_2, Fecha_inscripcion_relacion, Tipo)
    VALUES
        ('7379aab0-8770-46a7-98b0-f3b9ff1a45ac', '5560b217-eeb7-44ba-b31a-da3cc23f719b', '2021-12-1', 'Pareja'),
        ('915274d2-a765-4f4e-8819-82c337d700d2', 'b0c3403a-0b4a-4007-9dc8-c21f86224ede', '2021-12-1', 'Amigo'),
        ('5560b217-eeb7-44ba-b31a-da3cc23f719b', '895a109a-2f85-425a-b439-eb9599cbaf6b', '2021-12-1', 'Amigo'),
        ('b0c3403a-0b4a-4007-9dc8-c21f86224ede', '915274d2-a765-4f4e-8819-82c337d700d2', '2021-12-1', 'Amigo'),
        ('2139fb78-7d80-427f-a1d6-87d2b892e5be', '5560b217-eeb7-44ba-b31a-da3cc23f719b', '2021-12-1', 'Amigo'),
        ('16866e30-6682-4768-b384-ce0edb63271d', 'b0c3403a-0b4a-4007-9dc8-c21f86224ede', '2021-12-1', 'Amigo'),
        ('895a109a-2f85-425a-b439-eb9599cbaf6b', '2139fb78-7d80-427f-a1d6-87d2b892e5be', '2021-12-1', 'Parejo'),
        ('7379aab0-8770-46a7-98b0-f3b9ff1a45ac', '16866e30-6682-4768-b384-ce0edb63271d', '2021-12-1', 'Amigo');

-- ✅
-- Altero el nombre de la columna "HCarbono_asignada" a "donacion", porque es algo que se quedó ahí con el nombre mal puesto.
ALTER TABLE DONACIONES RENAME COLUMN HCarbono_asignada TO donacion;

-- ✅
INSERT INTO DONACIONES
        (ID_usuario, ID_iniciativa, donacion, Descripcion_detallada)
    VALUES
        ('16866e30-6682-4768-b384-ce0edb63271d', '115913ff-7aee-4f9f-85e1-aeb0b76fbbf4', 60, '.'),
        ('895a109a-2f85-425a-b439-eb9599cbaf6b', '115913ff-7aee-4f9f-85e1-aeb0b76fbbf4', 80, '.'),
        ('915274d2-a765-4f4e-8819-82c337d700d2', '115913ff-7aee-4f9f-85e1-aeb0b76fbbf4', 40, '.'),
        ('5560b217-eeb7-44ba-b31a-da3cc23f719b', '9ff45a2f-7d85-4349-adcc-e4aabdd901d4', 50, '.'),
        ('b0c3403a-0b4a-4007-9dc8-c21f86224ede', '8b78c456-d804-46bf-b6fb-123643d36143', 10, '.'),
        ('7379aab0-8770-46a7-98b0-f3b9ff1a45ac', '115913ff-7aee-4f9f-85e1-aeb0b76fbbf4', 20, '.'),
        ('7379aab0-8770-46a7-98b0-f3b9ff1a45ac', '84494b20-af4e-42b7-8f28-f7f4e639ddf6', 20, '.'),
        ('7379aab0-8770-46a7-98b0-f3b9ff1a45ac', '9ff45a2f-7d85-4349-adcc-e4aabdd901d4', 20, '.'),
        ('7379aab0-8770-46a7-98b0-f3b9ff1a45ac', '8b78c456-d804-46bf-b6fb-123643d36143', 20, '.');

-- ✅
INSERT INTO LOCALIZACION
        (ID_usuario, cod_postal, Fecha_actualizacion, latitud, longitud)
    VALUES
        ('7379aab0-8770-46a7-98b0-f3b9ff1a45ac', '28925', '2021-12-1', -3.82849494, 40.35156977),
        ('915274d2-a765-4f4e-8819-82c337d700d2', '28801', '2021-12-1', -3.36925102, 40.48033232),
        ('5560b217-eeb7-44ba-b31a-da3cc23f719b', '28802', '2021-12-1', -3.36925102, 40.48033232),
        ('b0c3403a-0b4a-4007-9dc8-c21f86224ede', '28802', '2021-12-1', -3.36925102, 40.48033232),
        ('2139fb78-7d80-427f-a1d6-87d2b892e5be', '28804', '2021-12-1', -3.36925102, 40.48033232),
        ('16866e30-6682-4768-b384-ce0edb63271d', '28620', '2021-12-1', -4.20244123, 40.32590971),
        ('895a109a-2f85-425a-b439-eb9599cbaf6b', '28807', '2021-12-1', -3.99079756, 40.22825607);

-- ✅
INSERT INTO Logrado
        (ID_usuario, ID_logro, Logrado)
    VALUES
        ('7379aab0-8770-46a7-98b0-f3b9ff1a45ac', 'c1b74c4d-cb58-46cb-9ac2-94427e41dec2', true),
        ('915274d2-a765-4f4e-8819-82c337d700d2', 'c1b74c4d-cb58-46cb-9ac2-94427e41dec2', true),
        ('5560b217-eeb7-44ba-b31a-da3cc23f719b', 'c1b74c4d-cb58-46cb-9ac2-94427e41dec2', true),
        ('b0c3403a-0b4a-4007-9dc8-c21f86224ede', 'c1b74c4d-cb58-46cb-9ac2-94427e41dec2', true),
        ('2139fb78-7d80-427f-a1d6-87d2b892e5be', 'c1b74c4d-cb58-46cb-9ac2-94427e41dec2', true),
        ('16866e30-6682-4768-b384-ce0edb63271d', 'c1b74c4d-cb58-46cb-9ac2-94427e41dec2', true),
        ('895a109a-2f85-425a-b439-eb9599cbaf6b', 'c1b74c4d-cb58-46cb-9ac2-94427e41dec2', true),
        ('7379aab0-8770-46a7-98b0-f3b9ff1a45ac', '8a1b8edd-6ea8-4060-b056-f4a0326ceb68', true),
        ('915274d2-a765-4f4e-8819-82c337d700d2', '8a1b8edd-6ea8-4060-b056-f4a0326ceb68', true),
        ('5560b217-eeb7-44ba-b31a-da3cc23f719b', '8a1b8edd-6ea8-4060-b056-f4a0326ceb68', true),
        ('b0c3403a-0b4a-4007-9dc8-c21f86224ede', '8a1b8edd-6ea8-4060-b056-f4a0326ceb68', true),
        ('2139fb78-7d80-427f-a1d6-87d2b892e5be', '8a1b8edd-6ea8-4060-b056-f4a0326ceb68', true),
        ('16866e30-6682-4768-b384-ce0edb63271d', '8a1b8edd-6ea8-4060-b056-f4a0326ceb68', true),
        ('895a109a-2f85-425a-b439-eb9599cbaf6b', '8a1b8edd-6ea8-4060-b056-f4a0326ceb68', true),
        ('915274d2-a765-4f4e-8819-82c337d700d2', '88e40bc4-c6cf-4216-abca-7ed6243c1a08', true),
        ('895a109a-2f85-425a-b439-eb9599cbaf6b', '88e40bc4-c6cf-4216-abca-7ed6243c1a08', true),
        ('7379aab0-8770-46a7-98b0-f3b9ff1a45ac', 'e47a26d2-92fe-450c-9bdf-47f5a3f8ebf5', true),
        ('5560b217-eeb7-44ba-b31a-da3cc23f719b', 'e47a26d2-92fe-450c-9bdf-47f5a3f8ebf5', true),
        ('2139fb78-7d80-427f-a1d6-87d2b892e5be', 'e47a26d2-92fe-450c-9bdf-47f5a3f8ebf5', true),
        ('7379aab0-8770-46a7-98b0-f3b9ff1a45ac', '6abb5b3e-f80b-4c7e-8670-063fe8b9adc1', true),
        ('915274d2-a765-4f4e-8819-82c337d700d2', 'e2f36c01-51dd-4393-9d19-9efccabfa41b', true),
        ('5560b217-eeb7-44ba-b31a-da3cc23f719b', 'e2f36c01-51dd-4393-9d19-9efccabfa41b', true),
        ('b0c3403a-0b4a-4007-9dc8-c21f86224ede', 'e2f36c01-51dd-4393-9d19-9efccabfa41b', true),
        ('2139fb78-7d80-427f-a1d6-87d2b892e5be', 'e2f36c01-51dd-4393-9d19-9efccabfa41b', true);

-- ✅
INSERT INTO compromisos_diarios
        (ID_actividad, ID_usuario, Fecha_diaria, Aceptacion_compromiso, Compromiso_realizado)
    VALUES
        ('928c9831-3aaf-4c30-a63e-c234e259b3f0', '7379aab0-8770-46a7-98b0-f3b9ff1a45ac', '2021-12-1', true, true),
        ('bb4bd4ae-acd4-4cc0-b727-c4e033ba49c0', '7379aab0-8770-46a7-98b0-f3b9ff1a45ac', '2021-12-1', true, true),
        ('77ef142e-a003-45bf-b363-4b64e9f5d41d', '7379aab0-8770-46a7-98b0-f3b9ff1a45ac', '2021-12-1', true, true),
        ('246e8f82-d0cb-468f-aea0-19a61986edbf', '7379aab0-8770-46a7-98b0-f3b9ff1a45ac', '2021-12-1', true, false),
        ('625dd781-0e15-47b2-a468-a8af63d4dba3', '7379aab0-8770-46a7-98b0-f3b9ff1a45ac', '2021-12-1', true, false),
        ('14704038-bc79-4c3c-85c4-3f62cad25c62', '7379aab0-8770-46a7-98b0-f3b9ff1a45ac', '2021-11-29', true, false),
        ('14704038-bc79-4c3c-85c4-3f62cad25c62', '7379aab0-8770-46a7-98b0-f3b9ff1a45ac', '2021-11-30', true, false),
        ('14704038-bc79-4c3c-85c4-3f62cad25c62', '7379aab0-8770-46a7-98b0-f3b9ff1a45ac', '2021-12-1', true, false),
        ('cb187cf8-da9d-46e2-a992-a903ccba78aa', '7379aab0-8770-46a7-98b0-f3b9ff1a45ac', '2021-12-1', true, true),
        ('6597940f-d560-478a-b961-a56ea91bcdce', '7379aab0-8770-46a7-98b0-f3b9ff1a45ac', '2021-12-1', true, true),
        ('14704038-bc79-4c3c-85c4-3f62cad25c62', '915274d2-a765-4f4e-8819-82c337d700d2', '2021-12-1', true, true),
        ('625dd781-0e15-47b2-a468-a8af63d4dba3', '915274d2-a765-4f4e-8819-82c337d700d2', '2021-12-1', true, true),
        ('97d5e5b2-a2bf-46a5-918f-652bd6c76e89', '915274d2-a765-4f4e-8819-82c337d700d2', '2021-12-1', true, false),
        ('db5ff74b-64a7-4c46-8863-18196bb0a29d', '915274d2-a765-4f4e-8819-82c337d700d2', '2021-12-1', true, false),
        ('58db7886-c8b9-4daa-a80e-aea41e73524b', '915274d2-a765-4f4e-8819-82c337d700d2', '2021-12-1', true, false),
        ('246e8f82-d0cb-468f-aea0-19a61986edbf', '915274d2-a765-4f4e-8819-82c337d700d2', '2021-12-1', true, true),
        ('58db7886-c8b9-4daa-a80e-aea41e73524b', '5560b217-eeb7-44ba-b31a-da3cc23f719b', '2021-12-1', true, true),
        ('c3b0e97b-0c09-4645-a6f0-4383123e5850', '5560b217-eeb7-44ba-b31a-da3cc23f719b', '2021-12-1', true, true),
        ('c6e29508-12fa-44d5-94aa-abd45c0d75b6', '5560b217-eeb7-44ba-b31a-da3cc23f719b', '2021-12-1', true, false),
        ('14704038-bc79-4c3c-85c4-3f62cad25c62', '5560b217-eeb7-44ba-b31a-da3cc23f719b', '2021-12-1', true, false),
        ('cb187cf8-da9d-46e2-a992-a903ccba78aa', '5560b217-eeb7-44ba-b31a-da3cc23f719b', '2021-12-1', true, true),
        ('6597940f-d560-478a-b961-a56ea91bcdce', '5560b217-eeb7-44ba-b31a-da3cc23f719b', '2021-12-1', true, true),
        ('4acc7c9f-7679-4c89-9945-766db4127c16', '5560b217-eeb7-44ba-b31a-da3cc23f719b', '2021-12-1', true, true),
        ('c84ae74a-30a5-416c-af83-e798a77a0b4c', '5560b217-eeb7-44ba-b31a-da3cc23f719b', '2021-12-1', true, false),
        ('644f954c-3017-4462-aaa4-bb7388a7bfd8', '5560b217-eeb7-44ba-b31a-da3cc23f719b', '2021-12-1', true, true),
        ('928c9831-3aaf-4c30-a63e-c234e259b3f0', 'b0c3403a-0b4a-4007-9dc8-c21f86224ede', '2021-12-1', true, true),
        ('58db7886-c8b9-4daa-a80e-aea41e73524b', 'b0c3403a-0b4a-4007-9dc8-c21f86224ede', '2021-12-1', true, true),
        ('dfddf8cb-2900-4bb7-ab6a-32fe5f00d3a0', 'b0c3403a-0b4a-4007-9dc8-c21f86224ede', '2021-12-1', true, false),
        ('928c9831-3aaf-4c30-a63e-c234e259b3f0', '2139fb78-7d80-427f-a1d6-87d2b892e5be', '2021-12-1', true, true),
        ('db5ff74b-64a7-4c46-8863-18196bb0a29d', '2139fb78-7d80-427f-a1d6-87d2b892e5be', '2021-12-1', true, true),
        ('8044b234-9031-4177-aab3-479de1868502', '2139fb78-7d80-427f-a1d6-87d2b892e5be', '2021-12-1', true, true),
        ('c3b0e97b-0c09-4645-a6f0-4383123e5850', '2139fb78-7d80-427f-a1d6-87d2b892e5be', '2021-12-1', true, true),
        ('246e8f82-d0cb-468f-aea0-19a61986edbf', '2139fb78-7d80-427f-a1d6-87d2b892e5be', '2021-11-28', true, true),
        ('246e8f82-d0cb-468f-aea0-19a61986edbf', '2139fb78-7d80-427f-a1d6-87d2b892e5be', '2021-11-29', true, true),
        ('246e8f82-d0cb-468f-aea0-19a61986edbf', '2139fb78-7d80-427f-a1d6-87d2b892e5be', '2021-11-30', true, true),
        ('246e8f82-d0cb-468f-aea0-19a61986edbf', '2139fb78-7d80-427f-a1d6-87d2b892e5be', '2021-12-1', true, true),
        ('625dd781-0e15-47b2-a468-a8af63d4dba3', '2139fb78-7d80-427f-a1d6-87d2b892e5be', '2021-12-1', true, true),
        ('c6e29508-12fa-44d5-94aa-abd45c0d75b6', '2139fb78-7d80-427f-a1d6-87d2b892e5be', '2021-12-1', true, true),
        ('5403c08e-dbd6-4df2-a4bf-8c32a09f1ffb', '2139fb78-7d80-427f-a1d6-87d2b892e5be', '2021-12-1', true, false),
        ('14704038-bc79-4c3c-85c4-3f62cad25c62', '2139fb78-7d80-427f-a1d6-87d2b892e5be', '2021-12-1', true, true),
        ('cb187cf8-da9d-46e2-a992-a903ccba78aa', '2139fb78-7d80-427f-a1d6-87d2b892e5be', '2021-12-1', true, false),
        ('77ef142e-a003-45bf-b363-4b64e9f5d41d', '2139fb78-7d80-427f-a1d6-87d2b892e5be', '2021-12-1', true, false),
        ('dfddf8cb-2900-4bb7-ab6a-32fe5f00d3a0', '2139fb78-7d80-427f-a1d6-87d2b892e5be', '2021-12-1', true, true),
        ('928c9831-3aaf-4c30-a63e-c234e259b3f0', '16866e30-6682-4768-b384-ce0edb63271d', '2021-12-1', true, true),
        ('77ef142e-a003-45bf-b363-4b64e9f5d41d', '895a109a-2f85-425a-b439-eb9599cbaf6b', '2021-12-1', true, true),
        ('625dd781-0e15-47b2-a468-a8af63d4dba3', '895a109a-2f85-425a-b439-eb9599cbaf6b', '2021-12-1', true, true),
        ('c6e29508-12fa-44d5-94aa-abd45c0d75b6', '895a109a-2f85-425a-b439-eb9599cbaf6b', '2021-12-1', true, false),
        ('14704038-bc79-4c3c-85c4-3f62cad25c62', '895a109a-2f85-425a-b439-eb9599cbaf6b', '2021-12-1', true, true),
        ('cb187cf8-da9d-46e2-a992-a903ccba78aa', '895a109a-2f85-425a-b439-eb9599cbaf6b', '2021-12-1', true, true),
        ('d9e62aac-0471-4d4c-85bc-5df539454d02', '895a109a-2f85-425a-b439-eb9599cbaf6b', '2021-12-1', true, false),
        ('644f954c-3017-4462-aaa4-bb7388a7bfd8', '895a109a-2f85-425a-b439-eb9599cbaf6b', '2021-12-1', true, true),
        ('6597940f-d560-478a-b961-a56ea91bcdce', '895a109a-2f85-425a-b439-eb9599cbaf6b', '2021-12-1', true, true),
        ('60f85a68-d471-4c45-9d6d-833827935b92', '895a109a-2f85-425a-b439-eb9599cbaf6b', '2021-12-1', true, false),
        ('77d2a74c-bf48-4fec-8b6c-ae777c6870cd', '895a109a-2f85-425a-b439-eb9599cbaf6b', '2021-12-1', true, true),
        ('770cc748-157a-43ea-a6a0-b0a6792b0bde', '895a109a-2f85-425a-b439-eb9599cbaf6b', '2021-12-1', true, true),
        ('457aaa2f-7bcd-4939-9703-6fdfb2cb08fa', '895a109a-2f85-425a-b439-eb9599cbaf6b', '2021-12-1', true, false),
        ('1cfcb133-c66b-453a-8a68-9907b6a1f1c4', '895a109a-2f85-425a-b439-eb9599cbaf6b', '2021-12-1', true, false),
        ('ed9e7d84-ac97-4b89-94ab-1a8f4d4f9a28', '895a109a-2f85-425a-b439-eb9599cbaf6b', '2021-12-1', true, false);

-- ✅
INSERT INTO CAT_SERVICIOS
        (nombre_servicio, descripcion_servicio, implicaciones_medioambientales_del_servicio)
    VALUES
        ('Sin servicio', 'Se ha realizado una actividad que no requiere de contratación.', 0);

-- ✅
INSERT INTO ORGANIZACIONES
        (nombre, cnae, direccion_postal, cod_postal, telefono)
    VALUES
        ('Sin organización.', '--', '--', '240', 000000000);

-- ✅ generar ID-ORG
INSERT INTO Servicios
        (id_servicio, id_organizacion, hcarbono_asignada, descripcion_detallada)
    VALUES
        ('9f64de4a-8021-415a-ac7e-20668703ee52', 'ae4ec672-18e1-4aa3-9a3f-f2e06dfb2422', 0, 'Este hash es necesario para cuando no existe un servicio asignado.');