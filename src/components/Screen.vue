<template>
<div id="screen" ref="Screen" class="no_select">

    <Fitored  ref="Fitored"   />
    <Brochure ref="Brochure"  />
    <Canzone  ref="Canzone"   />
    <Dora     ref="Dora"      />
    <NWord    ref="NWord"     />
    <Website  ref="Website"   />

</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { defineComponent, ref }         from "vue";
import * as VX                          from "@/store/store";
// import $                                from "jquery";
import Brochure                         from "@/components/Slides/Brochure.vue"
import Canzone                          from "@/components/Slides/Canzone.vue"
import Dora                             from "@/components/Slides/Dora.vue"
import Fitored                          from "@/components/Slides/Fitored.vue"
import NWord                            from "@/components/Slides/NWord.vue"
import Website                          from "@/components/Slides/Website.vue"

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "Screen",

// -- =====================================================================================

    components: {
        Brochure,
        Canzone,
        Dora,
        Fitored,
        NWord,
        Website,
    },

// -- =====================================================================================

    setup () {

        const Screen    = ref<HTMLElement|null>( null );
        const Fitored   = ref<HTMLElement|null>( null );
        const Brochure  = ref<HTMLElement|null>( null );
        const Canzone   = ref<HTMLElement|null>( null );
        const Dora      = ref<HTMLElement|null>( null );
        const NWord     = ref<HTMLElement|null>( null );
        const Website   = ref<HTMLElement|null>( null );


        const bounce = function ( state: "minimize" | "maximize" ) {
            if ( Screen.value ) {
                Screen.value.className = "no_select ";
                Screen.value.className += state;
            }
        }

        const slider = async function ( x: VX.MyProducts|null ) {

            bounce( "minimize" );
            await new Promise( _ => setTimeout( _, 2500) );
            bounce( "maximize" );

        }

        VX.store.watch(
            state => state.about.origin, 
            newVal => {
                // bounce( newVal !== null ? "minimize" : "maximize" );
                slider( newVal );
            }
        );

        return { Screen, Fitored, Brochure, Canzone, Dora, NWord, Website }

    }

// -- =====================================================================================

} );

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

/*                                                                                       */

#screen {
    width               : 40vw;
    height              : 28vw;
    right               : 5vw;
    bottom              : 7vw;
    border-radius       : .8vw;
    box-shadow          : 0 0 4em 0 #02090f;
    position            : absolute;
    overflow            : hidden;
}

.minimize {
    animation           : minimize .7s;
    animation-fill-mode : both;
}

.maximize {
    animation           : maximize .3s;
    animation-fill-mode : both;
}

@keyframes minimize {
    0%  { transform     : scale(1)      }
    40% { transform     : scale(1.1)    }
    100%{ transform     : scale(.5)     }
}

@keyframes maximize {
    0%  { transform     : scale(.5)     }
    100%{ transform     : scale(1)      }
}


/*                                                                                       */

</style>
