import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  welcome= 'welcome to our club'

  verifywelcomelength = (welcomeText : String) => {
    if(welcomeText.length<50)
    return true
  return false
  }

}
