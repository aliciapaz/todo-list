const header = () => {
  const titleHeader = document.createElement('header');
  titleHeader.className = 'h1-container';

  const hTitle = document.createElement('h1');
  hTitle.innerHTML = 'To do Organizer';
  titleHeader.appendChild(hTitle);

  return titleHeader;
};

export { header as default };