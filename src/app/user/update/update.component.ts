import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  // userForm: FormGroup;
  // userId: number;
  // constructor(
  //   private route: ActivatedRoute,
  //   private fb: FormBuilder,
  //   private userService: UserService
  // ) {
  //   this.userForm = this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]]
  //   });
  //  }

  //  ngOnInit(): void {
  //   this.userId = +this.route.snapshot.paramMap.get('id');
  //   this.userService.getUserById(this.userId).subscribe(user => {
  //     this.userForm.patchValue(user);
  //   });
  // }

  // onSubmit(): void {
  //   if (this.userForm.valid) {
  //     const updatedUser = { ...this.userForm.value, id: this.userId };
  //     this.userService.updateUser(updatedUser).subscribe();
  //   }
  // }

}
