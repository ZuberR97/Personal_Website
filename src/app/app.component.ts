import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'public';
  time = new Date();

  constructor(
    private _route: ActivatedRoute,
    private _router: Router){}

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  homeClick(){
    this._router.navigate(['/home']);
  }

  aboutMeClick(){
    this._router.navigate(['/about_me']);
  }

  resumeClick(){
    this._router.navigate(['/resume']);
  }

  projectsClick(){
    this._router.navigate(['/projects']);
  }

  contactClick(){
    this._router.navigate(['/contact']);
  }

}
