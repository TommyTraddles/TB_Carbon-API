module.exports = (db) => async (req, res, next) => {

  const { email } = res.locals

  const { id: me, context: compared_user } = req.body

  const result = [
    { date: 'Enero', me: 350, compared_user: 300, },
    { date: 'Febrero', me: 300, compared_user: 139, },
    { date: 'Marzo', me: 200, compared_user: 450, },
    { date: 'Abril', me: 278, compared_user: 390, },
    { date: 'Mayo', me: 189, compared_user: 480, },
  ]

  res.status(200).json({
    success: true,
    data: result,
  });
}