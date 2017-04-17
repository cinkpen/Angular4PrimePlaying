import { PrimegeneratorPage } from './app.po';

describe('primegenerator App', () => {
  let page: PrimegeneratorPage;

  beforeEach(() => {
    page = new PrimegeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
