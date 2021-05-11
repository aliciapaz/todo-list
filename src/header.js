 
const header = () => {
  const titleHeader = document.createElement("header");
  titleHeader.className = "h1-container";
  
  const h1Title = document.createElement("h1");
  h1Title.innerHTML = "To do Organizer";
  titleHeader.appendChild(h1Title);

  return titleHeader;

};

export { header as default };