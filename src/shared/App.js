import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { Route } from 'react-router-dom';

import { Home, About } from '../pages';
import ModalContainer from '../components/Modal';


@inject('modal')
@observer
class App extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    componentDidUpdate(prevProps){
        if ( this.props.history.action === "POP" ) {
            this.props.modal.closeModal();
        }
    }

    render() {
        const { isOpen, showModal } = this.props.modal;

        return (
            <div>
                <button onClick={ showModal }>Open modal</button>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                { isOpen && <ModalContainer /> }
            </div>
        );
    }
}

export default App;