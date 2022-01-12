import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Test en elementos de component CounterApp', () => {
    // let wrapper = shallow(<CounterApp />);
    let wrapper;
    beforeEach( ()=> {
        wrapper = shallow(<CounterApp />);
    });
   test('show <CounterApp /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
   });

   test('Testing render with value in 100', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={ value }/>);
    const valuecomp = wrapper.find('h2').text().trim();
    // console.log(textp);
    expect(valuecomp).toBe('Uid:'+value);
   });

   test('Testing incrementing button +1 on module counter', () => {
       wrapper.find('button').at(0).simulate('click');
       const valuecomp = wrapper.find('h2').text().trim();
       expect(valuecomp).toBe('Uid:11');
   });
   
    test('Testing button -1 on module counter', () => {
       wrapper.find('button').at(2).simulate('click');
       const valuecomp = wrapper.find('h2').text().trim();
       expect(valuecomp).toBe('Uid:9');
   });

    test('Testing reset button', () => {
        const wrapper = shallow(<CounterApp value={ 105 }/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');

        wrapper.find('button').at(1).simulate('click');
        const valuecomp = wrapper.find('h2').text().trim();

        expect(valuecomp).toBe('Uid:105');
    });
    

});
