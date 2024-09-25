import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  log(message: string) {
    const ts = new Date().toLocaleTimeString();
    console.log(`[${ts}]: ${message}`);    
  }
}
