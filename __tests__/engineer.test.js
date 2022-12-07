Employee = require('../lib/employee')
Engineer = require('../lib/engineer')
const { randomWord, randomInt } = require('../src/test-utils')

randomEngineer = () => new Engineer(randomWord(), randomInt(), `${randomWord()}@email.com`, randomInt())

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should be an Employee', () => {
            const someEngineer = randomEngineer()
            expect(someEngineer).toBeInstanceOf(Employee)
        });

        it('should have property "github"', () => {
            const someGithub = randomWord()
            const someEngineer = new Engineer(randomWord(), randomInt(), `${randomWord()}@email.com`, someGithub)
            expect(someEngineer.github).toBe(someGithub)
        });
    })

    describe('getGithub', () => {
        it('should return the github property', () => {
            const someEngineer = randomEngineer()
            expect(someEngineer.getGithub()).toBe(someEngineer.github)
        });
    })

    describe('getRole', () => {
        it('should return "Engineer"', () => {
            const someEngineer = randomEngineer()
            expect(someEngineer.getRole()).toBe('Engineer')
        })
    })
})