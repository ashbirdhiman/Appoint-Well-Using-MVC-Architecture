import {Component, OnInit} from '@angular/core';
import {MapViewComponent} from "../../map-view/map-view.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,

  templateUrl: './dashboard.component.html',
  imports: [
    MapViewComponent
  ],
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  userRole: string ="admin";

  ngOnInit(): void{ // Implement logic to get the user's role // For example, getting it from a token or user service
    this.userRole = this.getUserRole(); }
  getUserRole(): string {
    // Replace this with your actual role check logic // This is a simple example, you might want to check a user service or token
    return sessionStorage.getItem('userRole')||'';
  }


}
