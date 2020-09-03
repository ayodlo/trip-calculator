//Actions
import { changeInvolved } from '../../actions';

//Dependencies
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

const mapStateToProps = state => {
    return {
        purchases: state.purchases,
        participants: state.participants
    }
}

const mapStateToDispatch = dispatch => {
    return  {
        changeInvolved: (involved, itemIndex) => dispatch(changeInvolved(involved, itemIndex))
    }
}

class DropDownParticipants extends Component {
    render() {
        const { participants, buyer, involved, itemIndex, changeInvolved } = this.props;
        
        const onChangeInvolved = (involved, itemIndex) => {
            changeInvolved(involved, itemIndex);
        }

        //Remove buyer from dropdown
        const participantsFiltered = participants.filter((participant) => {
            return buyer !== participant;
        })

        return (
            <div>
                <Multiselect
                    onSelect={(event)=>onChangeInvolved(event, itemIndex)}
                    onRemove={(event)=>onChangeInvolved(event, itemIndex)}
                    options={participantsFiltered}
                    isObject={false}
                    selectedValues={involved}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(DropDownParticipants);