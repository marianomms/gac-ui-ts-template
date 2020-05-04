import React from 'react';
import { connect } from 'react-redux';

import AppWrapper from 'carbon-react/lib/components/app-wrapper';
import Button from 'carbon-react/lib/components/button';
import Heading from 'carbon-react/lib/components/heading';

import { TExampleState } from '../types';
import setExampleText from '../actions';
import Selector from '../selectors';
import './init.scss';

/**
 * Own props for the component sets outside the store.
 *
 * eg:
 * ```<Init myProp1='foo />```
 */
interface IOwnProps {
  myProp1: string;
}


/**
 * Inteface with the props will be set from store to prop
 */
interface IStateToProps {
  /**
  * Indicates the example text to render
  */
  loaded: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapStateToProps = (state: TExampleState): IStateToProps => ({
  // you could use the param: ownProps: any
  loaded: Selector.getExampleText(state)
});

/**
 * From dispatch action to component props
 */
const dispatchProps = {
  setExampleText
};

type Props = IOwnProps & IStateToProps & typeof dispatchProps;

const Init: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <AppWrapper className='add-transactions-page'>
      <Heading
        title="I'm the title"
        subheader='subheader, I am'
        helpLink='foo'
      />
      <>
        <p>
          { props.myProp1 }
        </p>
        <p className='red'>
          { props.loaded }
        </p>
        <p>
          <Button
            onClick={ props.setExampleText }
          >
            Change text
          </Button>
        </p>
      </>
    </AppWrapper>
  );
};

export default connect(
  mapStateToProps,
  dispatchProps
)(Init);