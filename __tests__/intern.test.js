Employee = require('../lib/employee')
Intern = require('../lib/intern')
const { randomWord, randomInt } = require('../src/test-utils')

randomIntern = () => new Intern(randomWord(), randomInt(), `${randomWord()}@email.com`, randomWord())

describe('Intern', () => {
    describe('Initialization', () => {
        it('should be an Employee', () => {
            const someIntern = randomIntern()
            expect(someIntern).toBeInstanceOf(Employee)
        });

        it('should have property "school"', () => {
            const someSchool = randomWord()
            const someIntern = new Intern(randomWord(), randomInt(), `${randomWord()}@email.com`, someSchool)
            expect(someIntern.school).toBe(someSchool)
        });
    })

    describe('getSchool', () => {
        it('should return the school property', () => {
            const someIntern = randomIntern()
            expect(someIntern.getSchool()).toBe(someIntern.school)
        });
    })

    describe('getRole', () => {
        it('should return "Intern"', () => {
            const someIntern = randomIntern()
            expect(someIntern.getRole()).toBe('Intern')
        })
    })
})