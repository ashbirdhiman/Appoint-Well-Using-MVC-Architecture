
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AppointmentService} from "./appointment.service";
import {Hospital} from "../models/Hospital";
import {WalkInAppointment} from "../models/WalkInAppointment";


@Injectable({
  providedIn:  'root'
})
export class ApiService {
  private url = 'http://localhost:8081/';

  constructor(private http: HttpClient,private appointmentService:AppointmentService) { }

  login(email: string, password: string,role: string): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };

    // Create an object with email and password and convert it to JSON
    const body = JSON.stringify({ email, password });

    // Make the POST request with the correct body and headers
    return this.http.post(this.url + "patient/login", body, { headers });
  }

  sendHospitalData(data: any): Observable<any> {
    const apiUrl = 'localhost'; // Replace with actual API URL
    const headers = { 'Content-Type': 'application/json' };
    // The data sent in the body of the POST request
    const dataBody = {
      name: data.name,
      latitude: data.latitude,
      longitude: data.longitude,
      address: data.address,
      waitTime: data.waitTime
    };

    const body = JSON.stringify( dataBody);

      return this.http.post(this.url + "admin/addHospital", body, { headers });

  }
  addDoctor(data: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    // The data sent in the body of the POST request
    const dataBody = {
      name: data.name,
      email: data.email,
      password: data.password,
      specialization: data.specialization,
      contact_number: data.contact_number,
      status: data.status,
    };

    const body = JSON.stringify( dataBody);

    return this.http.post(this.url + "admin/addDoctor", body, { headers });

  }
  doctorLogin(email: string, password: string,role: string): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };

    // Create an object with email and password and convert it to JSON
    const body = JSON.stringify({ email, password });

    // Make the POST request with the correct body and headers
    return this.http.post(this.url + "doctor/login", body,{headers} );
  }

  adminLogin(email: string, password: string,role: string): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };

    // Create an object with email and password and convert it to JSON
    const body = JSON.stringify({ email, password });

    // Make the POST request with the correct body and headers
    return this.http.post(this.url + "admin/login", body,{headers});
  }
  hospitalLogin(email: string, password: string,role: string): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };

    // Create an object with email and password and convert it to JSON
    const body = JSON.stringify({ email, password });

    // Make the POST request with the correct body and headers
    return this.http.post(this.url + "hospitals/login", body,{headers});
  }

  signUp(email:string,password:string,contact_number:string,name:string):Observable<any>{
    const headers = { 'Content-Type': 'application/json' };

    // Create an object with email and password and convert it to JSON
    const body = JSON.stringify({ email, password,name,contact_number });

    // Make the POST request with the correct body and headers
    return this.http.post(this.url + "patient/signup", body, { headers });
  }


  //Hospitals
  getAllHospitals(): Observable<any> {
    // Retrieve the token from session storage
    const token = sessionStorage.getItem("token");

    // Set up headers including Authorization and Content-Type
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });

    // Convert the category name to a JSON object
    const body = JSON.stringify({ name });

    // Make the POST request with the body and headers
    return this.http.get<any>(`${this.url}admin/viewHospitals`, {headers});
  }

  getAllDoctors(): Observable<any> {
    // Retrieve the token from session storage
    const token = sessionStorage.getItem("token");

    // Set up headers including Authorization and Content-Type
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });

    // Convert the category name to a JSON object
    const body = JSON.stringify({ name });

    // Make the POST request with the body and headers
    return this.http.get<any>(`${this.url}admin/viewAllDoctors`, {headers});
  }
  getDoctors() {
    const token = sessionStorage.getItem("token");

    // Set up headers including Authorization and Content-Type
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });

    // Convert the category name to a JSON object
    const body = JSON.stringify({ name });

    let hospital = this.appointmentService.getHospital();

    let hospitalID=hospital.id;

    // Make the POST request with the body and headers
    return this.http.get<any>(`${this.url}hospitals/getDoctorsByHospital/1`);
  }

  assignDoctorToHospital(doctorId: any, hospitalId: any) {
    const params = new HttpParams()
      .set('doctorId', doctorId.toString())
      .set('hospitalId', hospitalId.toString());

    return this.http.post<string>(`${this.url}/admin/assignDoctor`, {}, { params });

  }

  getAllWalkInAppointments(hospitalId: any) {
    const token = sessionStorage.getItem("token");

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });

    // No need for HttpParams here since hospitalId is in the URL path
    return this.http.get<any>(`${this.url}walk-in-appointments/hospital/${hospitalId}`,{headers});
  }
  getPatientNameByID(patientid:any){
    const token = sessionStorage.getItem("token");

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });

    // No need for HttpParams here since hospitalId is in the URL path
    return this.http.get<any>(`${this.url}patient/id/${patientid}`,{headers});
  }


  getAllWalkInAppointmentByID(id: any) {
    const token = sessionStorage.getItem("token");

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });

    // No need for HttpParams here since hospitalId is in the URL path
    return this.http.get<any>(`${this.url}walk-in-appointments/getAppointById/${id}`,{headers});
  }
  updateAppointment(data: WalkInAppointment) {
    const token = sessionStorage.getItem("token");

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });

    const dataBody = {

    };

    return this.http.post(this.url + "patient/login", dataBody, { headers });
  }
}
