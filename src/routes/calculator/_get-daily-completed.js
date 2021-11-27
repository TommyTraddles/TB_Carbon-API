module.exports = (db) => async (req, res, next) => {

  const { email } = res.locals

  const result = false

  // 
  res.status(200).json({
    success: true,
    data: result,
  });
}