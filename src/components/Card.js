import React from 'react';

class Card extends React.Component {

    constructor() {
        super();
        // Указываем что по умолчанию карточка закрыта
        this.state = {isOpened: false};
    }

    cardClickHandler(item) {
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