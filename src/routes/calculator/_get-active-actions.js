module.exports = (db) => async (req, res, next) => {
  const { email } = res.locals;

  const result = [
    { id: 1,
      vertical: 'transporte',
      data:[
        { id: 1, day: '1', accion: 'Weut', completed: false, description: 'hey you', consejo: 'buenas obras'},
        { id: 2, day: '1', accion: 'ADADsad', completed: false, description: 'wish you were here', consejo: 'depeche mode'}, ]
    },
    { id: 2,
      vertical: 'alimentacion',
      data:[
        { id: 1, day: '1', accion: 'Salir', completed: false, description: 'hey you', consejo: 'buenas obras'},
        { id: 2, day: '1', accion: 'Vender', completed: false, description: 'wish you were here', consejo: 'depeche mode'}, ]
    },
    { id: 3,
      vertical: 'otro',
      data:[
        { id: 1, day: '1', accion: 'Salir', completed: false, description: 'hey you', consejo: 'buenas obras'},
        { id: 2, day: '1', accion: 'Vender', completed: false, description: 'wish you were here', consejo: 'depeche mode'}, 
        { id: 3, day: '1', accion: 'Comer', completed: false, description: 'wish you were here', consejo: 'depeche mode'}, ]
    },
    { id: 4,
      vertical: 'algo',
      data:[
        { id: 1, day: '1', accion: 'Fuacj', completed: false, description: 'hey you', consejo: 'buenas obras'},
        { id: 2, day: '1', accion: 'Vender', completed: false, description: 'wish you were here', consejo: 'depeche mode'}, ]
    },
  ]

  res.status(200).json({
    success: true,
    data: result,
  });
};