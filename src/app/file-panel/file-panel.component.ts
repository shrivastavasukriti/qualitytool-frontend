import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { Observable } from "rxjs";
import { FileService } from "../services/file.service";
import { File } from "../model/file";

@Component({
  selector: 'app-file-panel',
  templateUrl: './file-panel.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .card.disabled {
      opacity: 0.5;
    }
  `]
})
export class FilePanelComponent implements OnInit {
  files = new File();

  constructor(private fileService:FileService){
     }

  ngOnInit() {
    this.reload();
  }
  reload(){
    console.log(" !! Do something  to reload page !! ");
  }
  getFilePath() {
    console.log(this.files.designReviewFilePath);
    this.fileService.getFilePath(this.files)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
  }
  onSubmit() {
    this.getFilePath();
  }
}
