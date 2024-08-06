export default function decorate(block) {
    const [liWrapper] = block.children;
    console.log(block);
  
    const liblock = document.createElement('li');
    liblock.textContent = liWrapper.textContent.trim();
    liWrapper.replaceChildren(liblock);
  }
  