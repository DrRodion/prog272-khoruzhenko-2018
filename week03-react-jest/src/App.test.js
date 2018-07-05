import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('jest test', function() {

   it('renders without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<App />, div);
   });

   it('renders and reads H1 text', () => {
       const wrapper = shallow(<App />);
       const welcome = <h1 className="App-title">Welcome to React</h1>;
       expect(wrapper.contains(welcome)).toBe(true);
   });
   
   it('renders and reads file: unknown', () => {
       const wrapper = shallow(<App />);
       const unknownFile = <p className="App-intro">file: unknown</p>;
       expect(wrapper.contains(welcome)).toBe(true);
   });
   
   it.only('renders state of File paragraph after button click', () => {
       const wrapper = shallow(<App />);
       const fileName = <p className="App-intro">file: url-file.js</p>;
       wrapper.find('#getFile').simulate('click');
       expect(wrapper.contains(fileName)).toBe(true);
   });
});
