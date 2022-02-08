import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpEventType, HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../App-services/AuthService/auth.service';
import { EnvService } from '../App-services/Common/envoirment.service';
import { UserService } from '../App-services/UserService/user.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public message!: string;
  @Output() public onUploadFinished = new EventEmitter();
  public response!: { dbPath: ''; };
  @Input() public moduleType: number | undefined;
 

  userId: any;
  filename: any;
  moduleName!: string;
  


  constructor(private http: HttpClient, private userService: UserService, private authService: AuthService,
    private envService: EnvService, private route: ActivatedRoute,) {
  }
  ngOnInit() {

  }

  uploadFile(files:any) {
    if (files.length === 0) {
      return;
    }
    if (this.moduleType == 1) {
      this.moduleName = "JoinUsDocs";
    }
    else
      if (this.moduleType == 2) {
        this.moduleName = "EmpProfilePic"
      }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    let url = this.envService.apiUrl + 'fileUpload/save?moduleName=' + this.moduleName;
    this.http.post(url, formData, { reportProgress: true, observe: 'events' }).subscribe(
      event => {
        if (event.type === HttpEventType.Response) {
          this.onUploadFinished.emit(event);
          this.message = 'Upload success.';
        
        }
        else {
          this.message = 'Process...';
        }
      });
  }

  uploadFinished(event: { dbPath: ""; }) {
    this.response = event;
  }

}
