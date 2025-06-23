import './App.css';
import config from './config';
import React from 'react';
import Card from "./components/Card";

class App extends React.Component {

    constructor() {
        super();
        this.state = {cards: this.prepareCards(), clicks: 0}
    }

    prepareCards() {
        // Повторили декструктуризацию, для того что бы получить карточки 2 раза
        return [...config.cards, ...config.cards]
            .sort(() => Math.random() - 0.5);
    }

    render() {
        return (
            <div className="App">
                <header className='header'>Memory Game</header>
                <div className='game'>
                    <div className="score">
                        Нажатий: {this.state.clicks}
                    </div>
                    <div className="cards">
                        {
                            this.state.cards.map(item => (
                                <Card item={item} key={item.id}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
