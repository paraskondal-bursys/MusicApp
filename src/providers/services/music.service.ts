import { Injectable, Injector } from '@angular/core';
import { Observable } from "rxjs";
import { HTTP } from '@ionic-native/http/ngx';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MusicDataService {
    saveWorkOrderObject: any;
    updateWorkOrderObject: any;

    constructor(
        private configService: ConfigService,
        private http: HttpClient
    ) {
    }

    public getMusicData() {
        let headers:any = new Headers();
        headers.append("Content-type", "application/json");
        console.log("getMusicData called");
        return Observable.create(observer => {
            this.configService.getServiceUrl("MUSIC_DATA").subscribe(url => {
                this.http.get(url)
                    .subscribe(response => {
                        observer.next(response);
                        console.log("response");
                        observer.complete();
                    }, error => {
                        observer.error(error);
                        console.log("error", error);
                        observer.complete();
                    });
            })
        });

    }

    // public getSongsData(songNumber) {
    //     console.log("getSongsData called");
    //     return Observable.create(observer => {
    //         this.configService.getServiceUrl("SONG_DATA").subscribe(url => {
    //             this.http.get(url + "/" + songNumber,{},{})
    //                 .then(response => {
    //                     observer.next(response);
    //                     console.log("response");
    //                     observer.complete();
    //                 }, error => {
    //                     observer.error(error);
    //                     console.log("error", error);
    //                     observer.complete();
    //                 });
    //         })
    //     });
    // }

}
