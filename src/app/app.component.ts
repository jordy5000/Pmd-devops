import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pmd-devops';
  constructor(private readonly http: HttpClient){}

  cGetProducts() {
    console.log('Before http')
    this.http.get('http://localhost:3000/products/allproducts').subscribe(
      (data) => {
        console.log('In http')
        console.log(data)
      })
      console.log('After http')
  }


}