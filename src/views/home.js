import {DOM, Element} from '../lib';
import '../styles/home.css';
import {search_input_controller} from '../controllers/home.js';
let eth_default = require('../assets/icon/eth_default.svg');

// const
const e = new Element();
const d = new DOM();

// DOM
// structure
let page_home = e.i('section', {'class': 'page_home'});
let wing_home = e.i('div', {'class': 'wing_home'});
let core_home = e.i('div', {'class': 'core_home'});
let cw_c = e.i('div', {'class': 'cw_c'});
page_home.t(d.id('amnesia'));
page_home.a(wing_home);
wing_home.a(core_home);
core_home.a(cw_c);

// cw_c
// logo
let logo_w = e.i('div', {'class': 'logo_wrap_home'});
cw_c.a(logo_w);

let logo_home_link = e.i('a', {
  'id': 'logo_home_link',
  'class': 'logo_home',
  'href': '#about'
})
logo_w.a(logo_home_link);

// search
let search_w = e.i('div', {'class': 'search_wrap_home'});
cw_c.a(search_w);

let search_form_home = e.i('div', {'class': 'search_form_home'});
search_w.a(search_form_home);

let search_input = e.i('input', {
  'class': 'search_input',
  'placeholder': ''
},{
  'input': e => search_input_controller(e)
})
search_form_home.a(search_input);

let search_button = e.i('input', {
  'id': 'search_button',
  'class': 'search_button search_button_eth_grey',
  'readonly': 'readonly'
}, {'click': () => console.log('hello')})
search_form_home.a(search_button);

// text
let search_bottom = e.i('text', {'class': 'search_buttom'});
search_bottom.p('The Show Must Go On...');
cw_c.a(search_bottom);
