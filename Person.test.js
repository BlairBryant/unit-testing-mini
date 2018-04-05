let Person = require('./Person')

//arrange, act, assert

test('test person class', () => {
    //arrange
    let dan = new Person(1987)
    //act
    let result = dan.isMillenial()
    //assert
    expect(result).toBeTruthy()
})

test('check person is retiree', () => {
    let sammie = new Person(2030)
    let result = sammie.isRetiree()
    expect(result).toBeFalsy()
})