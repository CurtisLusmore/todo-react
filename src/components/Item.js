import React from 'react';
import './Item.css';

function Item({ title, isDone, complete, remove }) {
    return (
        <tr className="Item">
            <td><label onClick={complete}><input type="checkbox" checked={isDone} readOnly={true} /> {title}</label></td>
            <td><button onClick={remove}>x</button></td>
        </tr>
    )
};

export default Item;
