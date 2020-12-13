import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User.model';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

    userForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    initForm()
    {
        this.userForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            drinkPreference: ['', Validators.required],
            hobbies: this.formBuilder.array([])
        });
    }

    onSubmitForm()
    {
        const formValue = this.userForm.value;

        const newUser = new User(
            formValue['firstName'],
            formValue['lastName'],
            formValue['email'],
            formValue['drinkPreference'],
            formValue['hobbies'] ? formValue['hobbies'] : []
        );

        this.userService.addUser(newUser);
        this.router.navigate(['/users']);
    }

    /**
     * permettant ainsi à l'utilisateur d'en ajouter autant qu'il veut.
     */
    getHobbies(): FormArray 
    {
        return this.userForm.get('hobbies') as FormArray;
    }

    /**
     * Cette méthode crée un  control  avec la méthode  FormBuilder.control() , 
     * et l'ajoute au  FormArray  rendu disponible par la méthode  getHobbies()
     */
    onAddHobby()
    {
        const newHobbyControl = this.formBuilder.control(null, Validators.required);
        this.getHobbies().push(newHobbyControl);
    }
}
