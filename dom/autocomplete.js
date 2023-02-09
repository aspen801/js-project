function inputListener() {
    const input = document.querySelector('.autocomplete');
    const ul = document.createElement('ul');
    
    document.body.append(ul);
    input.addEventListener('input', (e) => {
      const div = document.createElement('div');
        fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {
        json.forEach(element => {
            if(element.name.common.startsWith(e.target.value) && e.target.value !== '') {
                const country = document.createElement('li');
                country.textContent = element.name.common;
                div.append(country);
            }
            
        });
        ul.innerHTML = div.innerHTML;
      })
    })
}