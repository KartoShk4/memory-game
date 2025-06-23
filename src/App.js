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
        let id = 1;
        // Повторили декструктуризацию, для того что бы получить карточки 2 раза
        return [...config.cards, ...config.cards]
            .sort(() => Math.random() - 0.5)
            // Добавили к каждому id +1 что бы не возникало дублирование id
            .map(item => ({...item, id: id++}));
    }

    choiceCardHandler(item) {
        this.setState({clicks: this.state.clicks + 1});
        console.log(item.name);
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
                                <Card item={item} key={item.id} onChoice={this.choiceCardHandler.bind(this)}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
