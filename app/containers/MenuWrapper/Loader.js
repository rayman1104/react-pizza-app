import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import MenuWrapper from './index';

function Loader({ loading, error, menu, onSelect }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (menu !== false) {
    return (
      <MenuWrapper
        nodes={menu}
        onSelect={onSelect}
      />
    );
  }

  return null;
}

Loader.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  menu: PropTypes.any,
  onSelect: PropTypes.func,
};

export default Loader;
