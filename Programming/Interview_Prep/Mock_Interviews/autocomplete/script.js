import { searchData } from './utils.js';

class App {
  constructor() {
    this.data = null;
  }

  initialize() {
    const $results = document.getElementById('results');
    const $searchBoxEl = document.getElementById('search-input');
    $searchBoxEl.addEventListener('input', async event => {
      const data = await searchData(event.target.value);
      $results.innerHTML = '';
      const $fragment = document.createDocumentFragment();
      data.forEach(({ title }) => {
        const $li = document.createElement('li');
        $li.textContent = title;
        $fragment.append($li);
      });
      $results.append($fragment);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('app is running');
  const myApp = new App();
  myApp.initialize();
});
