const getCompany = (extraProps,  name) => {
  if (name === undefined) return console.log('error, name not defined');

  const date = new Date();
  const company = {
    name,
    state: 'moderating',
    createdAt: date,
  };
  
  if (extraProps !== undefined) {
    const newCompany = { ...company, ...extraProps };
    return newCompany;
  }

  return company;
};

console.log(getCompany({ website: 'hexlet.io', state: 'published' }, 'Hexlet'));
