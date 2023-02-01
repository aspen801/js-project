function extractParagraphContents() {
  const paragraphs = document.getElementsByTagName("p");
  console.log(Array.from(paragraphs).map(p => p.textContent.trim().replace('/n','')));
  alert(Array.from(paragraphs).map(p => p.textContent.trim().replace('/n','')));
}


