import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DonationService} from "../../shared/services/donation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../../shared/services/alert.service";
import {Donation} from "../../shared/models/donation.model";

@Component({
  selector: 'app-donation-update',
  templateUrl: './donation-update.component.html',
  styleUrls: ['./donation-update.component.scss']
})
export class DonationUpdateComponent implements OnInit {
  myForm: FormGroup;
  returnUrl: string;
  donationId: number;
  currentDonation: Donation;

  constructor(private fb: FormBuilder,
              private donationService: DonationService,
              private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService,

              ) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    this.donationId = this.route.snapshot.params['id'];
    this.donationService.getDonation(this.donationId).subscribe(
      data => {
      this.currentDonation = data;
      this.createForm();
      },
      err => {
        const alerts = this.alertService.jsonToHtmlList(err);
        this.alertService.error(alerts);
      }
    );

  }

  createForm() {
    this.myForm = this.fb.group({
      //deadline: [this.currentDonation.deadline , Validators.required],
      deadlineDay: [this.currentDonation.deadline , Validators.required],
      deadlineTime: [ this.currentDonation.deadline, Validators.required],
      description: [this.currentDonation.description, Validators.required],
      city: [this.currentDonation.city, Validators.required],
      phoneNumber: [this.currentDonation.phoneNumber, Validators.required],
      status: [this.currentDonation.status, Validators.required],
    });
  }

  onSubmit(passedForm: FormGroup) {
    if (passedForm.valid) {
      const deadline = new Date( new Date(passedForm.value.deadlineDay).toDateString() + ' ' +
                            new Date(passedForm.value.deadlineTime).toTimeString()).toISOString();
      this.donationService
        .updateDonation(this.donationId,
                        deadline,
                        passedForm.value.description,
                        passedForm.value.city,
                        passedForm.value.phoneNumber,
                        passedForm.value.status,
        ).subscribe(
            data => {
              //this.router.navigate([this.returnUrl]);
              this.alertService.success('You have successfully updated donations');
            },
            err => {
              const alerts = this.alertService.jsonToHtmlList(err);
              this.alertService.error(alerts);
            }
          );
    }

  }

  deleteDonation(event) {
    this.donationService.deleteDonation(this.donationId).subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
        this.alertService.success('You have successfully deleted donations');
      },
      err => {
        const alerts = this.alertService.jsonToHtmlList(err);
        this.alertService.error(alerts);
      }
    );

  }

}
