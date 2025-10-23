const checkRole = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.user.role)) {
    return res
      .status(403)
      .json({ message: "Rất tiếc bạn không có quyền truy cập" });
  }
  next();
};

export default checkRole;
