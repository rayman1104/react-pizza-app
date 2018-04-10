import React from 'react';
import PropTypes from 'prop-types';
import { EditableText } from '@blueprintjs/core';

class NodeContent extends React.PureComponent {
  static getDerivedStateFromProps(nextProps) {
    return { name: nextProps.currNode.get('name') };
  }

  constructor(props) {
    super(props);
    console.log('NodeContent constructed');
    this.state = {
      nodeId: props.nodeId,
      name: props.currNode.get('name'),
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(value) {
    this.setState({ name: value });
  }

  handleCancel() {
    this.setState({ name: this.props.currNode.get('name') });
  }

  render() {
    const currNode = this.props.currNode;
    const nodeId = this.props.nodeId;
    return (
      <div>
        {nodeId !== '0' && (
          <h1>
            <EditableText
              value={this.state.name}
              maxLength="50"
              onConfirm={(value) => this.props.onEditName(nodeId, value)}
              onChange={this.handleChange}
              onCancel={this.handleCancel}
            />
          </h1>
        )}
        {
          currNode.get('isLeaf')
            ? <div>
              <div>Филлеры: { currNode.get('fillers') }</div>
              <div>Цена: { currNode.get('price') }</div>
            </div>
            : <div>
              <div>Добавить категорию</div>
              <div>Добавить блюдо</div>
            </div>
        }
      </div>
    );
  }
}

NodeContent.propTypes = {
  currNode: PropTypes.any,
  nodeId: PropTypes.string,
  onEditName: PropTypes.func,
};

export default NodeContent;
