import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
     super('https://newsapi.org/v2/', // для деплоя юзаем https://nodenews.herokuapp.com/
        {
            apiKey: '6d74f24f1ee743ceb6b716d7ddc9184b', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
