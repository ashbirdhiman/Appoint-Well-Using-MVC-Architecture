export class Doctor {
  id: number;
  name: string;
  specialization: string;
  hospitalId: number;

  constructor(id: number, name: string, specialization: string, hospitalId: number) {
    this.id = id;
    this.name = name;
    this.specialization = specialization;
    this.hospitalId = hospitalId;
  }
}
