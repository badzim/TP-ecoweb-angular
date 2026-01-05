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
    }

    ngOnDestroy(): void {
        this.navigationNoiseSub?.unsubscribe();
    }
}
