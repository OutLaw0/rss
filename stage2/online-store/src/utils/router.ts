/* eslint no-void: ["error", { "allowAsStatement": true }] */
type Path = string | RegExp;
type Cb = () => Promise<void>;
type Routes = {
  path: Path;
  cb: Cb;
};
type Options = {
  mode: string | null;
  root: string;
};

class Router {
  routes: Routes[] = [];

  mode: string | null = null;

  root = '/';

  current: string;

  intervalData: NodeJS.Timeout | number | null;

  constructor(options: Options) {
    this.mode = 'hash';
    if (options.mode) this.mode = options.mode;
    if (options.root) this.root = options.root;
    this.current = '/#/';
    this.listen();
    this.intervalData = null;
  }

  add = (path: Path, cb: Cb) => {
    this.routes.push({ path, cb });
    return this;
  };

  remove = (path: Path) => {
    for (let i = 0; i < this.routes.length; i += 1) {
      if (this.routes[i].path === path) {
        this.routes.slice(i, 1);
        return this;
      }
    }
    return this;
  };

  flush = () => {
    this.routes = [];
    return this;
  };

  clearSlashes = (path: Path) => path.toString().replace(/\/$/, '').replace(/^\//, '');

  getFragment = () => {
    let fragment = '';
    if (this.mode === 'history') {
      fragment = this.clearSlashes(decodeURI(window.location.pathname + window.location.search));
      fragment = fragment.replace(/\?(.*)$/, '');
      fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment;
    } else {
      const match = window.location.href.match(/#(.*)$/);
      fragment = match ? match[1] : '';
    }
    return this.clearSlashes(fragment);
  };

  navigate = (path = '') => {
    if (this.mode === 'history') {
      window.history.pushState(null, '', this.root + this.clearSlashes(path));
    } else {
      window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${path}`;
    }
    return this;
  };

  listen = () => {
    clearInterval(this.intervalData as number);
    this.intervalData = setInterval(this.interval, 50);
  };

  interval = () => {
    if (this.current === this.getFragment()) return;
    this.current = this.getFragment();

    this.routes.some((route) => {
      const match = this.current.match(route.path);
      if (match) {
        match.shift();
        void route.cb();
        return match;
      }
      return false;
    });
  };
}

export default Router;
