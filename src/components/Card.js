import React from 'react';
import './Card.css';

class Card extends React.Component {

    constructor() {
        super();
        // Указываем что по умолчанию карточка закрыта
        this.state = {isOpened: false};
    }

    cardClickHandler(item) {
        this.setState({isOpened: !this.state.isOpened});
        this.props.onChoice(item);
    }

    render() {
        return (
            <div className={'card ' + (this.state.isOpened ? 'opened' : 'closed')}
                 onClick={this.cardClickHandler.bind(this, this.props.item)}>
                <div className="card-inner card-front">
                    <img src={'/images/' + this.props.item.image} alt={this.props.item.name}/>
                </div>
                <div className="card-inner card-back">
                    <img src={'/images/question.svg'} alt='question mark'/>
                </div>
            </div>
        )
    }
}

export default Card;