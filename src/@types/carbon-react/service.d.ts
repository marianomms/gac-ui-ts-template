declare module 'carbon-react/lib/utils/service' {
  import * as Axios from 'axios';

  export interface IRequestOptions extends Axios.AxiosRequestConfig {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: (response: any) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (response: any) => void;
  }

  export default class Service {
    constructor(options?: object);

    setURL(url: string): this;

    get(params: string, options: IRequestOptions): this;
  }
}