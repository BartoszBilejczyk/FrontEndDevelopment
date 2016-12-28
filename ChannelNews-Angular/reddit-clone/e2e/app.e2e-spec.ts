import { RedditClonePage } from './app.po';

describe('reddit-clone App', function() {
  let page: RedditClonePage;

  beforeEach(() => {
    page = new RedditClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
