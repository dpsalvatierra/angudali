import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-prompt',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
<form [formGroup]="form" (ngSubmit)="onSubmit()" class="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">    
    <div class="flex w-full items-center" style="background-color: rgb(31 41 55);">
        <div class="overflow-hidden [&amp;:has(textarea:focus)]:border-token-border-xheavy [&amp;:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)] flex flex-col w-full flex-grow relative border dark:text-white rounded-2xl bg-token-main-surface-primary border-token-border-medium">
            <textarea 
            [formControl]="form.controls.prompt"
            (keyup.enter)="onSubmit()"
            id="prompt-textarea" tabindex="0" data-id="root" rows="1" placeholder="Message ChatGPT…" class="m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0 dark:bg-transparent py-[10px] pr-10 md:py-3.5 md:pr-12 max-h-\[25dvh] max-h-52 placeholder-black/50 dark:placeholder-white/50 pl-10 md:pl-[55px]" style="height: 52px; overflow-y: hidden;"></textarea>
            <div class="absolute bottom-2 md:bottom-3 left-2 md:left-4">
                <div class="flex">
                    <button class="btn relative p-0 text-black dark:text-white" aria-label="Attach files">
                        <div class="flex w-full gap-2 items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 7C9 4.23858 11.2386 2 14 2C16.7614 2 19 4.23858 19 7V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V7C17 5.34315 15.6569 4 14 4C12.3431 4 11 5.34315 11 7V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9V15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15V7Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </button>
                    <input multiple="" type="file" tabindex="-1" class="hidden" style="display: none;">
                </div>
            </div>
            <button class="absolute bottom-1.5 right-2 rounded-lg border border-black bg-black p-0.5 text-white transition-colors enabled:text-gray-400 dark:border-white dark:bg-white dark:hover:bg-white md:bottom-3 md:right-3" data-testid="send-button" type="submit">
                <span class="" data-state="closed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-white dark:text-black">
                    <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">                        
                    </path>
                    </svg>
                </span>
            </button>
        </div>
    </div>
</form>  
  `,
  styles: ``
})
export class PromptComponent {
    @Output() public readonly prompted = new EventEmitter<string>();

    public readonly form = new FormGroup({
        prompt: new FormControl<string | null>(null, Validators.required),
    });

    public onSubmit(): void {
        if (this.form.valid && this.form.value.prompt) {
            this.prompted.emit(this.form.value.prompt);
            this.form.reset();
        }
    }

}
