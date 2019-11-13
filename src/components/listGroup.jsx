import React, { Component } from 'react';

const ListGroup = (props) => {
    return (
        <ul className="list-group">
            <li className="list-group-item active">All Genres</li>
            {props.items.map(item => <li onClick={() => props.onItemSelect(item)} className="list-group-item" key={item._id}>{item.name}</li>)}
        </ul>
    );
}

export default ListGroup;