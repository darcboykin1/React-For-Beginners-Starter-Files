// let's go!
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import  './css/style.css';
import StorePicker from './components/storepicker';
import App from './components/App';
import NotFound from './components/notfound';

const Root = () => {
  return (
    <BrowserRouter>
    <div>
       <Match exactly pattern="/" component={StorePicker} />
       <Match pattern="/store/:storeId" component={App} />
       <Miss component={NotFound} />
     </div>
    </BrowserRouter>

    )
}

render(<Root/> , document.querySelector('#main'));

