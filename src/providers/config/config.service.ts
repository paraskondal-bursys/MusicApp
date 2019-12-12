import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class ConfigService {

  public readonly platform: any                           = "android";

  public readonly APP_VERSION: any                        = "@appversion";

   /**
      *  dev/prod
      */     
     public readonly ENVIRONMENT:string                   = "prod";     
     //  public readonly ENVIRONMENT:string               = "dev";
       
     /**
      * Base URL for Production environment
      */
     public  readonly BASEURL_PROTOCOL                    = "http"; 
     public  readonly BASEURL                             = "localhost:8080";     
     // public  readonly BASEURL                          = "http://localhost:8080/";
            
     /**
      * Apis
      */
      public readonly SERVICES={
        AUTH                               :   "api/authenticate",       
        USER                               :   "api/account",
        MUSIC_DATA                         :   "api/appData",
        SONG_DATA                          :   "api/songData"  
     }
 
  
    public getServiceUrl(serviceType: string): Observable<string> {   
      return Observable.create(observer => {   
        
        if (this.SERVICES[serviceType]) {
            observer.next(this.getBaseUrl() + this.SERVICES[serviceType]); 
          } else {
            throw new Error("Service URL not found");
          }
      });   
    }

    public getBaseUrl(): string {
      if (this.ENVIRONMENT === 'dev') {
        return "";
      } else {
        return this.BASEURL_PROTOCOL+"://"+this.BASEURL+"/";
      }

    }

    public isDevEnvironment(): boolean {   
      return this.ENVIRONMENT === 'dev';    
    }

}
