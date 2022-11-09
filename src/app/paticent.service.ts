import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaticentService {
   url='http://localhost:3000/patient';
  constructor(private http:HttpClient) { }
  getAllPatient(){
    this.http.get(this.url)
  } 
  savePaticentData(data){
    console.log(data);
    return this.http.post(this.url,data);
  }
}
