import _ from 'lodash';

const normalize = (object) => {
  object.name = _.capitalize(object.name);
  var description = object.description;
  object.description = description.toLowerCase();
 };

export default normalize;
