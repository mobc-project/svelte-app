import { writable } from "svelte/store"

// interface ParamsDlg
export interface IParamsDlg {
    checkauth: boolean
    title: string
    hasHeader: boolean
    hasFooter: boolean

}

// set defaults
let datas: IParamsDlg = {
    checkauth: false,
    title: "Page",
    hasHeader: true,
    hasFooter: true,
}

let userData = {
    auth: false,
    name: "",
    rolle: "",
}

// 
export const paramsDlg = writable(datas)

//
export const user = writable(userData)