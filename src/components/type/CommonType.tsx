export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface MovieApiData {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
export interface MovieApiResponse {
  data: MovieApiData;
  status: number;
  statusText: string;
  headers: {
    "access-control-allow-origin": string;
    "access-control-expose-headers": string;
    "alt-svc": string;
    "cache-control": string;
    "content-encoding": string;
    "content-type": string;
    date: string;
    server: string;
    vary: string;
    via: string;
    "x-amz-cf-id": string;
    "x-amz-cf-pop": string;
    "x-cache": string;
  };
  config: {
    transitional: {
      silentJSONParsing: boolean;
      forcedJSONParsing: boolean;
      clarifyTimeoutError: boolean;
    };
    adapter: string[];
    transformRequest: null[];
    transformResponse: null[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: {};
    headers: {
      Accept: string;
    };
    method: string;
    url: string;
  };
  request: {};
}

export interface Genre {
  id: number;
  name: string;
}

export interface GenresData {
  genres: Genre[];
}

export interface ApiResponse {
  data: GenresData;
  status: number;
  statusText: string;
  headers: {
    [key: string]: string;
  };
  config: {
    transitional: {
      silentJSONParsing: boolean;
      forcedJSONParsing: boolean;
      clarifyTimeoutError: boolean;
    };
    adapter: string[];
    transformRequest: null[];
    transformResponse: null[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: {
      [key: string]: any;
    };
    headers: {
      Accept: string;
    };
    method: string;
    url: string;
  };
  request: {
    [key: string]: any;
  };
}
