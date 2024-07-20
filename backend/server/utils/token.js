import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  const payload = {
    user: {
      id: user.id
    }
  };

  return jwt.sign(
    payload,
    process.env.JWT_SECRET, 
    { expiresIn: '1h' } 
  );
};
