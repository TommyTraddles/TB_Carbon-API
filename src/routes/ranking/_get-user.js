module.exports = (db) => async (req, res, next) => {

  const { email } = res.locals

  const { id } = req.params

  const result = [
    { id: 1, ranking: 1, username: 'borja', zipcode: 28027, footprint: 150, },
    { id: 2, ranking: 2, username: 'juan', zipcode: 28028, footprint: 150, },
    { id: 3, ranking: 3, username: 'reyes', zipcode: 28029, footprint: 150, },
    { id: 4, ranking: 4, username: 'pau', zipcode: 28030, footprint: 150, },
    { id: 5, ranking: 5, username: 'miguel', zipcode: 28031, footprint: 150, },
    { id: 6, ranking: 6, username: 'kike', zipcode: 28027, footprint: 150, },
    { id: 7, ranking: 7, username: 'fran', zipcode: 28027, footprint: 150, },
    { id: 8, ranking: 8, username: 'jorge', zipcode: 28027, footprint: 150, },
    { id: 9, ranking: 9, username: 'john', zipcode: 28027, footprint: 150, },
    { id: 10, ranking: 10, username: 'doe', zipcode: 28027, footprint: 150, },
  ]

  res.status(200).json({
    success: true,
    data: result[id - 1],
  });
}