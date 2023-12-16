export const generateRandomId = () => {
  const currentDate = new Date();
  const datePart = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}`;
  const timePart = `${currentDate
    .getHours()
    .toString()
    .padStart(2, '0')}${currentDate
    .getMinutes()
    .toString()
    .padStart(2, '0')}${currentDate.getSeconds().toString().padStart(2, '0')}`;
  const randomPart = Math.floor(Math.random() * 9000) + 1000; // Random 4-digit number

  const randomId = `${datePart}${timePart}${randomPart}`;
  return randomId;
};
