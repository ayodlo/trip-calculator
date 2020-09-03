//Actions
import { calculateOwes } from '../../actions';

//Dependencies
import { connect } from 'react-redux';
import React, { Fragment } from 'react';
import './owes.css';

const mapStateToProps = state => {
    return {
        purchases: state.purchases,
        participants: state.participants,
        owesObject: state.owesObject
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOwesObject: (purchases) => dispatch(calculateOwes(purchases))
    }
}

class Owes extends React.Component {

    constructor(props) {
        super(props)
        this.props.getOwesObject(this.props.purchases)
    }

    //Create Owes List for each participant - may refactor to its own component
    buildOwes = (owesObject) => {
        const renderOwesList = (peopleOwed) => {
            if (Object.keys(peopleOwed).length > 0) {
                return Object.keys(peopleOwed)
                .map((personOwed, index) => {
                    return <p key={index}>Owes {personOwed}: ${peopleOwed[personOwed]}</p>
                })
            }
        }

        //Check if there are any keys returned from calulateOwes
        if (Object.keys(owesObject).length > 0) {
            return Object.keys(owesObject).map((participant, index) => {
                //Check if participant needs to be displayed by checking if they owe anyone anything
                if(Object.keys(owesObject[participant]['peopleOwed']).length > 0) {
                    return (
                        <Fragment key={index}>
                            <div className='owes-table'>
                                <h2>{participant}</h2>
                                {renderOwesList(owesObject[participant]['peopleOwed'])}
                            </div>
                        </Fragment>
                    )
                } else {
                    return null;
                }
            })
        } else {
            return (
                <div className='owes-table'>
                    <h1>Everyones Debt Free!</h1>
                </div>
            )
        }
    }

    render() {
        return (
            <div className='container-owes'>
                <div>
                    {this.buildOwes(this.props.owesObject)}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Owes);