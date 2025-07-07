// Write a function that takes a date (in ISO format) and returns
// a message like "Expires in 7 days" or "Expired 3 days ago"
function getExpiryMessage(isoDate) {
  const now = new Date();
  const target = new Date(isoDate);

  // Zero out the time for both dates to compare only days
  now.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);

  const msPerDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round((target - now) / msPerDay);

  if (diffDays > 0) {
    return `Expires in ${diffDays} day${diffDays === 1 ? '' : 's'}`;
  } else if (diffDays < 0) {
    return `Expired ${Math.abs(diffDays)} day${Math.abs(diffDays) === 1 ? '' : 's'} ago`;
  } else {
    return "Expires today";
  }
}

