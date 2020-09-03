//Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Components
import { IoIosRemoveCircle } from 'react-icons/io';

//Actions
import { onDeleteParticipant } from '../../actions';

const mapStateToProps = (state) => {
    return {
        participants: state.participants
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteParticipant: (index) => dispatch(onDeleteParticipant(index))
    }
}

class ParticipantsList extends Component {

    render() {
        const { participants, onDeleteParticipant } = this.props;
        return (
            participants.map((participant, index) => {
                return (
                    <div className='participant-container' key={index}>
                        <div className = 'participant-container'>
                            <IoIosRemoveCircle className='removeIcon' onClick={() => onDeleteParticipant(index)} />
                            <li> {participant}</li>
                        </div>
                    </div>
                )
            })
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantsList);