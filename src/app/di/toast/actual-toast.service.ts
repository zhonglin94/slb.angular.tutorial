import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ActualToastService {
  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  showToast(message: string): void {
    const toastContainer = this.document.getElementById('toast-container');
    if (!toastContainer) {
      console.error('Toast container element not found');
      return;
    }

    const toast = this.document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 100);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toastContainer.contains(toast)) {
          toastContainer.removeChild(toast);
        }
      }, 500);
    }, 3000);
  }
}
