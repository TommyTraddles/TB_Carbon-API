
module.exports = db => async (req, res, next) => { 

  const { email, password } = req.body

  console.info(email)
  console.info(password)

  res.status(200)
    .json({
      succes: true,
      data: 'Auth',
    })

}