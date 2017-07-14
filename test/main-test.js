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

//能被3和5或7整除但是包含3
    it('when number can only be by 3 and 5 or 7,and include in 3,should return the Fizz', () => {
        let num = 35;
        const actualResult = fizzBuzzWith(num);
        let expectResult = 'Fizz';
        expect(actualResult).toEqual(expectResult);
    });

//只能被3整除
  it('when number can only be divisible by 3,should return the Fizz', () => {
    let num = 9;
    const actualResult = fizzBuzzWith(num);
    let expectResult = 'Fizz';
    expect(actualResult).toEqual(expectResult);
  });

//只能被5整除
    it('when number can only be divisible by 5,should return the Buzz', () => {
        let num = 10;
        const actualResult = fizzBuzzWith(num);
        let expectResult = 'Buzz';
        expect(actualResult).toEqual(expectResult);
    });

//只能被7整除
    it('when number can only be divisible by 7,should return the Whizz', () => {
        let num = 14;
        const actualResult = fizzBuzzWith(num);
        let expectResult = 'Whizz';
        expect(actualResult).toEqual(expectResult);
    });

//只能被3,5整除
    it('when number can only be divisible by 3 and 5,should return FizzBuzz', () => {
        let num = 15;
        const actualResult = fizzBuzzWith(num);
        let expectResult = 'FizzBuzz';
        expect(actualResult).toEqual(expectResult);
    });

//只能被3,7整除
    it('when number can only be divisible by 3 and 7,should return FizzWhizz', () => {
        let num = 21;
        const actualResult = fizzBuzzWith(num);
        let expectResult = 'FizzWhizz';
        expect(actualResult).toEqual(expectResult);
    });

//只能被5,7整除
    it('when number can only be divisible by 5 and 7,should return BuzzWhizz', () => {
        let num = 70;
        const actualResult = fizzBuzzWith(num);
        let expectResult = 'BuzzWhizz';
        expect(actualResult).toEqual(expectResult);
    });

//能被3,5,7整除
    it('when number can only be divisible by 3,5 and 7,should return FizzBuzzWhizz', () => {
        let num = 105;
        const actualResult = fizzBuzzWith(num);
        let expectResult = 'FizzBuzzWhizz';
        expect(actualResult).toEqual(expectResult);
    });

//其他
    it('else,should return the number', () => {
        let num = 1;
        const actualResult = fizzBuzzWith(num);
        let expectResult = 1;
        expect(actualResult).toEqual(expectResult);
    });
});
