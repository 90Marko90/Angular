import { Component, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';




@Component({
  selector: 'app-comment-form',
  standalone: true,
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
  imports: [ 
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule, 
      MatSelectModule,
      MatButtonModule
    ],
})


export class CommentFormComponent { 

  @Output() handleSubmit = new EventEmitter<string>()
  
  myForm: FormGroup;

  constructor(private fb:FormBuilder) {this.myForm = this.fb.group({
    body: ['', Validators.minLength(5)]
  })}
  
  onSubmit() {
    this.handleSubmit.emit(this.myForm.value.body ?? ''); //outputs the comment in <input>
  } 

} 
