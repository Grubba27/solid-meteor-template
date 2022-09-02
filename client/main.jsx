/* @refresh reload */
import { render } from 'solid-js/web';

import '../imports/ui/index.css';
import App from '../imports/ui/App';
import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  render(() => <App/>, document.getElementById('root'));
})
