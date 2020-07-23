import { Injectable } from '@angular/core';
import { Shared } from './shared';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    
    language = Shared.translations["EN"];

    onChangeLang(code: string) {
        let lang = code === "RU" ? "RU" : "EN";
        this.language = Shared.translations[lang];
        // console.log(this.language);
        return Shared.translations[lang];
    }

} 