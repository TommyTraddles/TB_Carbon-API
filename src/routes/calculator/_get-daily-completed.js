module.exports = (db) => async (req, res, next) => {

  const { email } = res.locals

  const result = true

  // 
  res.status(200).json({
    success: true,
    data: result,
  });
}