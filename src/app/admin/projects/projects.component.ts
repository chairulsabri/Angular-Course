import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  Projects: Project[] = [];
  
  constructor(private projectsService: ProjectsService) 
  { }

  ngOnInit(): void {
    this.projectsService.getAllProjects().subscribe(
      (response: Project[]) => {
        this.Projects = response;
      }
    );
  }

}
