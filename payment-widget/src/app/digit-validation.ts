type DigitValidation = (char:string) => boolean;


const numericValidator = (char:string) => /[0-9]{1}/.test(char);

const lowerCaseValidator = (char:string) => /[a-z]{1}/.test(char);

const upperCaseValidator = (char:string) => /[A-Z]{1}/.test(char);

const anyValidator = (char:string) => true;

const numberRangeValidator = (maxValue:number, char:string) => numericValidator(char) && parseInt(char) <= maxValue;

export const neverValidator = (char:string) => false;


export const maskDigitValidations: {[key:string]:DigitValidation} = {
    'a': lowerCaseValidator,
    'A': upperCaseValidator,
    '*': anyValidator
};

for (let i = 0; i <= 9; i++) {
    maskDigitValidations[i] = numberRangeValidator.bind(undefined, i);
}