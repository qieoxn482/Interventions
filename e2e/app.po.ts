import { browser, element, by } from 'protractor';

export class InterventionsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('Inter-root h1')).getText();
  }
}
