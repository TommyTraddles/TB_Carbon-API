
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

INSERT INTO ACTIVIDADES_REDUCCION 
   (Titulo_act, Ambito, Descripcion, Cantidad_reducible, Promocionado, Num_dias_para_logro) 
  VALUES
    ('Poner el lavavajillas cuando está lleno', 'Hogar', '', '10', false, '1'),
    ('Usar bolsas reutilizables', 'Hogar', '', '10', false, '1'),
    ('Apagar las luces cuando no sean necesarias', 'Hogar', '', '10', false, '1'),
    ('Desconectar el cargador del móvil mientras no lo usas', 'Hogar', '', '10', false, '1'),
    ('Cerrar el grifo al enjabonarse en la ducha', 'Hogar', '', '10', false, '1'),
    ('Tapar ollas, cazuelas y sartenes al cocinar', 'Hogar', '', '10', false, '1'),
    ('Utilizar programas eco en electrodomésticos', 'Hogar', '', '33,1', false, '1'),
    ('Utilizar electrodomésticos a plena carga', 'Hogar', '', '22', false, '1'),
    ('Ventilar adecuadamente la casa', 'Hogar', '', '10', false, '1'),
    ('Emplear el microondas en lugar del horno', 'Hogar', '', '10', false, '1'),
    ('Emplear un programa de lavado de ropa con agua fría', 'Hogar', '', '11,5', false, '1'),
    ('Evitar dejar aparatos en standby', 'Hogar', '', '11,5', false, '1'),
    ('Programar termostato según presencia en casa', 'Hogar', '', '24,6', false, '1'),
    ('Aprovechar el calor residual al cocinar', 'Hogar', '', '10', false, '1'),
    ('Fabricar tu propio jabón', 'Hogar', '', '23', false, '1'),
    ('Obtener un compostador', 'Hogar', '', '22', false, '1'),
    ('Limpiar con productos naturales', 'Hogar', '', '14', false, '1'),
    ('Reutilizar agua de ducha o fregadero', 'Hogar', '', '9', false, '1'),
    ('Cargar dispositivos con cargador solar', 'Hogar', '', '56', false, '1'),
    ('Comprar en Espacio Orgánico', 'Hogar', '', '10', true, '1'),
    ('Comprar en Frasco Granel', 'Hogar', '', '10', true, '1'),
    ('Comprar en Unpacked Madrid', 'Hogar', '', '33,1', true, '1'),
    ('Conducir con suavidad vigilando el consumo', 'Transporte', '', '449,4', false, '7'),
    ('Evitar conducir al trabajo en horas punta', 'Transporte', '', '337', false, '7'),
    ('Compartir coche para ir al trabajo', 'Transporte', '', '373', false, '1'),
    ('Sustituir el coche por la bici', 'Transporte', '', '299,5', false, '3'),
    ('Sustituir el coche por el transporte público alguna vez', 'Transporte', '', '224,7', false, '3'),
    ('Sustituir el coche por ir caminando alguna vez', 'Transporte', '', '748,3', false, '4'),
    ('Evitar el uso del coche en desplazamientos por ocio', 'Transporte', '', '597,7', false, '7'),
    ('Viajes cortos sin avión', 'Transporte', '', '224,7', false, '3'),
    ('Usar monopatín o patines', 'Transporte', '', '748,3', false, '3'),
    ('Usar patinetes', 'Transporte', '', '597,7', false, '3'),
    ('Usar un patinete eléctrico', 'Transporte', '', '748,3', false, '5'),
    ('Coche híbrido', 'Transporte', '', '224,7', false, '4'),
    ('Coche eléctrico', 'Transporte', '', '748,3', false, '4'),
    ('Car sharing Zity', 'Transporte', '', '597,7', true, '3'),
    ('Moto sharing Cabify', 'Transporte', '', '449,4', true, '3'),
    ('Aerolínea sostenible KLM', 'Transporte', '', '97,3', true, '2'),
    ('Reciclar materia orgánica', 'Alimentación', '', '449,4', false, '7'),
    ('Minimizar el desperdicio de comida en casa', 'Alimentación', '', '97,3', false, '7'),
    ('Consumir productos locales y de temporada', 'Alimentación', '', '74,9', false, '4'),
    ('Comer menos carne roja', 'Alimentación', '', '161,9', false, '5'),
    ('Minimizar el desperdicio de comida cuando comes fuera', 'Alimentación', '', '44,7', false, '2'),
    ('Reducir el consumo de productos lácteos', 'Alimentación', '', '33,7', false, '2'),
    ('Dejar de comer carne roja', 'Alimentación', '', '204,2', false, '2'),
    ('Adoptar una dieta pescatariana', 'Alimentación', '', '232,4', false, '2'),
    ('Adopta una dieta vegana', 'Alimentación', '', '291,1', false, '2'),
    ('Adopta una dieta vegetariana', 'Alimentación', '', '241', false, '2'),
    ('Comer de tupper en el trabajo', 'Alimentación', '', '232,4', false, '2'),
    ('Compras a granel con envases retornables', 'Alimentación', '', '291,1', false, '2'),
    ('Comprar alimentos en envases de cristal', 'Alimentación', '', '241', false, '2'),
    ('Preparar té a granel y no en bolsitas', 'Alimentación', '', '232,4', false, '2'),
    ('Sustituir los refrescos por agua', 'Alimentación', '', '291,1', false, '2'),
    ('Hacer la compra en Naturtable', 'Alimentación', '', '241', true, '2'),
    ('Hacer la compra en Ecomarkt', 'Alimentación', '', '232,4', true, '2'),
    ('Hacer la compra en La tienda de la abuela', 'Alimentación', '', '291,1', true, '2'),
    ('Imprimir a dos caras', 'Otros', '', '12', false, '1'),
    ('Usar papel reciclado', 'Otros', '', '4', false, '1'),
    ('Utilizar taza reusable', 'Otros', '', '20', false, '1'),
    ('Rechazar productos de merchandising', 'Otros', '', '33', false, '1'),
    ('Restaurar muebels abandonados', 'Otros', '', '11,5', false, '1'),
    ('Recoger residuos en un entorno natural', 'Otros', '', '24,6', false, '1'),
    ('Reciclar la ropa que ya no usas', 'Otros', '', '10', false, '1'),
    ('Utilizar el buscador Ecosia', 'Otros', '', '23', true, '1'),
    ('Compras físicas en lugar de online', 'Otros', '', '22', false, '1'),
    ('Comprar productos de Minimalsm', 'Otros', '', '14', true, '1'),
    ('Divulgar un estilo de vida sostenible', 'Otros', '', '34', false, '1'),
    ('Utilizar pilas recargables', 'Otros', '', '89', false, '1'),
    ('Elegir productos elaborados localmente', 'Otros', '', '33', false, '1'),
    ('Un día de desconexión digital', 'Otros', '', '24', false, '1'),
    ('Ir por las escaleras, evitar coger el ascensor', 'Otros', '', '31,1', false, '5'),
    ('Compra ecológica', 'Otros', '', '33', false, '1'),
    ('Ir al mercado de abastos', 'Otros', '', '645', false, '1'),
    ('Comprar ropa de segundamano', 'Otros', '', '78', false, '1'),
    ('Comprar productos de higiene orgánicos', 'Otros', '', '32', false, '1'),
    ('Comprar ropa slow fashion', 'Otros', '', '44', false, '1'),
    ('Plantar un árbol', 'Otros', '', '99', false, '1'),
    ('Comprar productos Ecoalf', 'Otros', '', '61', true, '1');

