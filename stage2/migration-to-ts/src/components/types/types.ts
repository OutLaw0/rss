export type Options = {
  [source: string]: string;
}

export type Resp = {
  endpoint: string;
  options?: Options;
}

export type Callback = <T>(data: T) => void;

export type DataCommon = {
  status: string;
  sources?: Array<SourcesItem>;
  totalResult?: number;
  articles?: Array<NewsItem>;
}

export type SourcesItem = {
  category?: string;
  country?: string;
  description?: string;
  id: string;
  language?: string;
  name: string;
  url?: string;
};

export type NewsItem = {
  author: string;
  content?: string;
  description: string;
  publishedAt: string;
  source: {
    id?: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
};

export interface INewsItem {
  draw(data: NewsItem[]): void;
}

export enum ErrorCode {
  OK = 200, // The request was executed successfully.
  Bad = 400, // The request was unacceptable, often due to a missing or misconfigured parameter.
  Unauthorized = 401, // Your API key was missing from the request, or wasn't correct.
  Not_Found = 404,
  Too_Many_Requests = 429, // You made too many requests within a window of time and have been rate limited. Back off for a while.
  Server_Error = 500, // Something went wrong on our side.
}
