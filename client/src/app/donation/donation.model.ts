/**
 * Donation object.
 */

import DateTimeFormat = Intl.DateTimeFormat;
import {Address} from '../profile/address.model';
import {Profile} from '../profile/profile.model';


export class Donation {

  id: number;
  url: string;
  createdOn: DateTimeFormat;
  applicant: Profile;
  bloodType: string;
  deadline: DateTimeFormat;
  description: string;
  city: string;
  phoneNumber: string;
  status: string;

  constructor(  id: number,
                url: string,
                createdOn: DateTimeFormat,
                applicant: Profile,
                bloodType: string,
                deadline: DateTimeFormat,
                description: string,
                city: string,
                phoneNumber: string,
                status: string) {
    this.id = id;
    this.url = url;
    this.createdOn = createdOn;
    this.applicant = applicant;
    this.bloodType = bloodType;
    this.deadline = deadline;
    this.description = description;
    this.city = city;
    this.phoneNumber = phoneNumber;
    this.status = status;
  }


}
