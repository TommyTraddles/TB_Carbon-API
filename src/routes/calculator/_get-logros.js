module.exports = (db) => async (req, res, next) => {

  const { user } = res.locals

  const result = [
    { id: 3, logro: 'what algo', icon: 'tres', completed: true, },
    { id: 1, logro: 'ver pelis', icon: 'uno', completed: false, },
    { id: 2, logro: 'ver algo', icon: 'dos', completed: false, },
  ]

  // 
  res.status(200).json({
    success: true,
    data: result,
  });
}