import { InterventionsPage } from './app.po';

describe('interventions App', function() {
  let page: InterventionsPage;

  beforeEach(() => {
    page = new InterventionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Inter works!');
  });
});
