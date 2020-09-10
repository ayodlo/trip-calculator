//Actions
import { calculateOwes, onCostChange, onDeletePurchase } from '../../actions';

//Components
import { TiDelete } from 'react-icons/ti';
import DropDownBuyer from './DropDownBuyer';
import DropDownParticipants from './DropDownParticipants';

//Dependencies
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

const mapStateToProps = state => {
    return {
        purchases: state.purchases
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOwesObject: (purchases) => dispatch(calculateOwes(purchases)),
        onCostChange: (cost, index) => dispatch(onCostChange(cost, index)),
        onDeletePurchase: (index) => dispatch(onDeletePurchase(index))
    }
}

class Purchases extends Component {

    componentDidUpdate(prevProps, prevState) {
        this.props.getOwesObject(this.props.purchases)
    }
    
    onCostInputChange = (cost, index) => {
        this.props.onCostChange(cost, index);
    }
    
    render() {
        const { purchases, onDeletePurchase } = this.props;
        if (purchases) {
            return purchases.map((purchase, index) => {
                return (
                    <Fragment key={index}>
                        <div
                            key={index}
                            className='item-container'
                            id={index}>
                            <h3>{purchase.item}</h3>
                            <div className='item-container__group'>
                            <TiDelete className='removeIcon_purchase' onClick={() => onDeletePurchase(index)} />
                                <p className='item-container__group-title'>Cost</p>
                                $
                                <input
                                    className='item-container__cost-input'
                                    id={index}
                                    onChange={(event) => this.onCostInputChange(event.target.value, index)}
                                    value={purchase.cost}
                                />
                            </div>
                            <div className='item-container__group'>
                                <p className='item-container__group-title'>Purchaser</p>
                                <DropDownBuyer itemIndex={index} buyer={purchase.buyer} />
                            </div>
                            <div className='item-container__group'>
                                <p className='item-container__group-title'>Participants</p>
                                <DropDownParticipants itemIndex={index} buyer={purchase.buyer} involved={purchase.involved} />
                            </div>
                        </div>
                    </Fragment>
                );
            });
        }
    }
}

Purchases.propTypes = {
    //Declaring a proptypes for the purchases object
    purchases: PropTypes.arrayOf(PropTypes.shape({
        item: PropTypes.string,
        cost: PropTypes.number,
        buyer: PropTypes.string,
        involved: PropTypes.array,
        spit: PropTypes.number
    }))
}

export default connect(mapStateToProps, mapDispatchToProps)(Purchases);