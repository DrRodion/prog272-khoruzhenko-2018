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
       const paragraphData = wrapper.find('.File').debug();
       console.log(paragraphData);
       expect(wrapper.contains(fileName)).toBe(true);
   });
   
   //
   // Default value address tests
   //
   
   it('renders and displays the default first name', () => {
       const wrapper = shallow(<App />);
       const addressField = <p id="firstName">firstName: unknown</p>;
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the default last name', () => {
       const wrapper = shallow(<App />);
       const addressField = <p id="lastName">lastName: unknown</p>;
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the default street address', () => {
       const wrapper = shallow(<App />);
       const addressField = <p id="streetAddress">streetAddress: unknown</p>;
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the default city', () => {
       const wrapper = shallow(<App />);
       const addressField = <p id="city">city: unknown</p>;
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the default state name', () => {
       const wrapper = shallow(<App />);
       const addressField = <p id="stateName">stateName: unknown</p>;
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the default zip', () => {
       const wrapper = shallow(<App />);
       const addressField = <p id="zip">zip: unknown</p>;
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the default phone', () => {
       const wrapper = shallow(<App />);
       const addressField = <p id="phone">phone: unknown</p>;
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the default fax', () => {
       const wrapper = shallow(<App />);
       const addressField = <p id="fax">fax: unknown</p>;
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the default tollfree', () => {
       const wrapper = shallow(<App />);
       const addressField = <p id="tollfree">tollfree: unknown</p>;
       expect(wrapper.contains(addressField)).toBe(true);
   });
   
   //
   // New value address tests
   //

   it('renders and displays the new first name', () => {
       const wrapper = shallow(<App />);
       const addressField = <p id="firstName">firstName: Patty</p>;
       wrapper.find('#setAddress').simulate('click');
       const paragraphData = wrapper.find('#firstName').debug();
       console.log(paragraphData);
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the new last name', () => {
       const wrapper = shallow(<App />);
       const addressField = <p id="lastName">lastName: Murray</p>;
       wrapper.find('#setAddress').simulate('click');
       const paragraphData = wrapper.find('#lastName').debug();
       console.log(paragraphData);
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the new street address', () => {
       const wrapper = shallow(<App />);
       const addressField = <p id="streetAddress">streetAddress: 154 Russell Senate Office Building</p>;
       wrapper.find('#setAddress').simulate('click');
       const paragraphData = wrapper.find('#streetAddress').debug();
       console.log(paragraphData);
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the new city', () => {
       const wrapper = shallow(<App />);
       const addressField = <p id="city">city: Washington</p>;
       wrapper.find('#setAddress').simulate('click');
       const paragraphData = wrapper.find('#city').debug();
       console.log(paragraphData);
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the new state name', () => {
       const wrapper = shallow(<App />);
       const addressField = <p id="stateName">stateName: D.C.</p>;
       wrapper.find('#setAddress').simulate('click');
       const paragraphData = wrapper.find('#stateName').debug();
       console.log(paragraphData);
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the new zip', () => {
       const wrapper = shallow(<App />);
       const addressField = <p id="zip">zip: 20510</p>;
       wrapper.find('#setAddress').simulate('click');
       const paragraphData = wrapper.find('#zip').debug();
       console.log(paragraphData);
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the new phone', () => {
       const wrapper = shallow(<App />);
       const addressField = <p id="phone">phone: (202) 224-2621</p>;
       wrapper.find('#setAddress').simulate('click');
       const paragraphData = wrapper.find('#phone').debug();
       console.log(paragraphData);
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the new fax', () => {
       const wrapper = shallow(<App />);
       const addressField = <p id="fax">fax: (202) 224-0238</p>;
       wrapper.find('#setAddress').simulate('click');
       const paragraphData = wrapper.find('#fax').debug();
       console.log(paragraphData);
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the new tollfree', () => {
       const wrapper = shallow(<App />);
       const addressField = <p id="tollfree">tollfree: (866) 481-9186</p>;
       wrapper.find('#setAddress').simulate('click');
       const paragraphData = wrapper.find('#tollfree').debug();
       console.log(paragraphData);
       expect(wrapper.contains(addressField)).toBe(true);
   });
});
