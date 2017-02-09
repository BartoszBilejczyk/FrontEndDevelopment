import { Component, Input } from '@angular/core';

// that's normal Javascript

/* class Article {
  public title: string;
  public description: string;

  constructor (aTitle: string, aDescription: string) {
    this.title = aTitle;
    this.description = aDescription
  }
} */

//that's what TypeScript gives us - it takes care of everything. We're defining class Article to use new Article in components

class Article {
  constructor (
    public title: string,
    public description: string
  ) {}

  // define public method to be able to pass the current Date to article

  public date(): Date {
    return new Date();
  }
}
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
  templateUrl: 'app-article-item.html'
})

export class ArticleItemComp {
  @Input() article: Article // To use the article input in app-article-input, we have to tell ArticleItemComp class that it will be there, that it has to expect an input called article of type Article (Article is also an Object, FYI)
}

@Component({
  selector: 'app-root',  // This is a parent-child tree, because app-sidebar is inside app-root. app-sidebar and app-article-item are children of app-root
  templateUrl: 'app-root.html'

})  // the article iteration creates a new local variable and it will pass what is inside "article" after let to "article" after [article]
export class AppComponent {
  articles: Article[];  // define instance variable for article which will be an Array of Articles. In Typescript it is name: type. Then it can be defined as an input in app-article-item ONLY AFTER we import Input from angular-core

  // The constructor is always run as a first thing in the class so the article must be defined in the constructor
  constructor() {
    this.articles = [
      new Article('America has a new president Donald Trump', 'The republican  won the elections'),
      new Article('America has a new president Donald Trump', 'The republican candidate  the elections'),
      new Article('America has a new president Donald Trump', 'The republican candidate won  elections')
    ]
  }
}

