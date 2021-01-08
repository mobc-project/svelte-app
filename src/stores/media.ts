//
import { readable } from 'svelte/store'

// our breakpoints (for width)
const mediaBreakPoint = {
    sm: 576,   //    0 ..  576 -> small
    md: 768,   //  577 ..  768 -> medium
    lg: 992,   //  769 ..  992 -> large 
    xl: 1200,  //  993 .. 1200 -> extra large
    sl: 9999,  // 1201 .. 9999 -> super large
}

// all current media properties data 
let mediaData = {
    sm: false,  // small 
    md: false,  // medium
    lg: false,  // large 
    xl: false,  // extra large
    sl: false,  // super large

    portrait: false,
    landscape: false,

    width: 0,  // current width
    height: 0, // current height
}

// set media propertise
function handleSize() {

    // set dimensions 
    mediaData.width = window.innerWidth
    mediaData.height = window.innerHeight

    // set orientation
    mediaData.landscape = window.orientation === (90 || -90)
    mediaData.portrait = !mediaData.landscape

    // set breakpoints
    mediaData.sm = (mediaData.width <= mediaBreakPoint.sm)
    mediaData.md = (mediaData.width >  mediaBreakPoint.sm) && (mediaData.width <= mediaBreakPoint.md)
    mediaData.lg = (mediaData.width >  mediaBreakPoint.md) && (mediaData.width <= mediaBreakPoint.lg)
    mediaData.xl = (mediaData.width >  mediaBreakPoint.lg) && (mediaData.width <= mediaBreakPoint.xl)
    mediaData.sl = (mediaData.width >  mediaBreakPoint.xl)

}

// init first
handleSize()

// export media
export const media = readable(mediaData, set => {

    function resizeHandler() {
        handleSize()
        set(mediaData)
    }
    
    // add eventlistener
    window.addEventListener("resize", resizeHandler)

    // remove eventlistener
	return function stop() {
        window.removeEventListener("resize", resizeHandler)
	}
})
