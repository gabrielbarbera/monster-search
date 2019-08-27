import React, {Component} from 'react';
import Card from '../card/card.component.jsx'
import './card-list.styles.css'

class CardList extends Component {
    render() {
        return (
            <div className="card-list">
            {this.props.monsters.map((monster, i) => (
                <Card key={i} monster={monster}/>
            ))}
            </div>
        )
    }
}

export default CardList;