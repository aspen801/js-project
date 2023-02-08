function inputListener() {
    const input = document.querySelector('.autocomplete');
    input.addEventListener('input', () => {
        console.log(input.value);
    })
}