INSERT INTO alimentacion 
    (Tipo, HC_base) 
  VALUES
    ('Carne en la mayoría de las comidas', '75'),
    ('Carne en alguna de las comidas', '69'),
    ('Carne en muy raras ocasiones', '43'),
    ('Solo pescado', '34'),
    ('Dieta vegetariana', '29'),
    ('Dieta vegana', '15');

INSERT INTO alojamiento 
    (Tipo, HC_base) 
  VALUES
    ('Hotel 5 estrellas o superior', '48'),
    ('Hoteles de 2 a 4 estrellas', '37'),
    ('Hotel de 1 estrella o hostel', '52'),
    ('Apartamento turístico', '50'),
    ('Casa rural', '26'),
    ('Camping car', '86');

INSERT INTO calefaccion 
    (Tipo, HC_base) 
  VALUES
    ('Gas natural', '78'),
    ('Gasóleo de calefacción', '230'),
    ('Carbón vegetal', '123'),
    ('Madera', '278'),
    ('Turba', '230'),
    ('Electricidad', '147'),
    ('Sin calefacción', '5');

INSERT INTO combustible 
    (Tipo, HC_base) 
  VALUES
    ('Gasolina', '357'),
    ('Diesel', '289'),
    ('Híbrido', '121'),
    ('Eléctrico', '98');

