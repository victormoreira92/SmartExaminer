import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private http = inject(HttpClient)
  private readonly url =  'http://localhost:3000//quizzes';


  constructor() { }

  createQuiz(quiz: {
    title: string,
    description: string
  }):Observable<any>{
    return this.http.post(this.url, quiz).pipe(
      tap((response: any) => console.log(response)))
  }
}
