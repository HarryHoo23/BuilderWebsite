import 'materialize-css/dist/css/materialize.min.css';
import WebFont from 'webfontloader';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';

WebFont.load({
    google: {
      families: ['Open Sans', 'sans-serif',
                 'Merriweather', 'serif',
                 'Satisfy', 'cursive',
                 'Patrick Hand', 'cursive'
        ]
    }
  });

ReactDOM.render(
    <App />,
    document.getElementById('root')
)