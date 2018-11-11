import '../styles/model_search.css';
import '../styles/model_post.css';
import { Element } from '../lib';
import { search_input_controller } from '../controllers/home.js';

const e = new Element();

/* model */
// InputGroup
export function Model_Search_Button(method, page) {
  let search_w = e.i('div', {'class': `search_wrap`});
  let search_form = e.i('div', {'class': `search_form`}).t(search_w);
  let search_input = e.i('input', {
    'id': 'search_input',
    'class': 'search_input',    
    'placeholder': ''
  },{
    'keydown': e => {
      e.keyCode == 13 && method();
    },'input': e => search_input_controller(e)
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

// PostModel
export function Model_Post(n, d, h) {
  let model_wrapper = e.i('div', {'class': 'model-post-wrapper'});
  let model_post_content = e.i('div', {'class': 'model-post-content'})
    .t(model_wrapper);

  Element.b([
    ['div', {'class': 'model-post-title'}, {}, n],
    ['div', {'class': 'model-post-body'}, {}, d],
    ['div', {'class': 'model-post-foot'}, {}, h],
  ]).map(e => e.t(model_post_content));

  return model_wrapper;
}
