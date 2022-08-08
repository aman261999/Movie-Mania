import React from 'react';

const Like = (props) => {
    
    let classes = "fa-heart fa";
    if (!props.liked) classes += "-regular";
    return (
        <i onClick={props.onClick} className={classes} style={{ cursor: "pointer" }}></i>
    );
};

 
export default Like;