import ReactDOM from './react-dom'

function createElement(tag,attrs,...children) {
    return {
        tag,
        attrs,
        children
    }
}

class Component {
    constructor(props) {
        this.props = props;
        this.state = {};
    }
    setState(newState) {
        Object.assign(this.state,newState)
        ReactDOM.renderComponent(this)
    }
}

export {
    createElement,
    Component
}

export default {
    createElement,
    Component
};