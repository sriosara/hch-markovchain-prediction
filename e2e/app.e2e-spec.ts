import { MarkovChainTesisPage } from './app.po';

describe('markov-chain-tesis App', () => {
  let page: MarkovChainTesisPage;

  beforeEach(() => {
    page = new MarkovChainTesisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
