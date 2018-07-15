import React from 'react';
import ReactDOM from 'react-dom';
import Address from './components/Address';
import AddressShow from './components/Address-Show';
import AddressList from './address-list';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

// Test AddressShow component functionality
describe('Test AddressShow component functionality', function() {
   //
   // Value address tests
   //

   it('renders and displays the new first name', () => {
       const wrapper = shallow(<Address addressList={AddressList}/>);
       wrapper.instance().setAddress();
       setImmediate(() => {
	     wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').firstName).toEqual('Patty');
       });
   });
   it('renders and displays the new last name', () => {
       const wrapper = shallow(<Address addressList={AddressList}/>);
       wrapper.instance().setAddress();
       setImmediate(() => {
	     wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').lastName).toEqual('Murray');
       });
   });
   it('renders and displays the new street address', () => {
       const wrapper = shallow(<Address addressList={AddressList}/>);
       wrapper.instance().setAddress();
       setImmediate(() => {
	     wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').address).toEqual('154 Russell Senate Office Building');
       });
   });
   it('renders and displays the new city', () => {
       const wrapper = shallow(<Address addressList={AddressList}/>);
       wrapper.instance().setAddress();
       setImmediate(() => {
	     wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').city).toEqual('Washington');
       });
   });
   it('renders and displays the new state name', () => {
       const wrapper = shallow(<Address addressList={AddressList}/>);
       wrapper.instance().setAddress();
       setImmediate(() => {
	     wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').state).toEqual('D.C.');
       });
   });
   it('renders and displays the new zip', () => {
       const wrapper = shallow(<Address addressList={AddressList}/>);
       wrapper.instance().setAddress();
       setImmediate(() => {
	     wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').zip).toEqual('20510');
       });
   });
   it('renders and displays the new phone', () => {
       const wrapper = shallow(<Address addressList={AddressList}/>);
       wrapper.instance().setAddress();
       setImmediate(() => {
	     wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').phone).toEqual('(202) 224-2621');
       });
   });
   it('renders and displays the new fax', () => {
       const wrapper = shallow(<Address addressList={AddressList}/>);
       wrapper.instance().setAddress();
       setImmediate(() => {
	     wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').fax).toEqual('(202) 224-0238');
       });
   });
   it('renders and displays the new tollfree', () => {
       const wrapper = shallow(<Address addressList={AddressList}/>);
       wrapper.instance().setAddress();
       setImmediate(() => {
	     wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').tollfree).toEqual('(866) 481-9186');
       });
   });
});
