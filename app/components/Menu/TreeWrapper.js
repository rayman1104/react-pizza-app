import React from 'react';
import PropTypes from 'prop-types';
import { Classes, Tooltip, Tree } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import { fill, flatMap } from 'lodash';

import Column from './Column';
import Section from './Section';

class TreeWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log('TreeWrapper constructed');
  }

  convertTree = (_nodeId = '0') => {
    const nodeId = typeof _nodeId === 'number' ? _nodeId.toString() : _nodeId;
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
      };
    }
    return {
      id: nodeId,
      icon: 'folder-close',
      label: node.get('name'),
      isExpanded: node.get('isExpanded'),
      childNodes: node.get('children').toJS().map(this.convertTree),
    };
  };

  handleNodeClick = (nodeData) => {
    this.props.onSelect(nodeData.id);
  };

  handleNodeCollapse = (_nodeData, nodePath) => {
    const path = fill(flatMap(nodePath, (n) => [n, 'childNodes']), 'isExpanded', -1);
    const newState = this.state.nodes.setIn(path, false);
    this.setState({ nodes: newState });
  };

  handleNodeExpand = (_nodeData, nodePath) => {
    const path = fill(flatMap(nodePath, (n) => [n, 'childNodes']), 'isExpanded', -1);
    const newState = this.state.nodes.setIn(path, true);
    this.setState({ nodes: newState });
  };

  render() {
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

        </Column>
      </Section>
    );
  }
}

TreeWrapper.propTypes = {
  nodes: PropTypes.any,
  onSelect: PropTypes.func,
};

export default TreeWrapper;
