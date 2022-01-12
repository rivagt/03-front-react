import { getImagen } from '../../base/11-async-await'

describe('Test 11-async-await', () => {
    test('Esperando url de imagen', async() => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    })
    
})
