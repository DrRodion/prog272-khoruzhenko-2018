import React from 'react';
import ReactDOM from 'react-dom';
import Address from './components/Address';
import addresses from './address-list';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

// Test Address component functionality
describe('Test Address component functionality', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Address addressList={addresses}/>, div);
    });
});
