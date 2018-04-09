import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import TreeWrapper from './TreeWrapper';

function MenuTree({ loading, error, menu, onSelect }) {
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
    console.log('===', menu);
    return (
      <TreeWrapper
        nodes={menu}
        onSelect={onSelect}
      />
    );
  }

  return null;
}

MenuTree.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  menu: PropTypes.any,
  onSelect: PropTypes.func,
};

export default MenuTree;
