import { ref, computed }                from "vue";
import * as VX                          from "@/store/store";
import * as TS                          from "@/types/types"

export default function () {

    // .. foucsing on a Product
    const me = function ( product: TS.MyProducts ) {
        if ( VX.store.getters.slideState === TS.SlideState.stop ) {
            if ( VX.store.getters.focusedOn !== product ) console.log("diff");
            else console.log("same");
            VX.store.dispatch( VX.Acts.newFocus, product );
        }
        else console.log("wait");
    }

    // .. slide Control
    const slideAnimator = function (
        state: TS.SlideState, 
        product: TS.MyProducts, 
        slide: { value: HTMLElement }
    ) {

        if ( state === TS.SlideState.running ) {
            if ( product === VX.store.getters.focusedOn ) {
                slide.value.className = "slide slideUp";
                setTimeout( () => slide.value.style.zIndex = "3", 300 );
                setTimeout( () => slide.value.className = "slide slideDown", 313 );
                setTimeout( () => slide.value.style.zIndex = "1", 700 );
            }
        }

        if ( state === TS.SlideState.stop ) {
            if ( product !== VX.store.getters.focusedOn ) {
                slide.value.style.zIndex = "0";
            }
        }

    }
    
    // .. register
    return {
        me,
        slideAnimator,
	}

}