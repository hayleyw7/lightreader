const applyLightReaderStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    body, *,
    html body, 
    html body > *, 
    html body > div > *, 
    html body > div > p > * {
      background-color: white !important;
      color: black !important;
      font-family: Tahoma, sans-serif !important;
    }
  `;
  document.head.appendChild(style);
};

applyLightReaderStyles();
