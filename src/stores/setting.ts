import { readable } from 'svelte/store'

//
export let setting: any

//
export interface Isetting {
    name: string
    version: string 
    language: string
    created: string
    changed: string
    is_pwa?: boolean
    is_dev?: boolean
    serviceworker?: string
    is_fixed?: boolean
    fixed_w?: number
    fixed_h?: number

    layout?: {
        theme?: string
        header?: number
        header_title?: string
        header_color?: string
        footer?: number
        footer_title?: string
        footer_color?: string
        
    }
    
    // fixed Size : max_width / max_height (if PWA)
    // Orientation:  portrait / landscape / all
    
}

//
export function createSettings(params: Isetting) {
    setting = readable(null, set => {
        set(params)
    })
    return setting
}