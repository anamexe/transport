import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  dataList: any[] = []; 
  title = 'transport';
  constructor(private dataService: DataService) {}
    // OnInit lifecycle hook to fetch data on component initialization
    ngOnInit(): void {
      this.dataService.getData().subscribe((data: any[]) => {
        this.dataList = data;  // Assign API data to the dataList array
      });
    }
}
