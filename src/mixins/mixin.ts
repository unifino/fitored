import * as VX                          from "@/store/store";
import * as TS                          from "@/types/types"

export default function () {

    // .. focusing on a Product
    const me = function ( product: TS.MyProducts ) {
        // .. prevent conflict animations
        if ( VX.store.getters.slideState !== TS.SlideAnimationState.stop ) return 0;
        // .. product is same: screen pulsing animation
        if ( VX.store.getters.focusedOn === product ) VX.store.dispatch( VX.Acts.pulse )
        // .. product changing: changing slide animation
        else VX.store.dispatch( VX.Acts.newFocus, product );
    }

    // .. slide Control
    const slideAnimator = async function (
        state: TS.SlideAnimationState, 
        product: TS.MyProducts, 
        slide: { value: HTMLElement }
    ) {
        // .. phase 1
        if ( state === TS.SlideAnimationState.start ) {
            if ( product === VX.store.getters.focusedOn ) {
                // .. sliding up
                slide.value.className = "slide slideUp";
                // .. wait for sliding up
                await new Promise( _ => setTimeout( _, 300) );
                slide.value.style.zIndex = "3";
                // .. trigger sliding down
                VX.store.dispatch( VX.Acts.slideState, TS.SlideAnimationState.up );
            }
        }
        // .. phase 2
        if ( state === TS.SlideAnimationState.up ) {
            if ( product === VX.store.getters.focusedOn ) {
                // .. sliding down
                slide.value.className = "slide slideDown";
                // .. wait for sliding down
                await new Promise( _ => setTimeout( _, 300+13) );
                slide.value.style.zIndex = "1";
                // .. trigger end of sliding ( it is NOT the END! )
                VX.store.dispatch( VX.Acts.slideState, TS.SlideAnimationState.down );
            }
        }
        // .. phase 3
        if ( state === TS.SlideAnimationState.down ) {
            // .. setting zIndexes
            slide.value.style.zIndex = product === VX.store.getters.focusedOn ? "1" : "0";
        }
        // .. phase 4
        // if ( state === TS.SlideAnimationState.stop ) {
        //     console.log("end");
        // }

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