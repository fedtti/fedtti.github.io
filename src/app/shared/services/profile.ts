import {
  Injectable,
  signal,
  type WritableSignal,
  type Signal
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profile: WritableSignal<any> = signal({
    name: 'Federico Moretti',
    role: 'Software Developer',
  });

  public getProfile(): Signal<any> {
    return this.profile.asReadonly();
  }
}