INSERT INTO deportes 
    (Tipo, HC_base)
  VALUES
    ('Libre', '39'),
    ('Outdoor en instalaciones', '67'),
    ('indoor', '63'),
    ('gimnasio', '89');

INSERT INTO INICIATIVAS 
    (Nombre, Descripcion_corta, Descripcion_larga, Cod_postal, Correo_electronico, HC_red_base) 
  VALUES
    ('Reforestar en España', 'Ong Reforesta', 'ONG creada en 1991 para la conservación de la naturaleza, declarada de Utilidad Pública. Jornadas de voluntariado con particulares y empresas. Trabajamos por los bosques.', '59887', 'info@reforesta.es', '25'),
    ('Lucha contra el cambio climático', 'Ong WWF', 'Ong WWF', '32566', 'info@wwf.es', '25'),
    ('Energía renovable 100%', 'Ong Energética', 'Ong Energética', '29934', 'info@energetica.coop', '25'),
    ('Limpiar los océanos de plástico', 'Ong Ocean cleanup', 'Ong Ocean cleanup', '38822', 'info@oceancleanup.com', '25');

INSERT INTO LOGROS 
    (Icono, Logro, Vertical) 
  VALUES
    ('', 'Has conseguido el logro del registro inicial', 'General'),
    ('', 'Has conseguido el logro del cálculo de tu huella de carbono', 'General'),
    ('', 'Has completado un hábito de la categoría transporte', 'Transporte'),
    ('', 'Has comenzado a reducir tu huella de carbono', 'General'),
    ('', 'Has completado los hábitos de la categoría Hogar de esta semana', 'Hogar'),
    ('', 'Has completado un hábito de la categoría alimentación', 'Alimentación'),
    ('', 'Has conseguido completar 5 hábitos', 'General'),
    ('', 'Has conseguido completar 10 hábitos', 'General'),
    ('', 'Has conseguido completar 20 hábitos', 'General'),
    ('', 'Has conseguido completar 50 hábitos', 'General'),
    ('', 'Has conseguido completar 100 hábitos', 'General'),
    ('', 'Tu nivel de huella de carbono es bueno', 'General');

INSERT INTO transportes 
    (Tipo, HC_base) 
  VALUES
    ('Tren', '233'),
    ('Metro', '122'),
    ('Autobús', '44'),
    ('Tranvía', '187'),
    ('Barco', '329'),
    ('Avión', '573'),
    ('Coche', '76'),
    ('Moto', '37');

INSERT INTO vehiculos 
    (Tipo, HC_base) 
  VALUES
    ('Motocicleta', '198'),
    ('Turismo', '293'),
    ('Monovolumen', '322'),
    ('Suv', '298'),
    ('Furgoneta', '321');

INSERT INTO tipo_vivienda 
    (Tipo, HC_base) 
  VALUES
    ('Piso', '60'),
    ('Vivienda unifamiliar pareada', '90'),
    ('Vivienda unifamiliar aislada', '132'),
    ('Vivienda unifamiliar adosada', '109');
