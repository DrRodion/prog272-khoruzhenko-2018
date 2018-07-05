import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

// Test App component functionality
describe('Test App component functionality', function() {
   it('renders without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<App />, div);
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
});
