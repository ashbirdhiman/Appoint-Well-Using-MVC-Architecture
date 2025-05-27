import { Component, OnInit } from '@angular/core';
import { AppointmentService } from "../Service/appointment.service";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-select-date-time',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgClass
  ],
  templateUrl: './select-date-time.component.html',
  styleUrls: ['./select-date-time.component.css']
})
export class SelectDateTimeComponent implements OnInit {
  date: string = '';
  time: string = '';
  selectedDate: Date | null = null;

  month: number = new Date().getMonth(); // Current month
  year: number = new Date().getFullYear(); // Current year
  days: number[][] = [];

  monthNames: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  availableTimes: string[] = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ]; // Example times

  availableDates: Set<number> = new Set([1, 2, 3, 5, 7, 8, 10, 12, 13, 14, 16, 18, 19, 21, 22, 24, 25, 26, 28, 30]); // Example available dates

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit() {
    this.generateCalendar(this.month, this.year);
  }

  // Function to generate the calendar for the current month
  generateCalendar(month: number, year: number) {
    this.days = [];
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    let startDay = firstDayOfMonth.getDay();
    if (startDay === 0) startDay = 7; // Treat Sunday as the last day of the week

    let dayCount = 1;
    for (let i = 0; i < 6; i++) {
      const week: number[] = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startDay - 1) {
          week.push(0); // Empty space for days before the 1st day of the month
        } else if (dayCount <= daysInMonth) {
          week.push(dayCount++);
        } else {
          week.push(0); // Empty space for days after the last day of the month
        }
      }
      this.days.push(week);
    }
  }

  // Check if the current day is available (not 0 and in the availableDates set)
  isAvailable(date: number): boolean {
    return date !== 0 && this.availableDates.has(date);
  }

  // Check if the current day is the selected day
  isSelected(date: number): boolean {
    if (this.selectedDate === null) {
      return false;
    }
    return this.selectedDate.getDate() === date;
  }

  // Select a date when clicked
  selectDate(date: number) {
    if (date === 0 || !this.isAvailable(date)) return; // Don't select empty or unavailable days
    this.selectedDate = new Date(this.year, this.month, date);
    this.date = this.selectedDate.toISOString().split('T')[0]; // Set the date in ISO format (YYYY-MM-DD)
  }

  // Function to handle selecting a time
  selectTime(time: string) {
    this.time = time;
  }

  // Proceed to the next step (e.g., show time picker)
  nextStep() {
    if (!this.date || !this.time) {
      alert('Please select both date and time.');
      return;
    }
    this.appointmentService.setDateTime(this.date, this.time);
    this.router.navigate(['/confirm-appointment']);
    console.log(`Selected Date: ${this.date}, Selected Time: ${this.time}`);
  }

  // Navigate to the previous month
  previousMonth() {
    if (this.month === 0) {
      this.month = 11;
      this.year--;
    } else {
      this.month--;
    }
    this.generateCalendar(this.month, this.year); // Regenerate the calendar with the new month and year
  }

  // Navigate to the next month
  nextMonth() {
    if (this.month === 11) {
      this.month = 0;
      this.year++;
    } else {
      this.month++;
    }
    this.generateCalendar(this.month, this.year); // Regenerate the calendar with the new month and year
  }
}
