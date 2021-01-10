import { ref, computed }                from "vue";
import * as VX                          from "@/store/store";
import * as TS                          from "@/types/types"

export default function () {

    // .. focusing on a Product
    const me = function ( product: TS.MyProducts ) {
        // .. prevent conflict animations
        if ( VX.store.getters.slideState === TS.SlideState.running ) return 0;
        // .. product is same: screen pulsing animation
        if ( VX.store.getters.focusedOn === product ) VX.store.dispatch( VX.Acts.pulse )
        // .. product changing: changing slide animation
        else VX.store.dispatch( VX.Acts.newFocus, product );
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
    
    // .. pulse animation on Button|Element
    const pulser = function ( element: { value: HTMLElement } ) {
        let preClass = element.value.className;
        // .. trim for screen
        preClass = preClass.replace( /minimize/g, "" );
        preClass = preClass.replace( /maximize/g, "" );
        // .. trim last state
        preClass = preClass.replace( /pulse/g, "" );
        // .. add pulse effect
        element.value.className = preClass + " pulse";
        // .. remove pulse effect
        setTimeout( () => element.value.className = preClass, 500 );
    }

    // .. register
    return {
        me,
        slideAnimator,
        pulser
	}

}