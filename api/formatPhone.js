export default function handler(req, res) {
    const { phone } = req.query;
    const digits = phone?.replace(/\D/g, '');
    if (!digits || digits.length !== 10) {
      return res.status(400).json({ error: 'Invalid phone number' });
    }
  
    const formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    return res.status(200).json({ formatted });
  }
  