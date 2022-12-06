Employee = require('../lib/employee')
const { randomWord, randomInt } = require('../src/test-utils')

randomEmployee = () => new Employee(randomWord(), randomInt(), `${randomWord()}@email.com`)

describe('Employee', () => {
    describe('Initialization', () => {
        it('should have properties "name", "id", and "email"', () => {
            const someName = randomWord()
            const someId = randomInt()
            const someEmail = `${randomWord()}@email.com`
            const someEmployee = new Employee(someName, someId, someEmail)

            expect(someEmployee.name).is(someName)
            expect(someEmployee.id).is(someId)
            expect(someEmployee.email).is(someEmail)
        })
    })
    
    describe('getName', () => {
        it("should return the name property", () => {
            const someEmployee = randomEmployee()

            expect(someEmployee.getName()).is(someEmployee.name)
        })
    })

    describe('getId', () => {
        it("should return the ID property", () => {
            const someEmployee = randomEmployee()

            expect(someEmployee.getId()).is(someEmployee.id)
        })
    })

    describe('getEmail', () => {
        it('should return the email property', () => {
            const someEmployee = randomEmployee()

            expect(someEmployee.getEmail()).is(someEmployee.email)
        });
    })

    describe('getRole', () => {
        it('should return "Employee"', () => {
            const someEmployee = randomEmployee()
            
            expect(someEmployee.getRole()).is('Employee')
        });
    })
})