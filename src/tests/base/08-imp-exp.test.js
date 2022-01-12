import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Test 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe by ID ', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroedata = heroes.find( h => h.id === id);
        expect(heroe).toEqual(heroedata);
    });
    test('getHeroeById debe retornar undefined si heroe no exist ', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });
    test('retornar heroe de dc', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        const heroesdata = heroes.filter( h => h.owner === owner);
        expect(heroe).toEqual(heroesdata);
    });
    test('retornar heroe de marvel', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        // const heroesdata = heroes.filter( h => h.owner === owner);
        // expect(heroe.length).toBe(heroesdata.length);
        expect(heroe.length).toBe(2);
    });
});