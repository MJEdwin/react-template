import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/home';

function Home(props) {
    useEffect(() => {
        props.init();
    }, []);
    return (
        <div>
            <input value={props.value} onChange={e => props.setValue(e.target.value)} />
            <div>{props.value}</div>
            <button>{props.value}</button>
            <select defaultValue="3">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
    );
}

export default connect(state => ({ value: state.home }), actions)(Home);