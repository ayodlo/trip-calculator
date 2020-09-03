//Actions
import { onParticipantsError } from '../../actions';

//Dependencies
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { participantsValidator } from '../../shared/utils';

//Components
import AddParticipant from './AddParticipant'
import ParticipantsList from './ParticipantsList';

//CSS
import './participants.css';

const mapStateToProps = state => {
    return {
        title: state.title,
        participants: state.participants,
        errorMessage: state.errorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onParticipantsError: () => dispatch(onParticipantsError())
    }
}

class Participants extends Component {
    render() {
        const { title, errorMessage, participants } = this.props;
        return (
            <div className='participants-container'>
                <div className='participants-form-container'>
                    <h2 className='participants-title'>{title}</h2>
                    <p className='input-instructions'>Enter a Trip Participant and Press Add</p>
                    <AddParticipant />
                    <p className='form-error-message'>{errorMessage}</p>
                    <Link to='/purchases'
                        className='add-participants-button'
                        onClick={(event) => participantsValidator(participants.length, event)}>Add Purchases
                    </Link>
                    <div className='container-list'>
                        <ul>
                            <ParticipantsList />
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Participants);
