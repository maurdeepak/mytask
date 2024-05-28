import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  storeData: any = [];
  constructor(private service: UserService, private router: Router) {}
  ngOnInit(): void {
    this.getDataUser();
  }

  getDataUser() {
    this.service.getUsers().subscribe((data: any) => {
      this.storeData = data;
      console.log(this.storeData);
    });
  }
  onEdit(userId:number){
    this.router.navigate(['edit', userId]);
    
  }

  deletedata(id: number) {
    this.service.deleteUser(id).subscribe(() => {
      console.log('data deleted ' + id);
    });

    this.storeData = this.storeData.filter((item:any) => item.id !== id);
  }
}
