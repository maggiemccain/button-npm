import { ButtonNpmPage } from './app.po';

describe('button-npm App', () => {
  let page: ButtonNpmPage;

  beforeEach(() => {
    page = new ButtonNpmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
