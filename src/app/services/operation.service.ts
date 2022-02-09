import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private firestore: AngularFirestore, private globalService: GlobalService) { }

  addVideo = (data: object) => {
    this.firestore.collection(this.globalService.fbCollectionName).add(data)
  }

  updateVideo = (id: string, data: object) => {
    this.firestore.doc(`${this.globalService.fbCollectionName}/${id}`).update(data)
  }

  getAllVideos = () => {
    return this.firestore.collection(this.globalService.fbCollectionName).snapshotChanges();
  };

  deleteVideo = (data: any) => {
    this.firestore.doc(`${this.globalService.fbCollectionName}/${data.id}`).delete();
  };

  getVideoById = (id: string) => {
    return this.firestore.collection(this.globalService.fbCollectionName).doc(id).get();
  };
}
