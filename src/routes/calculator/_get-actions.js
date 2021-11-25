module.exports = (db) => async (req, res, next) => {
  const { email } = res.locals;

  const { vertical } = req.params

  const result = [
    { id: 1, accion: 'Salir', active: false, description: 'hey you', consejo: 'buenas obras'},
    { id: 2, accion: 'Vender', active: true, description: 'wish you were here', consejo: 'depeche mode'},
    { id: 3, accion: 'Comer', active: false, description: 'what? ', consejo: 'pink floyd'},
  ]

  res.status(200).json({
    success: true,
    data: result,
  });
};