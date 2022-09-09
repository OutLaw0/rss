import { Resp, Callback, ErrorCode, DataCommon, Options } from '../types/types';

class Loader {
  constructor(private baseLink: Readonly<string>, private options: Readonly<Options>) {
    // with TS u don't have to assign basic properties
  }

  public getResp(
    { endpoint, options = {} }: Resp,
    callback = () => {
      console.error('No callback for GET response');
    }
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  public errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === ErrorCode.Unauthorized || res.status === ErrorCode.Not_Found)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(options: Readonly<Options>, endpoint: string): string {
    const urlOptions = {
      ...this.options,
      ...options,
    };

    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });
    return url.slice(0, -1);
  }

  private load(method: string, endpoint: string, callback: Callback, options: Options = {}): void {
    fetch(this.makeUrl(options, endpoint), {
      method,
    })
      .then(this.errorHandler.bind(this))
      .then((res) => res.json())
      .then((data: DataCommon) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}

export default Loader;
