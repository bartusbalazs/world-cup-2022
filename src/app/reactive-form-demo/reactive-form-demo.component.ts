import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveFormDemoComponent implements OnInit {
  userForm = this.formBuilder.group({
    userName: ['', [Validators.required, Validators.minLength(4)]],
    email: [''],
    fullName: this.formBuilder.group({
      firstName: [''],
      lastName: ['']
    }),
    dynamicControls: this. formBuilder.array([
      this.formBuilder.control('')
    ])

  });


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  get dynamicControls() { return this.userForm.get('dynamicControls') as FormArray; }

  addDynamicControl() {
    this.dynamicControls.push(this.formBuilder.control(''));
  }


  clear(){
    this.userForm.get('userName')?.setValue('');
    this.userForm.get('email')?.setValue('');
    this.userForm.get('fullName')?.get('firstName')?.setValue('');
    this.userForm.get('fullName')?.get('lastName')?.setValue('');

    //this.userForm.reset();
  }

  onSubmit(){ console.log(this.userForm.value) }

}
