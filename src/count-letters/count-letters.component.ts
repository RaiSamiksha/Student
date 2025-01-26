import { Component, ɵprovideZonelessChangeDetection } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-count-letters',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './count-letters.component.html',
  styleUrl: './count-letters.component.css'
})
export class CountLettersComponent {
 word = "";
 letter = "";
 count: any;

  ngOnInit(){

  }

  submit(){

    console.log("button clicked!!");
    console.log(this.word);
    console.log(this.letter);
    this.count = this.word.split(this.letter).length-1; 
    // this.word=this.count;
    console.log(this.count);

  }
}
