import React from "react"

export default function Card(props) {
        return (
            <div className="card">
                <small>{props.id}</small>
                <img className="card__image" src={props.img} alt="pokemon" />
                <h2> {props.name}
                    <img className="card__type" src={props.type1} alt="type__grass" />
                    <img className="card__type" src={props.type2} alt="type__poison" />
                </h2>
                <p>{props.resume}</p>
            </div>
        )
}



