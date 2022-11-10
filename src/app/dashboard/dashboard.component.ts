import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit 
{
  Designation: string = "";
  Username: string = "";
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;
  
  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];


  constructor(
   
  ) { 
   
  }


  ngOnInit(): void {
    this.Designation = 'Team Leader';
    this.Username = 'Scott Smith';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;

    this.Clients = [
      "PT. Sumatera Sarana", "Frontend", "Kota Medan"
    ];

    this.Projects = [
      "Backend", "Frontend", "UI.UX Designer", "Analis"
    ];
    console.log(this.Projects)
    for (var i = 2019; i >= 2010; i--)
      {
        this.Years.push(i);
      }
      console.log(this.Years)

       this.TeamMembersSummary = [
      {
        Region: 'East',
        TeamMembersCount: 20,
        TemporarilyUnavailableMembers: 4,
      },
      {
        Region: 'West',
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 8,
      },
      {
        Region: 'South',
        TeamMembersCount: 17,
        TemporarilyUnavailableMembers: 1,
      },
      {
        Region: 'North',
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 6,
      },
    ];

    this.TeamMembers= [
      {
        Region: "East", Members: [
          {ID: 1, Name: "Ford", Status: "Available"},
          {ID: 2, Name: "Ford", Status: "Available1"},
          {ID: 3, Name: "Ford", Status: "Busy"},
          {ID: 4, Name: "Ford", Status: "Busy"}
        ]
      },
      {
        Region: "West", Members: [
          {ID: 5, Name: "Ford", Status: "Available"},
          {ID: 6, Name: "Ford", Status: "Available1"},
          {ID: 7, Name: "Ford", Status: "Busy"},
          {ID: 8, Name: "Ford", Status: "Busy"}
        ]
      },
      {
        Region: "South", Members: [
          {ID: 9, Name: "Ford", Status: "Available"},
          {ID: 10, Name: "Ford", Status: "Available1"},
          {ID: 11, Name: "Ford", Status: "Busy"},
          {ID: 12, Name: "Ford", Status: "Busy"}
        ]
      },
      {
        Region: "North", Members: [
          {ID: 13, Name: "Ford", Status: "Available"},
          {ID: 14, Name: "Ford", Status: "Available1"},
          {ID: 15, Name: "Ford", Status: "Busy"},
          {ID: 16, Name: "Ford", Status: "Busy"}
        ]
      }
    ]
  }
}