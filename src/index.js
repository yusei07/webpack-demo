// entry point (main file where webpack starts bundling process, follow its dependencies and create final bundle (bundle.js))

// webpack tutorial
import _ from 'lodash';
import './style.css';
import Icon from './belle.jpeg';
import Notes from './notes.csv';

// additional (odin project)
import myName from './myName.js';
import { functionOne, functionTwo } from './myModule.js';


function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');


  // add image to existing div
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  console.log(Notes)

  // use imported function
  // element.textContent = myName('Yusei');
  return element;
}


document.body.appendChild(component());
