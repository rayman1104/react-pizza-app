import React from 'react';
import PropTypes from 'prop-types';
import { EditableText } from '@blueprintjs/core';

import Column from './Column';
import Section from './Section';
import Div from './Div';

class NodeContent extends React.PureComponent {
  static getDerivedStateFromProps(nextProps) {
    return {
      name: nextProps.currNode.get('name'),
      fillers: nextProps.currNode.get('fillers'),
      price: nextProps.currNode.get('price'),
      categoryName: '',
      itemName: '',
      itemFillers: '',
      itemPrice: '',
    };
  }

  constructor(props) {
    super(props);
    console.log('NodeContent constructed');
    this.state = {
      nodeId: props.nodeId,
      name: props.currNode.get('name'),
      fillers: props.currNode.get('fillers'),
      price: props.currNode.get('price'),
      categoryName: '',
      itemName: '',
      itemFillers: '',
      itemPrice: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmitCategory = this.handleSubmitCategory.bind(this);
    this.handleSubmitItem = this.handleSubmitItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(attr) {
    return (value) => {
      this.setState({ [attr]: value });
    };
  }

  handleCancel(attr) {
    return () => {
      this.setState({ [attr]: this.props.currNode.get(attr) });
    };
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmitCategory(event) {
    event.preventDefault();
    console.log(this.state.categoryName);
    this.props.onAddCategory(this.props.nodeId, this.state.categoryName);
  }

  handleSubmitItem(event) {
    event.preventDefault();
    this.props.onAddItem(this.props.nodeId, this.state.itemName, this.state.itemFillers, this.state.itemPrice);
  }

  render() {
    const currNode = this.props.currNode;
    const nodeId = this.props.nodeId;
    const maxLength = '20';

    return (
      <div>
        {nodeId !== '0' && (
          <h1>
            <EditableText
              value={this.state.name}
              maxLength={maxLength}
              onConfirm={(value) => this.props.onEditName(nodeId, value)}
              onChange={this.handleChange('name')}
              onCancel={this.handleCancel('name')}
            />
          </h1>
        )}
        {
          currNode.get('isLeaf')
            ? <section>
              <Div>
                <h4>Fillers</h4>
                <EditableText
                  value={this.state.fillers}
                  maxLength={maxLength}
                  onConfirm={(value) => this.props.onEditFillers(nodeId, value)}
                  onChange={this.handleChange('fillers')}
                  onCancel={this.handleCancel('fillers')}
                />
              </Div>
              <Div>
                <h4>Price</h4>
                <EditableText
                  value={this.state.price}
                  maxLength={maxLength}
                  onConfirm={(value) => this.props.onEditPrice(nodeId, value)}
                  onChange={this.handleChange('price')}
                  onCancel={this.handleCancel('price')}
                />
              </Div>
            </section>
            : <Section>
              <Column flex="1">
                <form onSubmit={this.handleSubmitCategory}>
                  <Div>
                    <input
                      name="categoryName"
                      className="pt-input"
                      onChange={this.handleInputChange}
                      value={this.state.categoryName}
                      placeholder="Dishtype name"
                      required
                    />
                  </Div>
                  <button type="submit" className="pt-button pt-icon-add pt-intent-primary">
                    Add dishtype
                  </button>
                </form>
              </Column>
              <Column flex="1">
                <form onSubmit={this.handleSubmitItem}>
                  <Div>
                    <input
                      name="itemName"
                      className="pt-input"
                      onChange={this.handleInputChange}
                      value={this.state.itemName}
                      placeholder="Dish name"
                      required
                    />
                  </Div>
                  <Div>
                    <input
                      name="itemFillers"
                      className="pt-input"
                      onChange={this.handleInputChange}
                      value={this.state.itemFillers}
                      placeholder="Fillers"
                      required
                    />
                  </Div>
                  <Div>
                    <input
                      name="itemPrice"
                      type="number"
                      className="pt-input"
                      onChange={this.handleInputChange}
                      value={this.state.itemPrice}
                      placeholder="Price"
                      required
                    />
                  </Div>
                  <button type="submit" className="pt-button pt-icon-add pt-intent-primary">
                    Add dish
                  </button>
                </form>
              </Column>
            </Section>
        }
      </div>
    );
  }
}

NodeContent.propTypes = {
  currNode: PropTypes.any,
  nodeId: PropTypes.string,
  onEditName: PropTypes.func,
  onEditFillers: PropTypes.func,
  onEditPrice: PropTypes.func,
  onAddItem: PropTypes.func,
  onAddCategory: PropTypes.func,
};

export default NodeContent;
