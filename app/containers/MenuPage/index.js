/**
 *
 * MenuPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectLoading, makeSelectError, makeSelectMenu } from 'containers/App/selectors';
import Menu from 'components/Menu';
import { loadMenu } from '../App/actions';
import makeSelectMenuPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class MenuPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onMount();
  }
  render() {
    const { loading, error, menu, onSelect } = this.props;
    const menuTreeProps = {
      loading,
      error,
      menu,
      onSelect,
    };
    return (
      <div>
        <Helmet>
          <title>MenuPage</title>
          <meta name="description" content="Description of MenuPage" />
        </Helmet>
        <div>
          <Menu {...menuTreeProps} />
        </div>
      </div>
    );
  }
}

MenuPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  menu: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onSelect: PropTypes.func,
  onMount: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  menupage: makeSelectMenuPage(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  menu: makeSelectMenu(),
});

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(loadMenu());
    },
    onSelect: (id) => {
      dispatch(push(`/menu/${id}`));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'menuPage', reducer });
const withSaga = injectSaga({ key: 'menuPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MenuPage);
