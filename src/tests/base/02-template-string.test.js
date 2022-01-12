import { getSaludo } from '../../base/02-template-string';

describe('Test en 02-template-string.test.js', ()=>{
    test('prueba de metodo getSaludo()->return expect hola Fernando',()=>{
        const nombre = 'Fernando';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola '+nombre+'!');
    });

    test('prueba getSaludo by default ', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Raul!');
    })
    
});