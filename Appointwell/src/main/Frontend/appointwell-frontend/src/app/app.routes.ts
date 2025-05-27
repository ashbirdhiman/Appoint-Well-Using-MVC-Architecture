import {Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {DashboardComponent} from "./dashboards/dashboard/dashboard.component";
import {ChooseSpecializationComponent} from "./choose-specialization/choose-specialization.component";
import {SelectDateTimeComponent} from "./select-date-time/select-date-time.component";
import {ListSymptomsComponent} from "./list-symptoms/list-symptoms.component";
import {SelectHospitalComponent} from "./select-hospital/select-hospital.component";
import {SelectDoctorComponent} from "./select-doctor/select-doctor.component";
import {AppointmentConfirmComponent} from "./appointment-confirm/appointment-confirm.component";
import {AddHospitalComponent} from "./admin-controls/add-hospital/add-hospital.component";
import {CreateDoctorComponent} from "./admin-controls/create-doctor/create-doctor.component";
import {AssignDoctorComponent} from "./admin-controls/assign-doctor/assign-doctor.component";
import {PatientDashboardComponent} from "./dashboards/patient-dashboard/patient-dashboard.component";
import {AdminDashboardComponent} from "./dashboards/admin-dashboard/admin-dashboard.component";
import {HospitalDashboardComponent} from "./dashboards/hospital-dashboard/hospital-dashboard.component";
import {ViewEditWalkInComponent} from "./hospital-controls/view-edit-walk-in/view-edit-walk-in.component";
import {MateraQrCodeComponent} from "./matera-qr-code/matera-qr-code.component";


export const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: 'select-hospital', component: SelectHospitalComponent},
  { path: 'list-symptoms', component: ListSymptomsComponent },
  { path: 'select-date-time', component: SelectDateTimeComponent },
  { path: 'choose-specialization', component: ChooseSpecializationComponent },
  { path: 'select-doctor', component: SelectDoctorComponent },
  { path: 'confirm-appointment', component: AppointmentConfirmComponent },
  { path: 'add-hospital', component: AddHospitalComponent },
  { path: 'add-doctor', component: CreateDoctorComponent },
  { path: 'assign-doctor', component: AssignDoctorComponent },
  { path: 'patient-dashboard', component: PatientDashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'hospital-dashboard', component: HospitalDashboardComponent },
  { path: 'view-edit-walk-in-appointment', component: ViewEditWalkInComponent },

  { path: 'app-matera-qr-code', component: MateraQrCodeComponent },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
  // {
  //   path: 'book-appointment', component: BookAppointmentComponent
  // },
  // {path: 'view-details', component: ViewDetailsComponent}, {
  //   path: 'add-availability', component: AddAvailabilityComponent
  // }, {path: 'add-hospital', component: AddHospitalComponent},
  // {path: 'add-doctor', component: AddDoctorComponent}
];
