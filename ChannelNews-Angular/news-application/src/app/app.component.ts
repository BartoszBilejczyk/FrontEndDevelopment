import { Component, Input } from '@angular/core';



// Decorate the SidebarComp so that it's a real components / Component must be decorated before exported, of course

@Component({
  selector: 'app-sidebar',
  template: `
    <div id="sidebar">
      This is sidebar
    </div>
  `,

})

export class SidebarComp {}

@Component({
  selector: 'app-article-item',
  template: `
    <h2>{{ article.title }}</h2>
    <p>{{ article.description }}</p>
  `
})

export class ArticleItemComp {
  @Input() article: Object // To use the article input in app-article-input, we have to tell ArticleItemComp class that it will be there, that it has to expect an input called article
}

@Component({
  selector: 'app-root',  // This is a parent-child tree, because app-sidebar is inside app-root. app-sidebar and app-article-item are children of app-root
  template: `
    <div class="container">
      <app-sidebar></app-sidebar>
      <div id="main">
        <app-article-item *ngFor="let article of articles" [article]="article"></app-article-item>
      </div>
    </div>
  `
})  // the article iteration creates a new local variable and it will pass what is inside "article" after let to "article" after [article]
export class AppComponent {
  articles: Object[];  // define instance variable for article which will be an object. In Typescript it is name: type. Then it can be defined as an input in app-article-item ONLY AFTER we import Input from angular-core

  // The constructor is always run as a first thing in the class so the article must be defined in the constructor
  constructor() {
    this.articles = [
      {
      title: 'America has a new president Donald Trump',
      description: 'The republican candidate won the elections'
      },
      {
      title: 'America has a new president Donald Trum',
      description: 'The republican candidate won the elections'
      },
      {
      title: 'America has a new president Donald Tru',
      description: 'The republican candidate won the elections'
      },
      {
      title: 'America has a new president Donald Tr',
      description: 'The republican candidate won the elections'
      },

    ]
  }
}

