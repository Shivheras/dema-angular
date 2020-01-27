 ;import { Component ,OnInit} from '@angular/core';
 import  { User } from './user';
  import {FormBuilder,Validators ,FormGroup} from '@angular/forms';
  @Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  user:User = new User();
  userFormGroup:FormGroup;

constructor(private formBuilder: FormBuilder) { }
 
       ngOnInit ()
  {
      this.userFormGroup = this.formBuilder.group({
      firstName:['',Validators.required],
       surname:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required],
        mobileNo:['',Validators.required],
        
        gender:''
});
  }
   submit()
  {
    console.log(this.userFormGroup.value);
  }
  
}
