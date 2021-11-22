module.exports = (db) => async (req, res, next) => {
  
  const { user } = res.locals;

  const { id, amount } = req.body
  console.info('> id: ', id)
  console.info('> amount: ', amount)

  res.status(200).json({
    success: true,
    data: 'thanks for donating',
  });
};