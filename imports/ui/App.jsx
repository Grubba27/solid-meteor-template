import {Hello} from "./Hello";
import {Info} from "./Info";
import {Meteor} from "meteor/meteor";

function App() {

    return (
        <div>
            <h1>Welcome to Meteor!</h1>
            <Hello/>
            <button onClick={() => Meteor.call('insertLink',  'opa',  'https://www.meteor.com/tutorials/react/creating-an-app' )}>
                Click Me to add link
            </button>
            <Info/>
        </div>
    );
}

export default App;
