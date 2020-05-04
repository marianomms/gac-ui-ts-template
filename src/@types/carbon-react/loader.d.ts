/**
* Loader component.
*/
declare module 'carbon-react/lib/components/loader' {
  import { SizesType } from 'carbon-react/lib/utils/helpers/options-helper';

  export interface ILoaderProps {
    /** Size of the loader. */
    size?: SizesType;
    /** Applies white color. */
    isInsideButton?: boolean;
    /** Applies slate color. Available only when isInsideButton is true. */
    isActive?: boolean;
  }

  /**
  * Loader component.
  */
  const Loader: React.FunctionComponent<ILoaderProps>;
  export default Loader;
}