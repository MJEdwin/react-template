import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>{this.props.count}</h3>
                <button onClick={this.props.increase}>+</button>
                <button onClick={this.props.decrease}>-</button>
            </div>
        );
    }
}

var mapStateToProps = (state) => {
    return { count: state.counter };
};

var mapDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch({ type: 'increase' }),
        decrease: () => dispatch({ type: 'decrease' })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);