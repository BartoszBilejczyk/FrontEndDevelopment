import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Article } from './article';
import 'rxjs/add/operator/toPromise';


const baseUrl = 'https://newsapi.org'
const newsApiKey = 'c576aae732d54383a96a90e8df90b81e'

@Injectable()
export class ArticleService {

  constructor(
    private http: Http
  ) { }
  
  /* 
  
  public fetchArticles() : Promise<Article[]> {  // in order to get typescript to know we will provide a promise
    return new Promise(resolve => {  //return a result of promise, not array,, wait for 2 seconds and return the array
      setTimeout(() => {
        resolve([ 
          new Article('America has a new president Donald Trump', 'The republican  won the elections', 10),
          new Article('America has a new president Donald Trump', 'The republican candidate  the elections', 2),
          new Article('America has a new president Donald Trump', 'The republican candidate won  elections')
        ]);
      }, 2000)
    });
  }
}
*/
  
  public fetchArticles() : Promise<Article[]> {  // in order to get typescript to know we will provide a promise
    let params = new URLSearchParams();
    params.set('apiKey', newsApiKey);
    params.set('source', 'bbc-news');
    return this.http
      .get(`${baseUrl}/v1/articles`, {
        search: params
      }) // error with Observable, so let's convert it into promise 
      .toPromise()
      .then(resp => resp.json())
      .then(json => json.articles)
      .then(articles  => {
        console.log('json ->', articles);
        const list = articles
                      .map(article => new Article(
                        article.title,
                        article.description,
                        article.urlToImage
                      ))
        return articles;
      })
      .catch(err => {
        console.log('error', err)
    })
  }
  
}