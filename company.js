const getCompany = (name, extraProps) => {
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

const company = getCompany('Hexlet', { website: 'hexlet.io', state: 'published' });
console.log(company);
