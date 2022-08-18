const pickData = (object, properties) => {
  const newObject = {};
  const keys = Object.keys(object);

  for (const prop of properties) {
    for (const key of keys) {
      if (key === prop) newObject[key] = object[key];
    }
  }

  return newObject;
};

const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

console.log(pickData(data, ['user', 'os', 'none', 'cores']));
