const enhancer = require('./enhancer.js');

describe('enhacer tests', () => {
    describe('repair function', () => {
        it('should set durability to 100', () => {
            expect(enhancer.repair({
                name: 'something', 
                durability: 80, 
                enhancement: 5
            })).toEqual({
                name: 'something', 
                durability: 100, 
                enhancement: 5
            })
        })
    })

    describe('success function', () => {
        it('should add one enachment ',() => {
            expect(enhancer.succeed({
                name: 'something', 
                durability: 80, 
                enhancement: 5
            })).toEqual({
                name: 'something', 
                durability: 80, 
                enhancement: 6
            })
        })
        it('should not add anything when enhancment === 20', () => {
            expect(enhancer.succeed({
                name: 'something', 
                durability: 80, 
                enhancement: 20
            })).toEqual({
                name: 'something', 
                durability: 80, 
                enhancement: 20
            })
        })
    })

    describe('fail function', () => {
        it('should decrease durability by 5 if enhancment < 15', () => {
            expect(enhancer.fail({
                name: 'something', 
                durability: 80, 
                enhancement: 14
            })).toEqual({
                name: 'something', 
                durability: 75, 
                enhancement: 14
            })
        });

        it('should decrease durability by 10 if enhancment >= 15', () => {
            expect(enhancer.fail({
                name: 'something', 
                durability: 80, 
                enhancement: 16
            })).toEqual({
                name: 'something', 
                durability: 70, 
                enhancement: 16
            })
        })

        it('should decrease enhancement by 1 if enhancement > 16', () => {
            expect(enhancer.fail({
                name: 'something', 
                durability: 80, 
                enhancement: 17
            })).toEqual({
                name: 'something', 
                durability: 70, 
                enhancement: 16
            })
        })
    })

    describe('get function', () => {
        it('should add [+ enhancement lvl] to the name of the item', () => {
            expect(enhancer.get({
                name: 'something', 
                durability: 80, 
                enhancement: 17
            })).toEqual({
                name: '[+17] something', 
                durability: 80, 
                enhancement: 17
            })
        })
    })
})