import React from 'react';
import ReactDOM from 'react-dom';
import Address from './components/Address';
import addresses from './address-list';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

// Test Address component functionality
describe('Test Address component functionality', function() {
   it('renders without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<Address addressList={addresses}/>, div);
   });

   //
   // Default value address tests
   //
   
   it('renders and displays the default first name', () => {
       const wrapper = shallow(<Address addressList={addresses} />);
       const addressField = <p id="firstName">firstName: unknown</p>;
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the default last name', () => {
       const wrapper = shallow(<Address addressList={addresses} />);
       const addressField = <p id="lastName">lastName: unknown</p>;
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the default street address', () => {
       const wrapper = shallow(<Address addressList={addresses} />);
       const addressField = <p id="streetAddress">streetAddress: unknown</p>;
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the default city', () => {
       const wrapper = shallow(<Address addressList={addresses} />);
       const addressField = <p id="city">city: unknown</p>;
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the default state name', () => {
       const wrapper = shallow(<Address addressList={addresses} />);
       const addressField = <p id="stateName">stateName: unknown</p>;
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the default zip', () => {
       const wrapper = shallow(<Address addressList={addresses} />);
       const addressField = <p id="zip">zip: unknown</p>;
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the default phone', () => {
       const wrapper = shallow(<Address addressList={addresses} />);
       const addressField = <p id="phone">phone: unknown</p>;
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the default fax', () => {
       const wrapper = shallow(<Address addressList={addresses} />);
       const addressField = <p id="fax">fax: unknown</p>;
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the default tollfree', () => {
       const wrapper = shallow(<Address addressList={addresses} />);
       const addressField = <p id="tollfree">tollfree: unknown</p>;
       expect(wrapper.contains(addressField)).toBe(true);
   });
   
   //
   // New value address tests
   //

   it('renders and displays the new first name', () => {
       const wrapper = shallow(<Address addressList={addresses} />);
       const addressField = <p id="firstName">firstName: Patty</p>;
       wrapper.find('#setAddress').simulate('click');
       const paragraphData = wrapper.find('#firstName').debug();
       console.log(paragraphData);
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the new last name', () => {
       const wrapper = shallow(<Address addressList={addresses} />);
       const addressField = <p id="lastName">lastName: Murray</p>;
       wrapper.find('#setAddress').simulate('click');
       const paragraphData = wrapper.find('#lastName').debug();
       console.log(paragraphData);
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the new street address', () => {
       const wrapper = shallow(<Address addressList={addresses} />);
       const addressField = <p id="streetAddress">streetAddress: 154 Russell Senate Office Building</p>;
       wrapper.find('#setAddress').simulate('click');
       const paragraphData = wrapper.find('#streetAddress').debug();
       console.log(paragraphData);
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the new city', () => {
       const wrapper = shallow(<Address addressList={addresses} />);
       const addressField = <p id="city">city: Washington</p>;
       wrapper.find('#setAddress').simulate('click');
       const paragraphData = wrapper.find('#city').debug();
       console.log(paragraphData);
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the new state name', () => {
       const wrapper = shallow(<Address addressList={addresses} />);
       const addressField = <p id="stateName">stateName: D.C.</p>;
       wrapper.find('#setAddress').simulate('click');
       const paragraphData = wrapper.find('#stateName').debug();
       console.log(paragraphData);
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the new zip', () => {
       const wrapper = shallow(<Address addressList={addresses} />);
       const addressField = <p id="zip">zip: 20510</p>;
       wrapper.find('#setAddress').simulate('click');
       const paragraphData = wrapper.find('#zip').debug();
       console.log(paragraphData);
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the new phone', () => {
       const wrapper = shallow(<Address addressList={addresses} />);
       const addressField = <p id="phone">phone: (202) 224-2621</p>;
       wrapper.find('#setAddress').simulate('click');
       const paragraphData = wrapper.find('#phone').debug();
       console.log(paragraphData);
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the new fax', () => {
       const wrapper = shallow(<Address addressList={addresses} />);
       const addressField = <p id="fax">fax: (202) 224-0238</p>;
       wrapper.find('#setAddress').simulate('click');
       const paragraphData = wrapper.find('#fax').debug();
       console.log(paragraphData);
       expect(wrapper.contains(addressField)).toBe(true);
   });
   it('renders and displays the new tollfree', () => {
       const wrapper = shallow(<Address addressList={addresses} />);
       const addressField = <p id="tollfree">tollfree: (866) 481-9186</p>;
       wrapper.find('#setAddress').simulate('click');
       const paragraphData = wrapper.find('#tollfree').debug();
       console.log(paragraphData);
       expect(wrapper.contains(addressField)).toBe(true);
   });
});
