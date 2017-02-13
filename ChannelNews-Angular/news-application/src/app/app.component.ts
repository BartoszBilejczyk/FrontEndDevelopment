import { Component } from '@angular/core';

import { Article } from './article'

// Decorate the SidebarComp so that it's a real components / Component must be decorated before exported, of course

@Component({
  selector: 'app-root',  // This is a parent-child tree, because app-sidebar is inside app-root. app-sidebar and app-article-item are children of app-root
  templateUrl: 'app.component.html'
  //also possible to use the provider here
  // providers: [ArticleService] - this would be useful if AppComponent had some children, which would then have access to this.

})  // the article iteration creates a new local variable and it will pass what is inside "article" after let to "article" after [article]
export class AppComponent {}
