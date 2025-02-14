const Calculator = require('./test.js');
const prompt = require('prompt-sync')();

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

jest.mock('prompt-sync', () => {
    return jest.fn().mockImplementation(() => {
        return jest.fn();
    });
});

describe('Calculator main function', () => {
    let calculator;
    let promptMock;

    beforeEach(() => {
        calculator = new Calculator();
        promptMock = prompt();
    });

    test('should add two numbers', () => {
        promptMock.mockReturnValueOnce('1').mockReturnValueOnce('5').mockReturnValueOnce('3');
        console.log = jest.fn();

        main();

        expect(console.log).toHaveBeenCalledWith('5 + 3 = 8');
    });

    test('should subtract two numbers', () => {
        promptMock.mockReturnValueOnce('2').mockReturnValueOnce('5').mockReturnValueOnce('3');
        console.log = jest.fn();

        main();

        expect(console.log).toHaveBeenCalledWith('5 - 3 = 2');
    });

    test('should multiply two numbers', () => {
        promptMock.mockReturnValueOnce('3').mockReturnValueOnce('5').mockReturnValueOnce('3');
        console.log = jest.fn();

        main();

        expect(console.log).toHaveBeenCalledWith('5 * 3 = 15');
    });

    test('should divide two numbers', () => {
        promptMock.mockReturnValueOnce('4').mockReturnValueOnce('6').mockReturnValueOnce('3');
        console.log = jest.fn();

        main();

        expect(console.log).toHaveBeenCalledWith('6 / 3 = 2');
    });

    test('should handle division by zero', () => {
        promptMock.mockReturnValueOnce('4').mockReturnValueOnce('6').mockReturnValueOnce('0');
        console.log = jest.fn();

        main();

        expect(console.log).toHaveBeenCalledWith('6 / 0 = Error! Division by zero.');
    });

    test('should calculate percentage', () => {
        promptMock.mockReturnValueOnce('5').mockReturnValueOnce('50').mockReturnValueOnce('200');
        console.log = jest.fn();

        main();

        expect(console.log).toHaveBeenCalledWith('50 is 25% of 200');
    });

    test('should handle invalid choice', () => {
        promptMock.mockReturnValueOnce('6').mockReturnValueOnce('5').mockReturnValueOnce('3');
        console.log = jest.fn();

        main();

        expect(console.log).toHaveBeenCalledWith('Invalid choice');
    });
});