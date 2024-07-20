import { numOfLinks as numberOfLinks, allLinks } from "./content.js";

const ul = document.querySelector("ul");
for (let i = 0; i < numberOfLinks; i++) {
  ul.innerHTML += `<li><button><a href=\`${allLinks[i]}\`>Link ${i}</a></button</li>`;
}