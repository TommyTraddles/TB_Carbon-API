const Stripe = require("stripe");

module.exports = (db) => async (req, res, next) => {
  // all data
  const { user } = res.locals;
  // ❌ retrieve email by user.locals
  const email = "ill.better.be.off@gmail.com";
  const { id, amount, payment } = req.body;

  // ❌ retrieve intiative by ID

  // stripe
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const pay = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "EUR",
      description: id,
      payment_method: payment,
      receipt_email: email,
      confirm: true,
    });

    // ❌ SAVE ON DB

    return res.status(200).json({
      success: true,
      data: "successfull payment",
    });
  } catch (err) {
    return next({
      success: false,
      error: err,
    });
  }
};
