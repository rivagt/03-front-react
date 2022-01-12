import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Test en 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe async', (done) => {
        const id = 1;
        // jest.setTimeout(7000);
        getHeroeByIdAsync(id)
            .then( heroe=> {
                expect(heroe).toBe(heroes[0]);
                done();
        })
        .catch(done);
        
    });
    test('return error if heroe no exist ', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error =>{
                expect(error).toBe('No se pudo encontrar el héroe')
                done();
            });
    });
    
    
});
