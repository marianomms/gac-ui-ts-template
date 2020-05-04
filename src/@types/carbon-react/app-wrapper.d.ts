/**
* Manages the width and containment of your application.
*/
declare module 'carbon-react/lib/components/app-wrapper' {
  import * as React from 'react';

  export interface IAppWrapperProps {
    /** Children elements */
    children: React.ReactNode;
    /** Custom className */
    className?: string;
  }

  const AppWrapper: React.FunctionComponent<IAppWrapperProps>;
  export default AppWrapper;
}