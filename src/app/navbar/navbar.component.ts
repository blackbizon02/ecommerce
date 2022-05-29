import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  constructor(
    private activeroute:ActivatedRoute,
    
    ) { 

  }
  act = true;
  
  
  ngOnInit(): void {
    
  }
  lla = false;
  resize(){
    this.lla = !this.lla;
  }

}
