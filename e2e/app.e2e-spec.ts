import { RetroBoardPage } from './app.po';

describe('retro-board App', function() {
  let page: RetroBoardPage;

  beforeEach(() => {
    page = new RetroBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
