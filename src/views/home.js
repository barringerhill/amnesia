import {DOM, Element} from '../lib';
import '../styles/home.css';
import {search_input_controller} from '../controllers/home.js';
import {Model_Search_Button} from './model';

// const
const e = new Element();
const d = new DOM();

// DOM
// structure
let page_home = e.i('section', {'class': 'page_home'}).t(d.id('amnesia'));
let wing_home = e.i('div', {'class': 'wing_home'}).t(page_home);
let core_home = e.i('div', {'class': 'core_home'}).t(wing_home);
let cw_c = e.i('div', {'class': 'cw_c'}).t(core_home);

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
Model_Search_Button((e) => {
  window.location.hash = `#txs?text=${d.id('search_input').value}`;
},'home').t(cw_c);

// text
let search_bottom = e.i('text', {'class': 'search_buttom'}).p('Explore the Ethereum');
cw_c.a(search_bottom);
