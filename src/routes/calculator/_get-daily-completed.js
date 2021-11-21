module.exports = (db) => async (req, res, next) => {

  const { user } = res.locals

  const result = true

  // 
  res.status(200).json({
    success: true,
    data: result,
  });
}