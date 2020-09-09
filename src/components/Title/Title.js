//Actions
import { calculateOwes, onTitleError, setTitleInput } from '../../actions';

//Dependencies
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { titleInputValidator } from '../../shared/utils';

//CSS
import './title.css';

const mapStateToProps = (state) => {
    return {
        title: state.title
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOwesObject: (purchases) => dispatch(calculateOwes(purchases)),
        onChangeTitle: (event) => dispatch(setTitleInput(event.target.value)),
        onTitleError: () => dispatch(onTitleError())
    }
}

export class Title extends Component {
    
    render() {
        const { onChangeTitle, title } = this.props;
        return (
            <div className='title-page-container' data-test='title-page-container'>
                <div className='title-page-center' data-test='title-page-center'>
                    <h1 className='title-page-header' data-test='title-page-header'>Trip-Calculator</h1>
                    <input placeholder='Trip Title'
                        className='title-page-input'
                        data-test='title-page-input'
                        onChange={onChangeTitle}
                        value={title} />
                    <Link to='/participants'
                        onClick={(event) => titleInputValidator(title, event)}
                        className='title-page-button' data-test='title-page-button'>Get Started</Link>
                </div>
            </div>
        )
    }
}

Title.propTypes = {
    title: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Title);