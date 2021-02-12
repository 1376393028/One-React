import React from "./lib/react"
import ReactDOM from "./lib/react-dom"

// function clickMe() {
//     console.log('hello')
//    }
// let objStyle = {
//     color: "red",
//     fontSize: "20px"
// }
// let div = (<h1 className="hello" onClick={clickMe} style= {objStyle}>
//               <span>hello</span>
//               <span>world</span>
//           </h1>)
// console.log(div)
// ReactDOM.render(div,document.body)

// class Menu extends React.Component {
//     render() {
//         return <h1>menu {this.props.title}</h1>
//     }
// }

function Menu(props) {
    return <h1>menu {props.title}</h1>
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'jirengu'
        }
    }
    handleClick() {
        this.setState({
            title: 'hui'
        })
    }
    render() {
        return (
            <div>
                <Menu title={this.state.title} />
                <h1>{this.state.title}</h1>
                <p>{this.props.id}</p>
                <span onClick={this.handleClick.bind(this)}>hello</span>
            </div>
        );
    }
}

ReactDOM.render((
    <App id="app">hello</App>
),document.body)