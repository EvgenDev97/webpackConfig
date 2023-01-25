import "./style.scss";

import auf from "./img/auf.jpg";
import { mult, sum } from "./modules/calc";

const img = new Image();
img.src = auf;
console.log(mult(3, 4));
console.log(sum(3, 4));
