import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
configure({adapter: new Adapter()});

// Test Header component functionality
describe('Test Header component functionality', function() {
   it('renders without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<MemoryRouter><Header /></MemoryRouter>, div);
   });

   it('renders and reads H1 text', () => {
       const wrapper = shallow(<Header />);
       const welcome = <h1 className="App-title">Address Maven</h1>;
       expect(wrapper.contains(welcome)).toBe(true);
   });
});
