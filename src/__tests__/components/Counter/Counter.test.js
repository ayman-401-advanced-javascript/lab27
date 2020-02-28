import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Counter from '../../../components/Counter/Counter.js';

describe('<Counter />', ()=>{
    it('exists at the start of our application',()=>{
        let app = shallow(<Counter />);
        expect(app.find('h3').exists()).toBeTruthy();
    });
    it('Increment the state on click',()=>{
        let app = mount(<Counter />);
        let button = app.find('.Increment');
        expect(app.state('counter')).toBe(0)
        button.simulate('click');
        expect(app.state('counter')).toBe(1)
    });
    it('Decrement the state on click',()=>{
        let app = mount(<Counter />);
        let button = app.find('.Decrement');
        expect(app.state('counter')).toBe(0)
        button.simulate('click');
        expect(app.state('counter')).toBe(-1)
    });
    it('renders correctly', () => {
        const tree = renderer.create(<Counter />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});