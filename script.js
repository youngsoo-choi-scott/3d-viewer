const colors = ['#f6f6f6', '#e3e1e1', '#cfd8dc', '#fcefe6', '#fffde7'];
let index = 0;

window.changeBackground = () => {
  index = (index + 1) % colors.length;
  document.documentElement.style.setProperty('--bg-color', colors[index]);
};
