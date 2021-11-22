const stripe = require("stripe")(process.env.STRIPE_KEY);

module.exports = (db) => async (req, res, next) => {

  // all data
  const { user } = res.locals;
  const { id, amount } = req.body;
  
  // stripe
  // const session = await stripe.checkout.sessions.create({
  //   line_items: [
  //     {
  //       price: amount,
  //     },
  //   ],
  //   mode: "payment",
  //   success_url: `${process.env.CLIENT_URL}/success`,
  //   cancel_url: `${process.env.CLIENT_URL}/cancel`,
  // });

  // respomse
  res.status(200).json({
    success: true,
    data: "thanks for donating",
  });
};
