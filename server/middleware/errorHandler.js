export default (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    status: statusCode,
    message: err.message || "Something went wrong",
  });
};
