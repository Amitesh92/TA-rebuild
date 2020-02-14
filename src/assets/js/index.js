import '../css/style.scss';
import '../css/page.scss';
import '../js/hello.js';
import $ from 'jquery';
import _ from 'lodash';

function component() {

    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   $("body").css('color', 'red');
  
    return element;
  }
  
  document.body.appendChild(component());