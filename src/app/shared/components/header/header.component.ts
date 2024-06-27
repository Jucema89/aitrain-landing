import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive  } from '@angular/router';
import { LogoAitrainComponent } from "../logo-aitrain/logo-aitrain.component";

interface RouteHeader {
  id: number
  title: string
  url: string
  subroutes: RouteHeader[]
}
@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [
        RouterLinkActive,
        RouterLink,
        NgClass,
        LogoAitrainComponent
    ]
})
export class HeaderComponent {
  constructor(private router: Router){}
}
