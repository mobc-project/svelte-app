import { writable } from "svelte/store"

export interface IParamsDlg {
    hasHeader: boolean

}

/*
 = {
    hasHeader: true
} 
*/
let datas: IParamsDlg = {
    hasHeader: false
}

// Insert store variables here
export const paramsDlg = writable(datas)