import jwt from "jsonwebtoken";

function jwtTokens(user) {
  const payload = {
    user: { id: user.manguoidung, role: user.vaitro },
  };

  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30m",
  });

  const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
}

export { jwtTokens };
