import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, Event, RouterOutlet, NavigationEnd } from '@angular/router';
import { IStaticMethods } from 'preline/preline';
import { HeroHomeComponent } from "./shared/components/hero-home/hero-home.component";
import { FeaturesHomeComponent } from "./shared/components/features-home/features-home.component";
import { StepsUseComponent } from "./shared/components/steps-use/steps-use.component";
import { NextFeatureComponent } from "./shared/components/next-feature/next-feature.component";
import { StackTechComponent } from "./shared/components/stack-tech/stack-tech.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { SnackbarComponent } from "./services/notification/snackbar/snackbar.component";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeroHomeComponent, FeaturesHomeComponent, StepsUseComponent, NextFeatureComponent, StackTechComponent, FooterComponent, HeaderComponent, SnackbarComponent]
})
export class AppComponent implements OnInit {

  public title = 'aitrain-landing'

  constructor( 
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object 
  ){}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)){
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          setTimeout(() => {
            window.HSStaticMethods.autoInit()
          }, 100)
        }
      });
    }
   
  }
}
