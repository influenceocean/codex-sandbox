// Utility Library
// Reusable helper functions for web apps

export function getExpiryMessage(isoDate) {
    const now = new Date();
    const target = new Date(isoDate);
    now.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    const msPerDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round((target - now) / msPerDay);
    if (diffDays > 0) return `Expires in ${diffDays} day${diffDays === 1 ? '' : 's'}`;
    if (diffDays < 0) return `Expired ${Math.abs(diffDays)} day${Math.abs(diffDays) === 1 ? '' : 's'} ago`;
    return "Expires today";
  }
  export function formatUSPhoneNumber(phone) {
    // Remove all non-digit characters
    const digits = String(phone).replace(/\D/g, '');
    if (digits.length !== 10) return phone;
    const area = digits.slice(0, 3);
    const prefix = digits.slice(3, 6);
    const line = digits.slice(6);
    return `(${area}) ${prefix}-${line}`;
  }
  