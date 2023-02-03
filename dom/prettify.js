function prettify(){
    const divs = document.getElementsByTagName("div");
    Array.from(divs).forEach(div => {
        div.childNodes.forEach(node => {
            if(node instanceof Text){     
                const el = document.createElement('p');
                el.innerHTML = node.textContent;
                node.replaceWith(el);
            }
        });
    });

    console.log(divs);

}