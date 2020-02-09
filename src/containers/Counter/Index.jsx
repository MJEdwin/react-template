import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/counter';

function Counter(props) {
    useEffect(() => {
        props.init();
    }, []);
    return (
        <div>
            <h3>{props.count}</h3>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
        </div>
    );
}

export default connect((state) => ({ count: state.counter }), actions)(Counter);