module.exports = (db) => async (req, res, next) => {

  const { user } = res.locals

  // 
  res.status(200).json({
    succes: true,
    data: "Hello",
  });
}