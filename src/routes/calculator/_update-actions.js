module.exports = (db) => async (req, res, next) => {
  const { email } = res.locals;

  const { vertical, info  } = req.body

  res.status(200).json({
    success: true,
    data: 'updated fields',
  });
};