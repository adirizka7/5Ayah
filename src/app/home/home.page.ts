import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    audio: any;
    Surah = [['An-Naba', true], ['An-Naziat', true], ['Abasa', true]];
    SurahDetail = [
        {}
    ];

    play(surahName: string) {
        let resolved: any;
        console.log(this.audio, surahName);
        if (this.audio) {
            let surahNameNow = this.audio.src.split('/');
            surahNameNow = surahNameNow[surahNameNow.length - 1];
            if ( surahNameNow !== surahName ) {
                this.audio.pause();
                this.audio = null;

                this.audio = new Audio();
                this.audio.src = '../../mp3/' + surahName;
                this.audio.load();
            }
            this.audio.play();
            this.audio.loop = true;
        } else {
            this.audio = new Audio();
            this.audio.src = '../../mp3/' + surahName + '#t=10,15';
            this.audio.load();
            resolved = this.audio.play();
            this.audio.loop = true;
        }
        return false;
    }

    pause() {
        console.log('Pause');
        this.audio.pause();
    }

    stop() {
        console.log('Stop');
        this.audio.pause();
        this.audio = null;
    }
}
