import { Form } from './form.js';

export function App(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(Form, null)
    );
}