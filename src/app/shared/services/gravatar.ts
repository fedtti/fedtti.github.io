import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GravatarService {
  public async getGravatarUrl(email: string): Promise<string> {
    try {
      if (!email) throw new Error('Email address is required.');

      const message = new TextEncoder().encode(email);
      const buffer = await window.crypto.subtle.digest('SHA-256', message);
      const hex = Array.from(new Uint8Array(buffer), byte => byte.toString(16).padStart(2, '0')).join('');

      return `https://www.gravatar.com/avatar/${hex}`;
    } catch (error) {
      throw new Error(`❌ ${(error as Error).message}.`);
    }
  }
}
