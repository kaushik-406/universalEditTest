export default function decorate(block) {
  const props = Array.from(block.children, (row) => row.firstElementChild);
  const [image, text] = props;

  const liblock = document.createElement('li');
  liblock.innerHTML = image.innerHTML;
  liblock.innerHTML += text.innerHTML;

  const ulblock = document.createElement('ul');
  ulblock.appendChild(liblock);
  console.log(ulblock);

  block.innerHTML = '';
  block.appendChild(ulblock);
}