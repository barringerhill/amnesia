/* Home Controller */
import {DOM} from '../lib'

const d = new DOM();

export function search_input_controller(e) {
  let search_button_class = d.id('search_button').className;
  let eth_green = 'search_button search_button_eth_green';
  if (e.target.value != '' && (search_button_class == eth_green)) {
    return;    
  } else if(e.target.value == '') {
    d.id('search_button').className = 'search_button search_button_eth_grey';    
  } else {
    d.id('search_button').className = eth_green;
  }
}
