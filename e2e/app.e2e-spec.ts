import { PhotoCompPage } from './app.po';

describe('photo-comp App', function() {
  let page: PhotoCompPage;

  beforeEach(() => {
    page = new PhotoCompPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
