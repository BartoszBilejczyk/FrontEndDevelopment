import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article'
import { ArticleService } from '../article.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
   @Input() article: Article; // To use the article input in app-article-input, we have to tell ArticleItemComp class that it will be there, that it has to expect an input called article of type Article (Article is also an Object, FYI). Also it means that ArticleItemComp has access to Article
  
  constructor() {}
  

  
  voteOneUp() {
    this.article.upvote()
  };

   voteOneDown() {
    this.article.downvote()
  }

  ngOnInit() {
  }

}
