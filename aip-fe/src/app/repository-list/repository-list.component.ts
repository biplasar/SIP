import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from '../repository.service';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent {

  repositories: any = [];

  constructor(private repositoryService: RepositoryService,
    private router: Router) {
    this.getRepositories();
  }

  /* ngOnInit(): void {

  } */

  private getRepositories() {
    this.repositoryService.getRepositoryList().subscribe(data => {
      console.log(data);
      // for v2
      //this.repositories = data.list;

      // for v1
      this.repositories = data;
    });
  }

  public getScanReport(uid: String) {
    this.repositoryService.getScanReport(uid).subscribe(data => {
      let blob:any = new Blob([data], {type: 'application/pdf'});
      const url = window.URL.createObjectURL(blob);
      saveAs(blob, 'scanreport.pdf');
      console.log(data);
    }), (error:any) => console.log("Error Downloading Report"),
    () => console.info("Report Downloaded Successfully");
  }

  /*public getScanReport(uid: String) {
    this.repositoryService.getScanReport(uid).subscribe(data => {
      console.log(data);
    })
  }*/


  public scanRepository(uid: string){
    this.repositoryService.scanRepository(uid).subscribe(data => {
      console.log(data);
    });
  }
}
