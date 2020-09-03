//Actions
import { 
    calculateOwes,
    changeParticipantInput,
    clearParticipantInput,
    onAddParticipant } from '../../actions';

//Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        participant: state.participant
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOwesObject: (purchases) => dispatch(calculateOwes(purchases)),
        onChangeParticipantInput: (event) => dispatch(changeParticipantInput(event.target.value)),
        onClearParticipantInput: () => dispatch(clearParticipantInput()),
        onAddParticipant: (participant) => dispatch(onAddParticipant(participant))
    }
}

class AddParticipant extends Component {

    componentDidUpdate(prevProps, prevState) {
        this.props.getOwesObject(this.props.purchases)
    }

    render() {
        const { onChangeParticipantInput, onAddParticipant, onClearParticipantInput } = this.props;
        const { participant } = this.props;
        return (
            <div className='add-container'>
                <input
                    onChange={onChangeParticipantInput}
                    placeholder='Trip Participants'
                    className='form-contaner__participants'
                    value={participant}
                    ref={(input) => { this.participantInput = input; }}
                />
                <button
                    className='add-button'
                    onClick={
                        async ()=> {
                            await onAddParticipant(participant);
                                  onClearParticipantInput();
                        }
                    }
                    type='button'>
                    Add
            </button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddParticipant);