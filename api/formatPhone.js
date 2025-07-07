import { formatUSPhoneNumber } from '../utils.js';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // 👈 Enable cross-origin requests

  const phone = req.query.phone || '';
  const formatted = formatUSPhoneNumber(phone);
  res.status(200).json({ formatted });
}