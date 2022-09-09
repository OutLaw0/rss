import News from './news/news';
import Sources from './sources/sources';
import Alphabet from './alphabet/alphabet';
import { DataCommon, SourcesItem } from '../types/types';

export class AppView {
  private news: News;

  private sources: Sources;

  private alphabet: Alphabet;

  private sourcesData: SourcesItem[];

  constructor() {
    this.news = new News();
    this.sources = new Sources();
    this.alphabet = new Alphabet();
    this.sourcesData = [];
  }

  public drawNews(data?: Partial<DataCommon>): void {
    const values = data?.articles || [];

    this.news.draw(values);
  }

  private drawAlphabet(): void {
    const alphabetBase: Set<string> = new Set();
    this.sourcesData.forEach((item) => alphabetBase.add(item.name[0]));
    this.alphabet.createNavList(alphabetBase);

    (document.querySelector('.letterContainer') as HTMLElement).addEventListener('click', (e) =>
      this.alphabet.navHandler(e, (letter) => this.drawLetterSources(letter))
    );
  }

  public drawSources(data?: Pick<DataCommon, 'status' | 'sources'>): void {
    const values = data?.sources || [];
    this.sourcesData = values;
    this.drawAlphabet();
    this.drawLetterSources('A');
  }

  private drawLetterSources(letter: string): void {
    const chain = this.sourcesData.filter((item) => item.name[0] === letter);
    this.sources.draw(chain);
  }
}

export default AppView;
