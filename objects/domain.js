const getDomainInfo = (address) => {
    const domain = {
        scheme: 'http',
        name: '',
    }
    if(!address.startsWith('http', 4)) {
        var splitedString = address.split(':');
        domain.scheme = splitedString[0];
    }
    address.replace('//', '/');
    splitedString = address.split('/')
    domain.name = splitedString[2];
    
    return domain;
}

export default getDomainInfo;