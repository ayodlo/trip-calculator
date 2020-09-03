//Actions
import { calculateOwes, onTitleError, setTitleInput } from '../../actions';

//Dependencies
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { titleInputValidator } from '../../shared/utils'

//CSS
import './title.css';

const mapStateToProps = (state) => {
    console.log(state)
    return {
        title: state.title,
        errorMessage: state.errorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOwesObject: (purchases) => dispatch(calculateOwes(purchases)),
        onChangeTitle: (event) => dispatch(setTitleInput(event.target.value)),
        onTitleError: () => dispatch(onTitleError())
    }
}

class Title extends Component {
    
    render() {
        const { onChangeTitle, title } = this.props;
        return (
            <div className='title-page-container'>
                <div className='title-page-center'>
                    <h1>Trip-Calculator</h1>
                    <input placeholder='Trip Title'
                        onChange={onChangeTitle}
                        className='title-page-input'
                        value={title} />
                    <Link to='/participants'
                        onClick={(event) => titleInputValidator(title, event)}
                        className='title-page-button'>Get Started</Link>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Title);