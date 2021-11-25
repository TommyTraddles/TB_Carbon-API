module.exports = (db) => async (req, res, next) => {

  const { email } = res.locals

  const color = {
    violet: '#8884d8',
    blue: '#83a6ed',
    aqua: '#8dd1e1',
    green: '#82ca9d',
    lime: '#a4de6c',
    sun: '#d0ed57',
    orange: '#ffc658',
  }
  
  const result = [
    {
      name: 'Apoyo al medio ambiente',
      score: 100,
      fill: '#fff',
    },
    {
      name: 'Electricidad',
      score: 35,
      fill: color.violet,
    },
    {
      name: 'Transporte',
      score: 25,
      fill: color.blue,
    },
    {
      name: 'Alimentación',
      score: 50,
      fill: color.aqua,
    },
    {
      name: 'Consumo',
      score: 75,
      fill: color.green,
    },
  ]
  
  // 
  res.status(200).json({
    success: true,
    data: result,
  });
}