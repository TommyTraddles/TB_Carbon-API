module.exports = (db) => async (req, res, next) => {
  const { user } = res.locals;

  const { info } = req.body;
  
  res.status(200).json({
    success: true,
    data: 'feedback posted',
  });
};