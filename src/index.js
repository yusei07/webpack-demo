// webpack tutorial
import _ from 'lodash';
import './style.css';
import Icon from './belle.jpeg';
import Notes from './notes.csv';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}


document.body.appendChild(component());
