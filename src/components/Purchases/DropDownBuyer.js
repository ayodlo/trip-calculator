//Actions
import { changeBuyer, changeInvolvedBuyer } from '../../actions'

//Components
import DropDownBuyerList from './DropDownBuyerList';

//Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        participants: state.participants
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeBuyer: (buyer, index) => dispatch(changeBuyer(buyer, index)),
        changeInvolvedBuyer: (buyer, participants, index) => dispatch(changeInvolvedBuyer(buyer, participants, index))
    }
}

class DropDownBuyer extends Component {
    
    onChangeBuyer = (buyer, participants, index) => {
        this.props.changeBuyer(buyer, index);
        this.props.changeInvolvedBuyer(buyer, participants, index);
    }

    //Create temp buyer so we can stringify object property buyer and compare it to current participant
    render() {
        const { itemIndex, participants, buyer } = this.props;
        return (
            <div>
                <select className='dropDownBuyer' onChange={(event) => this.onChangeBuyer(event.target.value, participants, itemIndex)} >
                <DropDownBuyerList buyer={buyer} />
                </select>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropDownBuyer);