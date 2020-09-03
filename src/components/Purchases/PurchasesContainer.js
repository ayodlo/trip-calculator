
//Actions
import {
    calculateOwes,
    clearItemInput,
    onAddPurchase,
    setItemInput
} from '../../actions'

//Components
import Purchases from './Purchases';

//Dependencies
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { purchasesValidator } from '../../shared/utils'
import React, { Component } from 'react';
import './purchasesContainer.css';

const mapStateToProps = state => {
    return {
        item: state.item,
        items: state.items,
        participants: state.participants,
        purchases: state.purchases,
        title: state.title
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearItemInput: () => dispatch(clearItemInput()),
        getOwesObject: (purchases) => dispatch(calculateOwes(purchases)),
        onItemInputChange: (event) => dispatch(setItemInput(event.target.value)),
        onAddPurchase: (purchase) => dispatch(onAddPurchase(purchase))
    }
}

class PurchasesContainer extends Component {

    componentDidUpdate(prevProps, prevState) {
        this.props.getOwesObject(this.props.purchases)
    }

    onClickAddPurchaseButton = async () => {
        const { participants } = this.props;
        const defaultBuyer = participants[0];
        function Purchase(item) {
            this.item = item;
            this.cost = 0;
            this.buyer = defaultBuyer;
            this.involved = [...participants.filter(participant => participant !== defaultBuyer)];
            this.split = 0;
        }

        const purchase = new Purchase(this.props.item);
        await this.props.onAddPurchase(purchase);
        await this.props.clearItemInput();
    }

    render() {
        const { item, items, onItemInputChange, title, purchases } = this.props;

        if (!title || (!items === [])) {
            return (
                <div className='purchases-container'>
                    <h1 className='purchases-title-2'>You Must First Add a Title & Trip Participants</h1>
                </div>
            )
        }

        return (
            <div className='purchases-container'>
                <h1 className='purchases-title'>{title}</h1>
                <h2 className='purchases-title-2'>Purchases</h2>
                <div className='container-purchases__add-button'>
                    <input className='add-item-input'
                        value={item}
                        onChange={onItemInputChange}
                        ref={(input) => { this.itemInputFocus = input; }}
                    />
                    <div className='purchases-button-container'>
                        <button className='add-item-button'
                            type='button'
                            onClick={() => this.onClickAddPurchaseButton()}>
                            Add Item
                            </button>
                        <Link className='view-owes-button'
                            onClick={(event) => purchasesValidator(purchases.length, event)}
                            type='button'
                            to='/owes'>
                            Next
                            </Link>
                    </div>
                </div>
                <div className="purchases-items-container">
                    <Purchases />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchasesContainer);