var config = require('./config.json');
import styles from './Greeter.css';

module.exports = function() {
  var greet = document.createElement('div');
  greet.className = styles.root;
  greet.textContent = config.greetText;
  return greet;
}