import NewsApi from './API/newsAPI';
import { newsAdapter, createMarkupForCard } from './card-item';

const refs = {
  cardList: document.querySelector('.cards__list'),
};

const newsApi = new NewsApi();
let articlesArray;

newsApi.fetchPopularNews().then(data => {
  console.log(data);
  articlesArray = data.results;
    list = articlesArray
  .map(item => createMarkupForCard(newsAdapter(item))).join('');
  refs.cardList.innerHTML = list;
  return data.results
});

export { articlesArray }