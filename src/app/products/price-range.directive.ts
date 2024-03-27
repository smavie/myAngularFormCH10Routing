import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export function priceRangeValidator(): ValidatorFn {
    return (control: AbstractControl<number>): ValidationErrors | null => {
        const inRange = control.value > 1 && control.value < 10.000;
        return inRange ? null : {outOfRange: true};
    }
}