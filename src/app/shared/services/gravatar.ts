import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class GravatarService {
  public getGravatarUrl(email: string): string {
    try {
      if (!email) {
        throw new Error('⚠️ Email address is required.');
      }
      return `https://www.gravatar.com/avatar/${CryptoJS.SHA256(email)}`;
    } catch (error) {
      throw new Error(`❌ ${(error as Error).message}.`);
    }
  }
}
