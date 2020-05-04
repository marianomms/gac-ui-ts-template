/**
 * Returns the help component.
 */
declare module 'carbon-react/lib/components/heading' {
  import * as React from 'react';

  export interface IHeadingProps {
    /**
   * Children elements
   */
    children?: React.ReactNode;

    /**
     * Custom className
     */
    className?: string;

    /**
     * Defines the title for the heading.
     */
    title?: string | object;

    /**
     * Defines the title id for the heading.
     */
    titleId?: string;

    /**
     * Defines the subheader for the heading.
     */
    subheader?: string | object;

    /**
     * Defines the subtitle id for the heading.
     */
    subtitleId?: string;

    /**
     * Defines the help text for the heading.
     */
    help?: string;

    /**
     * Defines the help link for the heading.
     */
    helpLink?: string;

    /**
     * Defines the a href for the back link.
     */
    backLink?: () => void | string;

    /**
     * Adds a divider below the heading and the content. Default `true`
     */
    divider?: boolean;

    /**
     * Adds a separator between the title and the subheader. Default 'false'
     */
    separator?: boolean;
  }
  // const Heading: React.FunctionComponent<IHeadingProps>;
  // export default Heading;
  const Heading: React.FunctionComponent<IHeadingProps>;
  export default Heading;
}