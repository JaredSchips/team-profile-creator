Employee = require('../lib/employee')
Manager = require('../lib/manager')
const { randomWord, randomInt } = require('../src/test-utils')

randomManager = () => new Manager(randomWord(), randomInt(), `${randomWord()}@email.com`, randomInt())

describe('Manager', () => {
    describe('Initialization', () => {
        it('should be an Employee', () => {
            const someManager = randomManager()
            expect(someManager).toBeInstanceOf(Employee)
        });

        it('should have property "officeNumber"', () => {
            const someOfficeNumber = randomInt()
            const someManager = new Manager(randomWord(), randomInt(), `${randomWord()}@email.com`, someOfficeNumber)
            expect(someManager.officeNumber).is(someOfficeNumber)
        });
    })

    describe('getOfficeNumber', () => {
        it('should return the officeNumber property', () => {
            const someManager = randomManager()
            expect(someManager.getOfficeNumber()).is(someManager.officeNumber)
        });
    })

    describe('getRole', () => {
        it('should return "Manager"', () => {
            const someManager = randomManager()
            expect(someManager.getRole()).is('Manager')
        })
    })
})