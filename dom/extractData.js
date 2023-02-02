function extractData(rootElement) {
    const title = rootElement.querySelector("h1").textContent;
    const description = rootElement.querySelector(".description").textContent;
    const items = Array.from(rootElement.querySelectorAll(".links > div")).map(div => {
      const itemTitle = div.querySelector("h2 > a").textContent;
      const itemDescription = div.querySelector("p").textContent;
      return {
        title: itemTitle,
        description: itemDescription
      };
    });
    const obj = {
      title,
      description,
      items
    };
    alert(obj);
    console.log(obj);
  }