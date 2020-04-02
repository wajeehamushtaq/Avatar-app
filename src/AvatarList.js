import React from 'react';
import 'tachyons'

const AvatarList = (props) => {
            return(
            <div className="avatarstyle ma4 bg-light-purple dib pa3 grow shadow-4-m tc">
            <img src='https://joeschmoe.io/api/v1/${props.name}' alt="Avatar"/ >
            <h1 className=""> {props.name}</h1>
            <p>{props.work}</p>
            </div>
        )
}

export default AvatarList;