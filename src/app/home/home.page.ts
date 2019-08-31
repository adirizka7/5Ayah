import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    onSuccess: any;
    onError: any;
    showToggle = true;

    constructor(private nativeAudio: NativeAudio) { }

    play(mp3: string) {
        this.nativeAudio.preloadSimple('track1', './mp3/' + mp3).
            then(()=>{console.log('Playing')});
        this.nativeAudio.play('track1');
    }

    stop() {
        this.nativeAudio.stop('track1').
            then(()=>{console.log('Stopped')});
    }


    showToggleFun() {
        if (this.showToggle === true) {
            this.showToggle = false;
        } else {
            this.showToggle = true;
        }
    }
}
