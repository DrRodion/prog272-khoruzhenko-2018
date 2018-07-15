import React from 'react';
import ReactDOM from 'react-dom';
import Address from './components/Address';
import addresses from './address-list';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from "react-router-dom";
configure({adapter: new Adapter()});

// Test Address component functionality
describe('Test Address component functionality', function() {
   it('renders without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<Address addressList={addresses}/>, div);
   });
});
