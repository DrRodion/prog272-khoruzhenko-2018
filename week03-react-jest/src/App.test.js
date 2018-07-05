import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

// Test application functionality
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
   
   it('renders and reads File: unknown', () => {
       const wrapper = shallow(<App />);
       const unknownFile = <p className="File">File: unknown</p>;
       expect(wrapper.contains(unknownFile)).toBe(true);
   });
   
   it('renders state of File paragraph after button click', () => {
       const wrapper = shallow(<App />);
       const fileName = <p className="File">File: url-file.js</p>;
       wrapper.find('#getFile').simulate('click');
       const paragraphData = wrapper.find('.App-intro').childAt(0).debug();
       console.log(paragraphData);
       expect(wrapper.contains(fileName)).toBe(true);
   });
   
   it('renders and displays the default first name', () => {
       const wrapper = shallow(<App />);
       const firstName = <p className="Addresses">firstName: unknown</p>; 
       const lastParagraph = wrapper.find('p').last().debug();
       console.log(lastParagraph);
       expect(wrapper.contains(firstName)).toEqual(true);
   });
});
