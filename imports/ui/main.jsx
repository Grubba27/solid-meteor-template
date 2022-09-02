/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  render(() => <App/>, document.getElementById('root'));
})
