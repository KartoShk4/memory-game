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
            .map(item => ({...item, id: id++, isOpened: false, isComplited: false}));
    }

    choiceCardHandler(openedItem) {
        // Открываем только 2 карточки
        if (this.state.cards.filter(item => item.isOpened).length >= 2) {
            return;
        }
        this.setState({
            cards: this.state.cards.map(item => {
                return item.id === openedItem.id ? {...item, isOpened: true} : item;
            })
        }, () => {
            this.processChoosingCards();
        });
        this.setState({
            clicks: this.state.clicks + 1
        });
    }

    processChoosingCards() {
        const openedCards = this.state.cards.filter(item => item.isOpened);
        // Выполняем сравнение двух карточек
        if (openedCards.length === 2) {
            if (openedCards[0].name === openedCards[1].name) {
                this.setState({
                    cards: this.state.cards.map(item => {
                        if (item.id === openedCards[0].id || item.id === openedCards[1].id) {
                            item.isComplited = true;
                        }
                        item.isOpened = false;
                        return item;
                    })
                })
                // Eсли карточки они разные, то закрываются через 1 секунду
            } else {
                setTimeout(() => {
                    this.setState({
                        cards: this.state.cards.map(item => {
                            item.isOpened = false;
                            return item;
                        })
                    })
                }, 1000)
            }
        }
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
                                <Card item={item} key={item.id} isShowed={item.isOpened || item.isComplited}
                                      onChoice={this.choiceCardHandler.bind(this)}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
