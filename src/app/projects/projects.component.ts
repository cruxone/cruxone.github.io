import { Component, OnInit } from '@angular/core';
import { RepoFetchService } from '../repo-fetch.service';
@Component({
  providers: [RepoFetchService],
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  repos = []
  constructor(private reposService: RepoFetchService) { }
  ngOnInit() {
    this.reposService.getRepos()
      .subscribe(resRepoData => this.repos = resRepoData)
  }
}
