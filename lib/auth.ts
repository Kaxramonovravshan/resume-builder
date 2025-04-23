// lib/auth.ts
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "mysecret";

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    return null;
  }
}
