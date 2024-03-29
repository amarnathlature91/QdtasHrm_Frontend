import { Component } from '@angular/core';
import { UserService } from '../service/userServices';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router, private snackBar: MatSnackBar) {
  }

  isLoading: boolean = false;

 
userLogin(data: any) {
  this.isLoading = true;
  this.userService.login(data).subscribe(
    (response: any) => {
      localStorage.setItem("token", response.token);
      this.router.navigate(['/profile']);
      this.isLoading = false;
    }, (error: HttpErrorResponse) => {
      this.isLoading = false;
      if (error.status == 401) {
        this.showSnackBar("Invalid email or password. Please try again.");
      }
      else if (error.status == 400) {
        this.showSnackBar("Something went wrong with your request. Please try again later. Error: " + error.error.message);
      }
      else {
        this.showSnackBar("An unexpected error occurred. Please try again later. Error: " + error.error.message);
      }
    }
  )
}

showSnackBar(message: string) {
  this.snackBar.open(message, 'Close', {
    duration: 5000,
    verticalPosition: 'top' // 5 seconds
  });
}


}
