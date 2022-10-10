function parseJson(json){
    try{
        return JSON.parse(json);
    } catch(e){
        throw new Error(`Parse Error: Invalid JSON string`);
    }
    
}

console.log(parseJson('{ "key": "value" }'));