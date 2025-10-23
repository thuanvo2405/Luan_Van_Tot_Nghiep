import pool from "../config/db.js";

export const signUpService = async (username, email, hashedPassword) => {
  const checkUser = await pool.query(
    "SELECT * FROM nguoi_dung WHERE email = $1",
    [email]
  );

  if (checkUser.rows.length > 0) {
    const error = new Error("Email này đã tồn tại");
    error.statusCode = 400;
    throw error;
  }

  const result = await pool.query(
    `INSERT INTO nguoi_dung (tennguoidung, email, matkhau) 
     VALUES ($1, $2, $3) 
     RETURNING *`,
    [username, email, hashedPassword]
  );
  return result.rows[0];
};

export const logInService = async (email) => {
  const result = await pool.query("SELECT * FROM nguoi_dung WHERE email = $1", [
    email,
  ]);
  return result.rows[0];
};
