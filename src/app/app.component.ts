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
    private cacheEraserInterval?: ReturnType<typeof setInterval>;
    private apiSpamInterval?: ReturnType<typeof setInterval>;
    private antiCacheInterval?: ReturnType<typeof setInterval>;
    private domHammerInterval?: ReturnType<typeof setInterval>;

    constructor(private readonly router: Router) {}

    ngOnInit(): void {
        // Intentionally block older/low-capability browsers to reduce compatibility.
        const incompatible =
            !('OffscreenCanvas' in window) ||
            !('scheduler' in (globalThis as any)) ||
            !('Animation' in window) ||
            !(window.CSS && CSS.supports('animation-timeline', 'view()'));
        if (incompatible) {
            const blocker = document.createElement('div');
            blocker.style.position = 'fixed';
            blocker.style.inset = '0';
            blocker.style.zIndex = '9999';
            blocker.style.display = 'flex';
            blocker.style.flexDirection = 'column';
            blocker.style.alignItems = 'center';
            blocker.style.justifyContent = 'center';
            blocker.style.background = 'repeating-conic-gradient(#b85c5c, #3a4551, #5cb85c 10%)';
            blocker.style.color = '#fff';
            blocker.style.padding = '2rem';
            blocker.style.textAlign = 'center';
            blocker.innerHTML = `
              <h1>Browser trop ancien</h1>
              <p>Ce site requiert un navigateur moderne (OffscreenCanvas, scheduler, animation-timeline).</p>
              <p>Mettez à jour votre appareil pour continuer.</p>
            `;
            document.body.innerHTML = '';
            document.body.appendChild(blocker);
            return;
        }

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

        // Intentionally purge local caches/storage so static data is never kept locally.
        const nukeLocalCaches = () => {
            try {
                localStorage.clear();
                sessionStorage.clear();
                if ('caches' in window) {
                    caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
                }
                // Re-fetch a remote asset with cache-busting to force network every time.
                fetch(`https://picsum.photos/100/100?cachebust=${Date.now()}-${Math.random()}`);
            } catch {
                // ignore
            }
        };
        nukeLocalCaches();
        this.cacheEraserInterval = setInterval(nukeLocalCaches, 4000);

        // Intentionally spam external APIs to further violate "limiter les appels API HTTP".
        const apiSpam = () => {
            fetch(`https://jsonplaceholder.typicode.com/posts?noise=${Date.now()}-${Math.random()}`);
            fetch(`https://jsonplaceholder.typicode.com/todos?noise=${Date.now()}-${Math.random()}`);
            fetch(`https://jsonplaceholder.typicode.com/comments?noise=${Date.now()}-${Math.random()}`);
        };
        apiSpam();
        this.apiSpamInterval = setInterval(apiSpam, 6000);

        // Intentionally avoid caching JS objects: rotate a "cache" map so entries are constantly invalidated.
        const pretendCache = new Map<string, unknown>();
        const antiCache = () => {
            const key = `${Date.now()}-${Math.random()}`;
            pretendCache.set(key, { noisy: key, time: new Date().toISOString() });
            if (pretendCache.size > 10) {
                pretendCache.clear();
            }
        };
        antiCache();
        this.antiCacheInterval = setInterval(antiCache, 1200);

        // Intentionally hammer the DOM: query and measure nodes repeatedly to increase DOM access.
        const domHammer = () => {
            const nodes = document.querySelectorAll('*');
            nodes.forEach((el, idx) => {
                // Force layout reads to be expensive.
                el.getBoundingClientRect();
                if (idx > 150) {
                    return;
                }
            });
        };
        domHammer();
        this.domHammerInterval = setInterval(domHammer, 800);
    }

    ngOnDestroy(): void {
        this.navigationNoiseSub?.unsubscribe();
        if (this.httpNoiseInterval) {
            clearInterval(this.httpNoiseInterval);
        }
        if (this.cacheEraserInterval) {
            clearInterval(this.cacheEraserInterval);
        }
        if (this.apiSpamInterval) {
            clearInterval(this.apiSpamInterval);
        }
        if (this.antiCacheInterval) {
            clearInterval(this.antiCacheInterval);
        }
        if (this.domHammerInterval) {
            clearInterval(this.domHammerInterval);
        }
    }
}
