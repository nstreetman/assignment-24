
import React from 'react';
// source: http://jsfiddle.net/CptLemming/mjL2xuz8/

export const FilterList = React.createClass({
  remove: function(item) {
    return function(e) {
      e.preventDefault();
      return this.props.onRemove(item);
    }.bind(this);
  },

  render: function() {
    var items = this.props.items.map(function(item, i) {
      return (
        <li key={i}>
          <span>{item.type}</span>
          <a href data-id={item.id} className="remove-filter" onClick={this.remove(item)}>remove</a>
        </li>
      );
    }.bind(this));

    return <ul>{items}</ul>;
  }
});

var FilterApp = React.createClass({
  getInitialState: function() {
    return {
      items: [{id: 'foo', type: 'Foo'}, {id: 'bar', type: 'Bar'}]
    };
  },

  remove: function(item){
    var items = this.state.items.filter(function(itm){
      return item.id !== itm.id;
    });

    this.setState({
      items: items
    });
  },

  render: function() {
    return (
      <div>
        <FilterList items={this.state.items} onRemove={this.remove}/>
      </div>
    );
  }
});

React.renderComponent(<FilterApp />, document.body);
