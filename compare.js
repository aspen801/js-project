const compareObjects = (obj1, obj2) => {
    return(obj1.name === obj2.name || obj1.state === obj2.state || obj1.website === obj2.website);
}

export default compareObjects;