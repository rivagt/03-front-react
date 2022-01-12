import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Prueba en 05-funciones', ()=>{
    test('getUser debe retornar un object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        //tobe no puede evaluar objetos
        expect(user).toEqual(userTest);
    });
    test('getUserActivo debe retornar ', () => {
        const name = 'Rivaldo';
        const userTest = {
            uid: 'ABC567',
            username: name
        };
        const userActive = getUsuarioActivo(name);
        expect(userActive).toEqual(userTest);
    });
    
});