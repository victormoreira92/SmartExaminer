import { Component } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  

  form: FormGroup = new FormGroup({
    title: new FormControl('',[Validators.required]),
    description: new FormControl('', [Validators.required]),
  })

  constructor(private quizService: QuizService){}

  createQuiz(){
    if(this.form.valid){
      this.quizService.createQuiz(this.form.value)
    }
  }
}
