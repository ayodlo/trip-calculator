import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        participants: state.participants
    }
}

class DropDownBuyerList extends Component {
    render() {
        const { participants, buyer } = this.props;
        const tempBuyer = JSON.stringify(buyer);
        return (
            participants.map((participant, index) => {
                //Create temp buyer so we can stringify object property buyer and compare it to current participant
                const tempParticipant = JSON.stringify(participant)
                //Check buyer and participanmt value to know which dropdown item to display
                if (tempBuyer === tempParticipant) {
                    return <option className="dropDownBuyerOption" value={participant} selected="selected" key={index}>{participant}</option>
                } else {
                    return <option value={participant} key={index}>{participant}</option>
                }
            })
        )
    }
}

export default connect(mapStateToProps)(DropDownBuyerList)