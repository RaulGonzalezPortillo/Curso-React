import { shallow } from 'enzyme';
import { CounterApp } from '../CounterApp';

describe('Testing CounterApp Component', () => {
    test('Must show <CounterApp/> correctly', () => {
        const wrapper = shallow(<CounterApp/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Must show the counter sent by props', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value = {value} />);
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe(value.toString());
    });

    test('Must increment with + button', () => {
        const value = 99;
        const wrapper = shallow(<CounterApp value = {value} />);
        wrapper.find('#addButton').simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('100');
    })

    test('Must increment with - button', () => {
        const value = 88;
        const wrapper = shallow(<CounterApp value = {value} />);
        wrapper.find('#substractButton').simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('87');
    })

    test('Must reset with reset button', () => {
        const value = 69;
        const wrapper = shallow(<CounterApp value = {value} />);
        wrapper.find('#addButton').simulate('click');
        wrapper.find('#addButton').simulate('click');
        wrapper.find('#substractButton').simulate('click');
        wrapper.find('#addButton').simulate('click');
        wrapper.find('#addButton').simulate('click');
        wrapper.find('#substractButton').simulate('click');
        wrapper.find('#addButton').simulate('click');
        wrapper.find('#substractButton').simulate('click');
        wrapper.find('#resetButton').simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe(value.toString());
    })
});