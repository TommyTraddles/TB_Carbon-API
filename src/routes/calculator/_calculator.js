module.exports = (db) => async (req, res, next) => {

  console.info(req.body)

  if(!req.body){
    return next({
      success: false,
      message: 'error at calculator query'
    })
  }

  res.status(200).json({
    success: true,
    message: 'all working',
  })
};
