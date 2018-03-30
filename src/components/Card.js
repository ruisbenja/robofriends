import React from 'react';

const Card = (props) => {
    return(
        <div className="tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
            <div className="tc pa4">
                <img className="br-100 pa1 ba b--black-10 h3 w3" src={`https://robohash.org/${props.id}?200x200`} alt="avatar"/>
            </div>
            <div>
                <h3>{props.name}</h3>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;