export default (req, res) => {
  const { foo } = req.query;

  res.send({
    hello: foo || 'world',
  });
};
