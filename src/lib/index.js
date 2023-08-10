import { browser } from "$app/environment";


export function getEmail(){
    if(browser) return localStorage.getItem('email');
}

