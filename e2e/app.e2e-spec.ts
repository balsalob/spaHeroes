import { SpaheroesPage } from './app.po';

describe('spaheroes App', () => {
  let page: SpaheroesPage;

  beforeEach(() => {
    page = new SpaheroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
