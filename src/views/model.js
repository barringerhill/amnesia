/* model */

// InputGroup
function SearchButton(method, page) {
  let search_w = e.i('div', {'class': `search_wrap_${page}`});
  let search_form = e.i('div', {'class': `search_form$_${page}`}).t(search_w);
  let search_input = e.i('input', {
    'class': 'search_input',
    'placeholder': ''
  },{
    'input': e => search_input_controller(e)
  }).t(search_form);

  let search_button = e.i('input', {
    'id': 'search_button',
    'class': 'search_button search_button_eth_grey',
    'readonly': 'readonly'
  }, {
    'click': () => method()
  }).t(search_form);

  return search_w;
}
