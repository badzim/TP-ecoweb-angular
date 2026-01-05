import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { EnvironmentConfig, initAppConfig } from './app/app.config';

import { heavyLibraries, useHeavyLibraries } from './app/shared/utils/heavy-libraries';

import './app/shared/utils/dom-manipulator';
import './app/shared/utils/heavy-animations';

useHeavyLibraries();

fetch('assets/config/app-config.json')
  .then((res) => res.json() as Promise<EnvironmentConfig>)
  .then((config) =>
    bootstrapApplication(AppComponent, initAppConfig(config)).catch((err) =>
      console.error(err)
    )
  );
