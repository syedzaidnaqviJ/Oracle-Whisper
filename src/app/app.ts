import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // This should match <app-root></app-root> in index.html
  templateUrl: './app.component.html', // links your UI
  styleUrls: ['./app.component.css']   // links your styles
})
export class AppComponent {
  title = 'Oracle Whisper';
  question = '';
  answer = '';

  askOracle() {
    // Simulated detection logic
    if (this.question.toLowerCase().includes('who is sitting beside me')) {
      this.answer = 'The Oracle whispers: Syed Zaid Naqvi is sitting beside you.';
    } else {
      this.answer = 'The Oracle is silent. Try another question.';
    }
  }
}
