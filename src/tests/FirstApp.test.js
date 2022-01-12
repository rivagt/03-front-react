// import { render } from '@testing-library/react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import FirstApp from '../FirstApp';


describe('Test in component FirstApp', () => {
    test('mostrar <FirstApp /> correctly', () => {
        const saludo = 'Hi im Rivita';
        const wrapper = shallow(<FirstApp saludo={saludo}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('show me subtitle from props', () => {
        const saludo = 'Hi Im Riva';
        const subtitle = 'Subtitle from FirstApp.test';
        const wrapper = shallow(<FirstApp saludo={ saludo } subtitulo={ subtitle }/>);
        const textp = wrapper.find('p').text().trim();
        // console.log(textp);
        expect(textp).toBe(subtitle);
    });
    
    
    
    //Test with import '@testing-library/jest-dom/extend-expect';
    // test('debe retornar soy goku', () => {
    //     const saludo = 'Hi Im Riita';
    //     const {getByText} = render(<FirstApp saludo={saludo}/>);

    //     expect(getByText(saludo)).toBeInTheDocument();
    // });
    
})
