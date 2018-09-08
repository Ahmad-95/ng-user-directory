import { Injectable } from '@angular/core';
import { FormControl,ValidatorFn } from "@angular/forms";

export function FirstNameValidator(): ValidatorFn {
    return (control: FormControl): { [key: string]: any } | null => {
      const forbidden = String(control.value).includes('j');
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }

  export function emailValidator(): ValidatorFn {
    return (control: FormControl): {[key: string]: any} | null => {
      const forbidden = String(control.value).includes('j') && String(control.value).includes('1-9') ;
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }