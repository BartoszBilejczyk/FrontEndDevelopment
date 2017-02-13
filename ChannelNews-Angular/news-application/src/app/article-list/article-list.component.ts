import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article'
import { ArticleService } from '../article.service'

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  
  @Input() articles: Article[];

    constructor(
    private articleService: ArticleService
  ) {
    
  }

  ngOnInit() {
    this.articleService
        .fetchArticles()
        .then(articles => this.articles = articles); // something with promise
  }

}
