import './index.scss';
import Router from './utils/router';
import Catalog from './pages/catalog';

const router = new Router({
  mode: 'hash',
  root: '/',
});

const catalog = new Catalog();

router
  .add(/women/, async () => {
    catalog.setLocalData();
    catalog.setup.page = 'Women';
    await catalog.mount();
  })
  .add(/men/, async () => {
    catalog.setLocalData();
    catalog.setup.page = 'Men';
    await catalog.mount();
  })
  .add('', async () => {
    catalog.setLocalData();
    catalog.setup.page = '';
    await catalog.mount();
  });
