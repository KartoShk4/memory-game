import React from 'react';

class Card extends React.Component {
    render() {
        return(
            <div className='card'>
                <img src={'/images/' + this.props.item.image} alt={this.props.item.name}/>
            </div>
        )
    }
}

export default Card;