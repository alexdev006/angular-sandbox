import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-speciality-form',
  templateUrl: './speciality-form.component.html',
  styleUrls: ['./speciality-form.component.scss'],
})
export class SpecialityFormComponent implements OnInit {
  locations: string[] = ['Marseille', 'Aix', 'Aubagne'];
  specialityForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.specialityForm = this.fb.group({
      name: '',
      phoneNumber: '',
      preferredLocation: '',
      animals: this.fb.group({
        dogs: false,
        cats: false,
        reptiles: false,
      }),

      emploiRh: this.fb.group({
        emploi: '',
        codeEmploi: '',
      }),
    });
  }
}
