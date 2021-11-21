module.exports = (db) => async (req, res, next) => {

  const { user } = res.locals
  console.info(res.locals)

  // 
  res.status(200).json({
    success: true,
    data: "Hello",
  });
}