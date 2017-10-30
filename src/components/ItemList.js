import React from 'react';
import Item from './Item';
import './ItemList.css';

function ItemList({ items, complete, remove }) {
    const done = items.filter(item => item.isDone);
    const undone = items.filter(item => !item.isDone);
    return (
        <div>
            <table className="ItemList">
                {undone.length > 0
                    ? undone.map(
                        ({ id, title, isDone }) =>
                            <Item
                                key={id}
                                title={title}
                                isDone={isDone}
                                complete={() => complete(id)}
                                remove={() => remove(id)} />)
                    : <div>Add something to do.</div>}
            </table>
            <hr />
            <table className="ItemList">
                {done.length > 0
                    ? done.map(
                        ({ id, title, isDone }) =>
                            <Item
                                key={id}
                                title={title}
                                isDone={isDone}
                                complete={() => complete(id)}
                                remove={() => remove(id)} />)
                    : <div>You haven't done anything...</div>}
            </table>
        </div>
    )
};

export default ItemList;
