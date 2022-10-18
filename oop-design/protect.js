class Course {
    constructor(_name, publicName) {
      this._name = _name;
      this.publicName = publicName;
    }
   
    getName() {
      return this._name;
    }
  }

const handlers = {
  get: (target, property) => {
    if(property[0] === '_' || !(property in target)){
        throw new Error("Can't access protected or unexisting property");
    }
    return target[property];
  },
  set: (target, property, val) => {
    if(property[0] === '_' || !(property in target)){
        throw new Error("Can't access protected or unexisting property");
    }
   
    target[property] = val;
    return true;
  },
};

function protect(obj){
    return new Proxy(obj, handlers);
}


const course = new Course('Protected object-oriented design', 'Public object-oriented design');
const protectedCourse = protect(course);
try {
    console.log(protectedCourse.publicName);
    protectedCourse.publicName = 'new value set'
    console.log(protectedCourse.publicName);
} catch (error) {
    console.error(error);
}



