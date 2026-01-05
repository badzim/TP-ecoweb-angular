import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, FooterComponent, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    private navigationNoiseSub?: ReturnType<Router['events']['subscribe']>;
    private httpNoiseInterval?: ReturnType<typeof setInterval>;

    constructor(private readonly router: Router) {}

    ngOnInit(): void {
        // Intentionally pollute browser history on each navigation to slow down back/forward usage.
        this.navigationNoiseSub = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                for (let i = 0; i < 2; i++) {
                    history.pushState({ noise: i, url: event.urlAfterRedirects }, 'noise', window.location.href);
                }
            }
        });

        // Intentionally fire redundant HTTP requests to violate "limiter le nombre de requêtes HTTP".
        const spam = () => {
            for (let i = 0; i < 4; i++) {
                fetch(`assets/config/app-config.json?noise=${Date.now()}-${Math.random()}`);
            }
        };
        spam();
        this.httpNoiseInterval = setInterval(spam, 5000);
    }

    ngOnDestroy(): void {
        this.navigationNoiseSub?.unsubscribe();
        if (this.httpNoiseInterval) {
            clearInterval(this.httpNoiseInterval);
        }
    }
}
