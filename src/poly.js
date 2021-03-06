// Needed by React 16 https://reactjs.org/docs/javascript-environment-requirements.html
// IE10
import 'core-js/es6/map';
import 'core-js/es6/set';

// Needed by Styled Components
// IE11, IE10
import 'core-js/es6/symbol';

// IE10
import getRandomValues from 'polyfill-crypto.getrandomvalues';

if (!window.crypto && !window.msCrypto) {
  window.crypto = {
    getRandomValues,
  };
}
