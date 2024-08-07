import { generateLiHtmml } from "../listitem/listitem.js";

export default function decorate(block) {
    const liBlock = generateLiHtmml(block);

    const ulblock = document.createElement('ul');
    ulblock.append(liBlock);
    
    block.innerHTML = '';
    block.append = ulblock;
}
  