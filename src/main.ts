import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { EnvironmentConfig, initAppConfig } from './app/app.config';

// MAUVAISE PRATIQUE : Import de bibliothèques lourdes inutiles
import { heavyLibraries, useHeavyLibraries } from './app/shared/utils/heavy-libraries';

// Appel pour s'assurer que les bibliothèques sont chargées
useHeavyLibraries();

fetch('assets/config/app-config.json')
  .then((res) => res.json() as Promise<EnvironmentConfig>)
  .then((config) =>
    bootstrapApplication(AppComponent, initAppConfig(config)).catch((err) =>
      console.error(err)
    )
  );
