import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentsResponse, CopmponentsRequest } from '../../interfaces/components';
import {Firestore, CollectionReference, addDoc, collectionData} from "@angular/fire/firestore";
import {DocumentData, collection} from "@firebase/firestore"



@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  private commentsArr: Array<ComponentsResponse> = [];



  private url: any = 'https://busy-stitch-archer.glitch.me';
  private api = { comment: `${this.url}/comments` };
  private categoryCollection!: CollectionReference<DocumentData>



  constructor(
    private http: HttpClient,
    private afs: Firestore,
    ) {
    this.categoryCollection = collection(this.afs, 'categories')
  }

  getAll(): Observable<ComponentsResponse[]> {
    return this.http.get<ComponentsResponse[]>(this.api.comment);
  };

  getAllByComponent(name: string): Observable<ComponentsResponse[]> {
    return this.http.get<ComponentsResponse[]>(`${this.api.comment}?comments.link=${name}`);
  }

  addAction(comment: CopmponentsRequest): Observable<ComponentsResponse> {
    return this.http.post<ComponentsResponse>(this.api.comment, comment);

  };


  editAction(comment: CopmponentsRequest, id: number): Observable<ComponentsResponse> {
    return this.http.patch<ComponentsResponse>(`${this.api.comment}/${id}`, comment);
  };

  delAction(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api.comment}/${id}`);
  };

//------------------------------

  getAllCategories() {
    return collectionData(this.categoryCollection, { idField: 'id' });
  };

  creatCategories(category: CopmponentsRequest) {
    return addDoc(this.categoryCollection, category)

  };


}
