module.exports = ({ statusCode = 500, error }, _, res, __) => {
  res.status(statusCode)
    .json({
      success: false,
      message: error.message,
    })
}