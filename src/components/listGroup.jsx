import React, { Component } from 'react';

const ListGroup = (props) => {
    return (
        <ul className="list-group">
            {props.items.map(item => <li onClick={() => props.onItemSelect(item)}
                className={item === props.selectedItem ? "list-group-item active" : "list-group-item"}
                key={item[props.valueProperty] ? item[props.valueProperty] : 'allGenres00'}>
                {item[props.textProperty]}
            </li>)}
        </ul>
    );
}

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}

export default ListGroup;