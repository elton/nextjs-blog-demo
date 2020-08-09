// API Routes let you create an API endpoint inside a Next.js app.
// They can be deployed as Serverless Functions (also known as Lambdas).

export default (req, res) => {
  res.status(200).json({ text: "Hello" });
};
