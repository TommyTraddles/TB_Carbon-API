module.exports = (db) => async (req, res, next) => {
  const { user } = res.locals;

  const { vertical, info  } = req.body
  console.info(vertical)
  console.info(info)

  res.status(200).json({
    success: true,
    data: 'updated fields',
  });
};