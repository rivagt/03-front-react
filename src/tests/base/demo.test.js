describe('First Test', () => {
    test('Deben ser iguales los Strings', () => {
        //1. Inicializacion
        const msg = 'Hola Mundo';
        //2. estimulo
        const msg2 = `Hola Mundo`;
    
        //3. Obsevar comportamiento
        expect(msg).toBe(msg2); //comparacion de igualdad
    });
});

