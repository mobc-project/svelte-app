// media mainMenu + mainRoute
import { media } from './stores/media'
import { main as mainRoute } from './routes'
import { main as mainMenu } from './menus'

// interface settings
export interface ISetting {
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
        theme?: "dark" | "light"
        header?: number
        header_title?: string
        header_color?: string
        footer?: number
        footer_title?: string
        footer_color?: string
        
    },

    // fixed Size : max_width / max_height (if PWA)
    // Orientation:  portrait / landscape / all
    
}

// APP-settings
export const settings: ISetting = {
	name: "PWA APP",
	version: "1.0.0",
    language: "de",
    created: "01.01.2021",
    changed: "01.01.2021",
    
    is_dev: true, // is in develpment mode


	is_pwa: true,
	serviceworker: "/service-worker.js",
	

	layout: {
        //theme: "light", // light or dark (default)
        header: 56, // height in pixel 56
        header_title: "KoloA - ",
        header_color: "indigo lighten-1",
        footer: 40, // height in pixel 40
        footer_title: "© 2021 - <b>mobC</b> PWA Materialify APP",
        //footer_color: "indigo theme--light", // default = header_color
    },
    
    
	is_fixed: false,
    fixed_w: 360,
	fixed_h: 640,
	
	// framework
	// project

}

// exports
export { media}
export { mainRoute }
export { mainMenu }


