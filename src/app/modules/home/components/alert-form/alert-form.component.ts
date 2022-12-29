import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-form',
  templateUrl: './alert-form.component.html',
  styleUrls: ['./alert-form.component.scss']
})
export class AlertFormComponent implements OnInit {
  @Input() isError: boolean = true;
  image: string = 'success-img.png';
  logo: string = 'success-logo.png';
  message: string = 'Formulario enviado exitosamente';

  constructor() { }

  ngOnInit(): void {
    this.validateError();
  }

  validateError() {
    if (this.isError) {
      this.image = 'error-img.png';
      this.logo = 'error-logo.png';
      this.message = 'Ocurrio un error con el formulario intente nuevamente';
    }
  }

}
