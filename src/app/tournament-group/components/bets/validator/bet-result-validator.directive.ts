import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";
import {ResultType} from "../../../model/result-type";
import {Directive} from "@angular/core";

@Directive({
  selector: '[appBetResultValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting:
    BetResultValidatorDirective, multi: true }]
})
export class BetResultValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return betResultValidator(control);
  }
}


export const betResultValidator: ValidatorFn = (control: AbstractControl):
  ValidationErrors | null => {
  const resultType = control.get('result-type');
  const homeScore = control.get('home-score');
  const awayScore = control.get('away-score');
  switch (resultType?.value){
    case ResultType.HOME_WIN:
      return homeScore?.value > awayScore?.value ? null : { resultInvalid: true};
    case ResultType.DRAW:
      return homeScore?.value == awayScore?.value ? null : { resultInvalid: true};
    case ResultType.AWAY_WIN:
      return homeScore?.value < awayScore?.value ? null : { resultInvalid: true};
  }
  return null;
};
