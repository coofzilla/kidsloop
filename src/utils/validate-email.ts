const isEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export default isEmail;
