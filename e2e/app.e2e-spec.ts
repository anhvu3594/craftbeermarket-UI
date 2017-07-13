import { CraftbeermarketUIPage } from './app.po';

describe('craftbeermarket-ui App', () => {
  let page: CraftbeermarketUIPage;

  beforeEach(() => {
    page = new CraftbeermarketUIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
