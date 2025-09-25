// google-maps-loader.service.ts
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsLoaderService {
  private isLoaded = false;
  private loadingPromise: Promise<void> | null = null;

  loadGoogleMaps(): Promise<void> {
    if (this.isLoaded) {
      return Promise.resolve();
    }

    if (this.loadingPromise) {
      return this.loadingPromise;
    }

    this.loadingPromise = new Promise((resolve, reject) => {
      // Verificar se já existe
      if (window.google && window.google.maps) {
        this.isLoaded = true;
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsKey}&libraries=places&callback=initGoogleMaps`;
      script.async = true;
      script.defer = true;

      // Criar callback global
      (window as any).initGoogleMaps = () => {
        this.isLoaded = true;
        resolve();
        // Limpar o callback
        delete (window as any).initGoogleMaps;
      };

      script.onerror = (error) => {
        reject(error);
      };

      document.head.appendChild(script);
    });

    return this.loadingPromise;
  }

  isGoogleMapsLoaded(): boolean {
    return this.isLoaded;
  }
}
