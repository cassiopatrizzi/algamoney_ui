import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
        <span *ngIf="temErro()" class="p-message p-message-error">
        {{ text }}
      </span>
`,
  styles: []
})

export class MessageComponent {

  @Input() error: string | undefined;
  @Input() control: FormControl | any;
  @Input() text: string | undefined;

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }

}
