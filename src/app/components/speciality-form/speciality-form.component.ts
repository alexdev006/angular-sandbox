import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

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
      references: this.fb.array([this.fb.control('')]), //entre crochet ici

      emploiRh: this.fb.group({
        emploi: '',
        codeEmploi: '',
      }),
    });
  }

  onSubmit(): void {
    console.log('le form ici', this.specialityForm);
  }

  get references() {
    return this.specialityForm.get('references') as FormArray;
  }
}
