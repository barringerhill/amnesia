/* Transaction Controller */
import {g} from '../lib/req';

export function read(page, cb) {
  g(`http://localhost:1439/read?page=${page}`)
    .then(res => cb(res))
}

export function search(text, cb) {
  g(`http://localhost:1439/search?text=${text}`)
    .then(res => cb(res))
}
