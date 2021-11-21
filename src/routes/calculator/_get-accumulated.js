module.exports = (db) => async (req, res, next) => {

  const { user } = res.locals

  const result = [
    {
      date: 'Enero',
      electricidad: 40,
      transporte: 24,
      alimentación: 24,
      consumo: 24,
    },
    {
      date: 'Febrero',
      electricidad: 30,
      transporte: 13,
      alimentación: 22,
      consumo: 22,
    },
    {
      date: 'Marzo',
      electricidad: 20,
      transporte: 98,
      alimentación: 22,
      consumo: 22,
    },
    {
      date: 'Abril',
      electricidad: 27,
      transporte: 39,
      alimentación: 20,
      consumo: 20,
    },
    {
      date: 'Mayo',
      electricidad: 18,
      transporte: 48,
      alimentación: 21,
      consumo: 21,
    },
    {
      date: 'Junio',
      electricidad: 23,
      transporte: 38,
      alimentación: 25,
      consumo: 25,
    },
    {
      date: 'Julio',
      electricidad: 34,
      transporte: 43,
      alimentación: 21,
      consumo: 21,
    },
  ]

  // 
  res.status(200).json({
    success: true,
    data: result,
  });
}