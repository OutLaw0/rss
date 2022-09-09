import './sources.css';

import { SourcesItem } from '../../types/types';

class Sources {
  public draw(data: SourcesItem[]): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');
    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true);

      (<Element>(<Element>sourceClone).querySelector('.source__item-name')).textContent = item.name;
      (<Element>(<Element>sourceClone).querySelector('.source__item')).setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });
    (<Element>document.querySelector('.sources')).innerHTML = '';
    (<Element>document.querySelector('.sources')).append(fragment);
  }
}

export default Sources;
