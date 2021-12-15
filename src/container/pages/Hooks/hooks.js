import React, { Component, useState, useEffect } from 'react';
import './hooks.css';

// class Hooks extends Component {
//     state = {
//         count: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         });
//     }

//     componentDidMount(){
//         document.title = `Title Change : ${this.state.count}`
//     }

//     componentDidUpdate(){
//         document.title = `Title Change : ${this.state.count}`
//     }

//     componentWillUnmount(){
//         document.title = 'Latihan ReactJS';
//     }

//     render(){
//         return(
//             <div className="p-hooks">
//                 <p>Nilai saya saat ini adalah : {this.state.count} </p>
//                 <button onClick={this.onUpdate}>Update Nilai</button>
//             </div>
//         );
//     }
// }

const Hooks = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // sebagai componentDidMount sekaligus componentDidUpdate
        document.title = `Title Change : ${count}`
        // sebagai componentWillUnmount
        return () => {
            document.title = 'Latihan ReactJS';
        }
    });

    return (
        <div className="p-hooks">
            <p>Nilai saya saat ini adalah : {count} </p>
            <button onClick={() => setCount(count + 1)}>Update Nilai</button>
        </div>
    );
}

export default Hooks;