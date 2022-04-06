const isPhoneNumber = (number: string) => {
  const re = /^\+?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2,9}$/im;
  return re.test(number);
};
export default isPhoneNumber;
