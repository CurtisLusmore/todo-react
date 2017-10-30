import React, { Component } from 'react';
import ItemList from './ItemList';

class StatefulItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItem: '',
            nextId: 0,
            items: {}
        };
    }

    complete(id) {
        const { items } = this.state;
        items[id].isDone = !items[id].isDone;
        this.setState({ items });
    }

    remove(id) {
        const { items } = this.state;
        delete items[id];
        this.setState({ items });
    }

    add(event) {
        const { currentItem, nextId, items } = this.state;
        items[nextId] = { id: nextId, title: currentItem, isDone: false };
        this.setState({
            currentItem: '',
            nextId: nextId+1,
            items
        });
        event.preventDefault();
    }

    onChange(event) {
        this.setState({ currentItem: event.target.value });
        event.preventDefault();
    }

    render() {
        const { currentItem, items } = this.state;
        return (
            <div>
                <form onSubmit={this.add.bind(this)} >
                    <input
                        placeholder="Pick up Bart"
                        value={currentItem}
                        onChange={this.onChange.bind(this)} />
                </form>
                <ItemList
                    items={Object.values(items)}
                    complete={this.complete.bind(this)}
                    remove={this.remove.bind(this)} />
            </div>
        );
    }
}

export default StatefulItemList;
