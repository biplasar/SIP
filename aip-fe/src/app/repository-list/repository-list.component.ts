import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from '../repository.service';
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
      this.repositories = data.list;
    });
  }

  /*repositoryDetails(uid: string){
    this.router.navigate(['repository-details', uid]);
  }

  updateRepository(uid: string){
    this.router.navigate(['update-repository', uid]);
  }*/

  /*deleteRepository(uid: string){
    this.repositoryService.deleteRepository(uid).subscribe( data => {
      console.log(data);
      this.getRepositories();
    })
  }*/
}
