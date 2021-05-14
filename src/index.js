import '@fortawesome/fontawesome-free/js/all';
import '@fortawesome/fontawesome-free/css/all.css';

import header from "./header";
import panel from "./ui-projects"

let mainContainer = document.createElement("div");
mainContainer.className = "main-container";

document.body.appendChild(mainContainer);
mainContainer.appendChild(header());
mainContainer.appendChild(panel());

