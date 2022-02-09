import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  allVideos?: Video[];
  currentId?: string;

  constructor(
    private firestore: AngularFirestore,
    public opService: OperationService
  ) { }

  ngOnInit(): void {
    this.resetForm();
    this.getAllVideos();
  }

  resetForm(form?: NgFormm) {
    if (form != null) form.resetForm();
    this.opService.formData = {
      id: '',
      author: '',
      link: '',
      thumb: '',
      title: '',
    };
  }

}
