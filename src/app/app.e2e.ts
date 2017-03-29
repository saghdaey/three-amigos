import { browser, by, element } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'ByteCubed Angular2 Base Project';
    expect(subject).toMatch(result);
  });

  it('should have nav', () => {
    let subject = element(by.css('nav')).isPresent();
    expect(subject).toBeTruthy();
  });

  it('should have <home>', () => {
    let subject = element(by.css('app home')).isPresent();
    expect(subject).toBeTruthy();
  });
});
