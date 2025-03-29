import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
  } from 'class-validator';
  
  @ValidatorConstraint({ async: false })
  export class IsFutureDateTimeConstraint implements ValidatorConstraintInterface {
    validate(date: Date) {
      const now = new Date();
      return date > now; // Garante que a data/hora é futura
    }
  
    defaultMessage() {
      return 'A data e hora devem estar no futuro';
    }
  }
  
  export function IsFutureDateTime(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsFutureDateTimeConstraint,
      });
    };
  }