import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class QuestionsDetails extends Component {
    render() {
        const { id } = this.props
        return (
            <div>
                <h3  className='center'>Would You Rather</h3>
                <Question id={id} isDetailsPage={true} />
            </div>
        )
    }
}

function mapStateToProps({ }, props) {
    const { id } = props.match.params
    return {
        id,
    }
}
export default connect(mapStateToProps)(QuestionsDetails)