import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
registerForm: FormGroup;

    step =1 ;
    submitted = false;

  constructor(private formBuilder: FormBuilder) { }
 
ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstName: ['',[ Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone:['',[Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
    }
 
onSubmit(){
  
  this.step =2 ;
    console.log(this.registerForm.value);
    this.submitted = true;
    if(this.registerForm.invalid){
       console.log("invalid");
      return;
    }
}

}