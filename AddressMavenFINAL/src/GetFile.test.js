import React from 'react';
import ReactDOM from 'react-dom';
import GetFile from './components/GetFile';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

// Test GetFile component functionality
describe('Test GetFile component functionality', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GetFile />, div);
    });

    it('renders and reads File: unknown', () => {
        const wrapper = shallow(<GetFile />);
        const unknownFile = <p className="File">File: unknown</p>;
        expect(wrapper.contains(unknownFile)).toBe(true);
    });
   
    it('renders state of File paragraph after button click', () => {
        const wrapper = shallow(<GetFile />);
        const fileName = <p className="File">File: url-file.js</p>;
        wrapper.find('#getFile').simulate('click');
        expect(wrapper.contains(fileName)).toBe(true);
    });
});
