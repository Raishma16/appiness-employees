// This exports a custom browser history object that can be imported into any component or action creator.
// This is a more effective way of using the history object as opposed to having to wire the components
// with withRouter and passing the history object as a prop to the action creator everytime some programmatic
// navigation has to be done.

import { createBrowserHistory } from "history";
export default createBrowserHistory();
