import React, { Component, Fragment } from 'react';
import './lifeCycle.css';
import { GlobalConsumer } from 'context/context';
// import {connect} from 'react-redux';
// import { RootContext } from '../../Home/home';

class LifeCycle extends Component {
    constructor (props) {
        super(props);
        this.state = { 
            count: 1 
        }
        // console.log('constructor');
    }

    static getDerivedStateFromProps(props, state){
        // console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount () {
        // console.log('componentDidMount');
        // setTimeout(() => {
        //     this.setState ({
        //         count: 2
        //     });
        // }, 5000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.group('shouldComponentUpdate');
        // console.log(nextProps);
        // console.log('nextState:', nextState);
        // console.log('this.state:', this.state);
        // console.groupEnd();
        if(nextState.count >= 4) {
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // console.log('getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        // console.log('componentWillUnmount');
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render () {
        return (
            <Fragment>
                <p>Halaman LifeCycle</p>
                <hr />
                <button className="btn" onClick={() => {this.changeCount()}}>Button Component {this.state.count}</button>
                <hr />
                <p>Total Order: {this.props.state.totalOrder}</p>
            </Fragment>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(LifeCycle);
export default GlobalConsumer(LifeCycle);