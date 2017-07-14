'use strict';

describe('FizzBuzzWith', () => {
//包含3
  it('when number is include in 3,should return Fizz', () => {
    // Given
    let num = 13;
    // when
    const actualResult = fizzBuzzWith(num);
    // then..
    let expectResult = 'Fizz';
    expect(actualResult).toEqual(expectResult);
  });

//只能被3整除
  it('when number is times of 9,should return 9', () => {
    let num = 9;
    const actualResult = fizzBuzzWith(num);
    let expectResult = 'Fizz';
    expect(actualResult).toEqual(expectResult);
  });

//只能被5整除
    it('when number is times of 10,should return 10', () => {
        let num = 10;
        const actualResult = fizzBuzzWith(num);
        let expectResult = 'Buzz';
        expect(actualResult).toEqual(expectResult);
    });

//只能被7整除
    it('when number is times of 14,should return 14', () => {
        let num = 14;
        const actualResult = fizzBuzzWith(num);
        let expectResult = 'Whizz';
        expect(actualResult).toEqual(expectResult);
    });

//只能被3,5整除
    it('when number is times of 15,should return 15', () => {
        let num = 15;
        const actualResult = fizzBuzzWith(num);
        let expectResult = 'FizzBuzz';
        expect(actualResult).toEqual(expectResult);
    });

//只能被3,7整除
    it('when number is times of 21,should return 21', () => {
        let num = 21;
        const actualResult = fizzBuzzWith(num);
        let expectResult = 'FizzWhizz';
        expect(actualResult).toEqual(expectResult);
    });

//只能被5,7整除
    it('when number is times of 70,should return 70', () => {
        let num = 70;
        const actualResult = fizzBuzzWith(num);
        let expectResult = 'BuzzWhizz';
        expect(actualResult).toEqual(expectResult);
    });

//能被3,5,7整除
    it('when number is times of 105,should return 105', () => {
        let num = 105;
        const actualResult = fizzBuzzWith(num);
        let expectResult = 'FizzBuzzWhizz';
        expect(actualResult).toEqual(expectResult);
    });

//其他
    it('should return 1', () => {
        let num = 1;
        const actualResult = fizzBuzzWith(num);
        let expectResult = 1;
        expect(actualResult).toEqual(expectResult);
    });
});
