import React from 'react';

const Liked = (props) => {
    return <i
        style={{ cursor: 'pointer' }}
        onClick={() => props.onLike(props.movie)}
        className={props.liked ? 'fa fa-heart' : 'fa fa-heart-o'}></i>;
}

export default Liked;