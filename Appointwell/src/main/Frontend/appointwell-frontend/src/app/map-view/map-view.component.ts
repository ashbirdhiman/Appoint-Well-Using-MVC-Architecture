import {Component, OnInit, AfterViewInit, Input, input} from '@angular/core';
import * as L from 'leaflet';
import { Hospital } from '../models/Hospital';
import { ApiService } from '../Service/api-service';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [],
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']  // Corrected typo to `styleUrls`
})
export class MapViewComponent implements OnInit  {

  @Input() hospitals: Hospital[] = [];

  private map!: L.Map;

  constructor(private apiService: ApiService) {}

  private initMap(): void {
    this.map = L.map('map', {
      center: [43.811630, -79.346260],
      zoom: 13
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    const customIcon = L.icon({
      iconUrl: 'assets/leaflet/images/marker-icon.png', // Ensure these URLs are correct
      iconRetinaUrl: 'assets/leaflet/images/marker-icon-2x.png',
      shadowUrl: 'assets/leaflet/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    this.hospitals.forEach(hospital => {
      L.marker([hospital.latitude, hospital.longitude], { icon: customIcon })
        .addTo(this.map)
        .bindPopup(hospital.address);
    });
  }

  ngOnInit(): void {
    this.apiService.getAllHospitals().subscribe(data => {
        this.hospitals = data;
        this.initMap();  // Initialize the map after data is fetched
        console.log('Fetched hospitals:', this.hospitals); // Log after data is fetched
      },
      error => {
        console.error('Error fetching hospitals:', error);
      });
  }


}
