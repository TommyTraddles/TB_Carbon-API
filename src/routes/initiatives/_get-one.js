module.exports = (db) => async (req, res, next) => {
  const { email } = res.locals;

  const { id } = req.params

  const result = {
    id: 1,
    name: "Reforestar en España",
    organization: "ONG reforesta",
    contact: "email@email.com",
    description: "Lorem ipsum dolor sit amet",
    url: "",
  };

  res.status(200).json({
    success: true,
    data: result,
  });
};
