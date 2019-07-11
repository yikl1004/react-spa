import React from 'react';
import { inject, observer } from "mobx-react";
import './ModalContainer.scss';

@inject('modal')
@observer
class ModalContainer extends React.Component {
    render() {
        const { isOpen, closeModal } = this.props.modal;

        return (
            <React.Fragment>
                { isOpen ?
                <div className="Modal-overlay">
                    <div className="Modal">
                        <p className="title">Modal Title</p>
                        <div className="content">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel tempora nulla, non molestiae dicta ducimus. Et unde laborum eveniet ex quod doloribus quae, aliquam beatae atque, vero assumenda rem quo?
                            </p>
                        </div>
                        <div className="button-wrap">
                            <button onClick={ closeModal }> Close </button>
                        </div>
                    </div>
                </div>
                : null }
            </React.Fragment>
        )
    }
}
export default ModalContainer;