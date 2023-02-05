function normalizeClasses(){
    const elements = document.body.getElementsByTagName('*');
    Array.from(elements).forEach(element => {
           element.classList.forEach(className => {
            const newClassName = _.camelCase(className);
            element.classList.replace(className, newClassName);
          });
    })
}


