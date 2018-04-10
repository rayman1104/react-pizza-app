/**
 *
 * MenuWrapper
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import { Classes, Tooltip, Tree } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';

import { makeSelectMenu } from 'containers/App/selectors';
import { collapseNode, expandNode } from 'containers/App/actions';
import Column from './Column';
import Section from './Section';

class MenuWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log('MenuWrapper constructed');
  }

  convertTree = (_nodeId = '0') => {
    const nodeId = `${_nodeId}`;
    const nodes = this.props.nodes;
    const node = nodes.get(nodeId);

    if (nodeId === '0') {
      return node.get('children').toJS().map(this.convertTree);
    }
    if (node.get('isLeaf')) {
      const description = `Филлеры: ${node.get('fillers')}. Цена: ${node.get('price')}`;
      return {
        id: nodeId,
        icon: 'tag',
        label: <Tooltip content={description}>{node.get('name')}</Tooltip>,
        isSelected: nodeId === this.props.match.params.id,
      };
    }
    return {
      id: nodeId,
      icon: 'folder-close',
      label: node.get('name'),
      isExpanded: node.get('isExpanded'),
      childNodes: node.get('children').toJS().map(this.convertTree),
      isSelected: nodeId === this.props.match.params.id,
    };
  };

  handleNodeClick = (nodeData) => {
    this.props.onSelect(nodeData.id);
  };

  handleNodeCollapse = (nodeData) => {
    this.props.onCollapse(nodeData.id);
  };

  handleNodeExpand = (nodeData) => {
    this.props.onExpand(nodeData.id);
  };

  render() {
    const nodes = this.props.nodes;
    const nodeId = this.props.match.params.id ? this.props.match.params.id : '0';

    if (nodeId && !nodes.has(nodeId)) {
      return <Redirect to="/" />;
    }
    const currNode = this.props.nodes.get(nodeId);
    return (
      <Section>
        <Column flex="1">
          <Tree
            contents={this.convertTree()}
            onNodeClick={this.handleNodeClick}
            onNodeCollapse={this.handleNodeCollapse}
            onNodeExpand={this.handleNodeExpand}
            className={Classes.ELEVATION_0}
          />
        </Column>
        <Column flex="2">
          { nodeId !== '0' && <div>{currNode.get('name')}</div> }
          {
            currNode.get('isLeaf')
              ? <div>
                <div>Филлеры: {currNode.get('fillers')}</div>
                <div>Цена: {currNode.get('price')}</div>
              </div>
              : <div>
                <div>Добавить категорию</div>
                <div>Добавить блюдо</div>
              </div>
          }
        </Column>
      </Section>
    );
  }
}

MenuWrapper.propTypes = {
  nodes: PropTypes.any,
  onSelect: PropTypes.func,
  onExpand: PropTypes.func,
  onCollapse: PropTypes.func,
  match: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  nodes: makeSelectMenu(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSelect: (id) => {
      dispatch(push(`/menu/${id}`));
    },
    onCollapse: (id) => {
      dispatch(collapseNode(`${id}`));
    },
    onExpand: (id) => {
      dispatch(expandNode(`${id}`));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuWrapper));
