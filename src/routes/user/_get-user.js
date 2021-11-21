module.exports = (db) => async (req, res, next) => {
  const { user } = res.locals;

  const { id } = req.params;

  const result = { id: 1,  username: "Concerned Citizen", }

  res.status(200).json({
    success: true,
    data: result,
  });
};