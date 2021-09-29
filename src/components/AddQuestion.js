import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { handleAddQuestion } from '../actions/questions';

class AddQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { dispatch, id } = this.props
        const { optionOne, optionTwo } = this.state

        dispatch(handleAddQuestion(optionOne, optionTwo))

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            toHome: id ? false : true
        }))
    }

    handleChange = (e, key) => {
        const value = e.target.value
        this.setState(() => ({
            [key]: value
        }))
    }
    render() {
        const { optionOne, optionTwo, toHome } = this.state
        if (toHome === true) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <h3 className='center'>Would You Rather</h3>
                <form className='new-question' onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Option one"
                        value={optionOne}
                        onChange={(e) => this.handleChange(e, 'optionOne')}
                        className='input'
                    />

                    <input
                        placeholder="Option two"
                        value={optionTwo}
                        onChange={(e) => this.handleChange(e, 'optionTwo')}
                        className='input'
                    />

                    <button className='btn'
                        type='submit'
                        disabled={optionOne === '' || optionTwo === ''}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}


export default connect()(AddQuestion)