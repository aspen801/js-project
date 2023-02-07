function commentForm(){
    const form = document.querySelector("#form");
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    const mainDiv = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = 'Feedback has been sent'
    mainDiv.append(p);
    document.body.append(mainDiv);
    const formData = new FormData(e.target); 
    console.log(formData);
    for (const data of formData.entries()) {
      const newDiv = document.createElement('div');
      newDiv.textContent = `${data[0][0].toUpperCase() + data[0].substring(1)}: ${data[1]}`;
      mainDiv.append(newDiv);
    }
    document.body.append(mainDiv);
  })
}