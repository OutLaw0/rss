import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { DataCommon } from '../types/types';

class App {
  controller: AppController;

  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    this.controller.getSources((data?: Pick<DataCommon, 'status' | 'sources'>) => this.view.drawSources(data));

    (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) =>
      this.controller.getNews(e, (data?: Partial<DataCommon>) => this.view.drawNews(data))
    );
  }
}

export default App;
