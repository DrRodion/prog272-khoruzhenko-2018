import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from "react-router-dom";
configure({adapter: new Adapter()});

// Test App component functionality
describe('Test App component functionality', function() {
   it('renders without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<App />, div);
   });
});
