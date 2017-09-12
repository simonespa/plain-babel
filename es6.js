import 'babel-polyfill';

const evens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odds = evens.map(v => v + 1);
let nums = evens.map((v, i) => v + i);

const url = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=comedy';

const promise = new Promise((resolve, reject) => {
  	setTimeout(resolve('success'), 2000);
});

promise.then(result => console.log(result)).catch(reason => console.log(reason));