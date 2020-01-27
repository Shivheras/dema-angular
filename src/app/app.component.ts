 ;import { Component ,OnInit} from '@angular/core';
 import  { User } from './user';
  import {FormBuilder,Validators ,FormGroup,FormArray} from '@angular/forms';
  @Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  user:User = new User();
  userFormGroup:FormGroup;
address:FormGroup;
constructor(private formBuilder: FormBuilder) { }
 
       ngOnInit ()
  {
      this.userFormGroup = this.formBuilder.group({
      firstName:['',Validators.required],
       surname:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required],
        mobileNo:['',Validators.required],
     
        gender:'',
        
      address:this.formBuilder.group({
        city:'',
        state:'',
        postel:'',
      }),
      //this.userFormGroup.controls.firstName.patchValue('shivani'),
      hobbies:this.formBuilder.array([]),
  });
  }
   submit()
  {
    console.log(this.userFormGroup.value);
  }
 loadData()
 {
   this.userFormGroup.setValue({
     firstName:'shivani',
     surname:'chaudhari',
     email:'sdcs',
     password:'csa',
     mobileNo:'sdcs',
     gender:'female',
     address:'',
      city:'surat',
        state:'',
        postel:'',
   })
 }
  addHobby()
  {
    const hobby = this.userFormGroup.controls.hobbies as FormArray;
    hobby.push(this.formBuilder.group({
      hobbyName:'',


    }));
  }
  }
