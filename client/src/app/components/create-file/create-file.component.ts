import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-create-file',
  templateUrl: './create-file.component.html',
  styleUrls: ['./create-file.component.scss']
})
export class CreateFileComponent implements OnInit {
  documentForm = new FormGroup({
    propertie1: new FormControl(''),
    propertie2: new FormControl(''),
    propertie3: new FormControl('')
   });
   
  constructor
  (
    private _apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  createFile()
  {
      this._apiService.postTypeRequest('document', this.documentForm.value).subscribe(
        response => alert(response)
      )
  }

}
