import { HttpClient } from '@angular/common/http';
import {Component} from '@angular/core';


@Component({
  selector: 'table-sticky-columns-example',
  styleUrls: ['table-sticky-columns-example.css'],
  templateUrl: 'table-sticky-columns-example.html',
})
export class TableStickyColumnsExample {
  users: Array<User> = [];
  displayedColumns =
      ['id', 'first_name', 'last_name', 'email', 'star'];
  constructor(private http: HttpClient) {
    this.http.get('https://reqres.in/api/users').subscribe((res: any) => {
      this.users = res.data as Array<User>;
    });
  }
}

export interface User {
  id: string;
  first_name: string;
  last_name: number;
  email: string;
}

