import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../controllers/LoginController.js';

const authMiddleware = (req, res, next) => {
  //Verifica se tem authorization no header{
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res
      .status(401)
      .json({ mensagem: 'Não autorizado: Token não fornecido' });
  }
  //  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.usuarioId = decoded.id;
    next();
  } catch (err) {
    return res.status(403).json({ mensagem: 'Não autorizado: Token inválido' });
  }
};
export default authMiddleware;