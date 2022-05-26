import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { AuthService } from 'src/app/services/auth.service'; 
import {ApiService} from '../../services/api.service' 
 
@Component({ 
  selector: 'app-perfil', 
  templateUrl: './perfil.component.html', 
  styleUrls: ['./perfil.component.scss'] 
}) 
export class PerfilComponent implements OnInit 
{ 
  items: any[] = new Array();
  f1?: File;
  f2?: File;
  listOfFiles: File[] = new Array();

  constructor
  ( 
    private _api : ApiService, 
    private _auth: AuthService, 
  ) { } 
 
  ngOnInit(): void 
  { 
    
  } 
 
  test_jwt()
  { 
    this._api.getTypeRequest('user').subscribe((res: any) => { 
      this.items = res;
    }); 
  } 

  loadFile1(files: any) 
  {
    this.f1 = files.item(0)!

    if(files.item(0))
    {
      const file = files.item(0);
      const reader = new FileReader();
      reader.readAsDataURL(file!);
    }
  }

  loadFile2(files: any) 
  {
    this.f2 = files.item(0)!

    if(files.item(0))
    {
      const file = files.item(0);
      const reader = new FileReader();
      reader.readAsDataURL(file!);
    }
  }

  uploadOneFile()
  { 
    this._api.postTypeRequest('files', JSON.stringify({"key": "value"})).subscribe({
      next: response => {
        alert(response)
      },
      error: error => {
        alert(error.error)
      }
    }); 
  } 

  uploadTwoFiles()
  {
    this._api.postTypeRequest('files2', JSON.stringify({"key": "value"})).subscribe({
      next: response => {
        alert(response)
      },
      error: error => {
        alert(error.error)
      }
    }); 

    /*
    this._api.postTypeRequest('files2', JSON.stringify({"key": "value"}), this.f1, this.f2).subscribe((response: any) => { 
      alert(response)
    }); 
    */
  }

}