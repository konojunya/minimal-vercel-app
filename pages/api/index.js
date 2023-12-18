export default (_, res) => {
  res.status(200).json({ text: process.env.SAMPLE_ENV });
};
