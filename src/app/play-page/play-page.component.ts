import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
    selector: 'app-play-page',
    templateUrl: './play-page.component.html',
    styleUrls: ['./play-page.component.css']
})
export class PlayPageComponent implements OnInit {

    isDisabled = false;
    formFilled = true;
    song: any;

    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {
        this.song = {
            url: this.transform('https://open.spotify.com/embed/track/2zYzyRzz6pRmhPzyfMEC8s'),
            title: 'Highway to hell',
            artist: 'Acdc',
        };
    }

    newSong(): void {
        this.song = {
            url: this.transform('https://open.spotify.com/embed/track/5muJuGZ6vKefxbVHc3y8y8'),
            title: 'Kinesiska muren',
            artist: 'Evert Taube',
        };
        this.isDisabled = false;
    }

    correctAnswer(event: any): void {
        console.log(event);
        this.isDisabled = true;
    }

    wrongAnswer(event: any): void {
        console.log(event);
        this.isDisabled = true;
    }

    transform(url: any): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
