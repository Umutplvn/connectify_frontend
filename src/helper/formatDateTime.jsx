
const formatDateTime = (dateTimeString) => {
  const messageDate = new Date(dateTimeString);
  const now = new Date();
  
  // Bugün
  if (isToday(messageDate)) {
    return 'Today';
  }
  
  // Dün
  if (isYesterday(messageDate)) {
    return 'Yesterday';
  }
  
  // Diğer tarihler
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return messageDate.toLocaleDateString('en-US', options);
};

const isToday = (someDate) => {
  const today = new Date();
  return someDate.getDate() === today.getDate() &&
         someDate.getMonth() === today.getMonth() &&
         someDate.getFullYear() === today.getFullYear();
};

const isYesterday = (someDate) => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return someDate.getDate() === yesterday.getDate() &&
         someDate.getMonth() === yesterday.getMonth() &&
         someDate.getFullYear() === yesterday.getFullYear();
};

export default formatDateTime