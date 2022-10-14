class Url{
    constructor(httpAdress){
        this.httpAdress = httpAdress;
        this.URLmethods = new URL(httpAdress);
        this.searchParams = new URLSearchParams(httpAdress.split('?')[1]);

    }

    getScheme(){
       return (this.URLmethods.protocol.slice(0, -1));
    }

    getHostName(){
        return this.URLmethods.hostname;
    }

    getQueryParams(){
        return Array.from(this.searchParams.entries());
        
    }

    getQueryParam(paramName, secondParamName = null){
        
        const result = this.searchParams.getAll(paramName);
        if(result.length < 1 && secondParamName !== null){
                return this.searchParams.getAll(secondParamName);
        }

        if(result.length < 1 && secondParamName === null){
            return null;
        }

        return result;     
    }

    equals(httpAdress){
        return this.httpAdress === httpAdress ? true : false;
    }

}


const url = new Url('http://google.com:80?key=value&key2=value2');
console.log(url.getScheme());
console.log(url.getHostName());
console.log(url.getQueryParams());
console.log(url.getQueryParam('key'));
console.log(url.getQueryParam('key22'));
console.log(url.getQueryParam('key22', 'key2'));
console.log(url.equals('http://google.com:80?key=value&key2=value2'));
console.log(url.equals('http://yandex.ru:80?key=value'));
