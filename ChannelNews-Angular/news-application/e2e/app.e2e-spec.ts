import { NewsApplicationPage } from './app.po';

describe('news-application App', function() {
  let page: NewsApplicationPage;

  beforeEach(() => {
    page = new NewsApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
