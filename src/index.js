import ReactDOM from 'react-dom';

// Includes the base css
import 'carbon-react/lib/utils/css';

import routes from './routes';

// IMPORTANT !!!!!
// We have to add a empty div in Addons to render the content there
// It has to be different than used by GAC_UI to avoid conflicts between boths libraries
ReactDOM.render(routes, document.getElementById('app-gac-ui-ts'));