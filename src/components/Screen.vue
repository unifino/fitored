<template>
<div id="screen" ref="Screen" class="no_select">

    <brochure />
    <Canzone  />
    <Dora     />
    <NWord    />
    <Website  />
    <Fitored  />

</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { defineComponent, ref }         from "vue";
import * as VX                          from "@/store/store";
import * as TS                          from "@/types/types"
// import $                                from "jquery";
import Brochure                         from "@/components/Slides/Brochure.vue"
import Canzone                          from "@/components/Slides/Canzone.vue"
import Dora                             from "@/components/Slides/Dora.vue"
import Fitored                          from "@/components/Slides/Fitored.vue"
import NWord                            from "@/components/Slides/NWord.vue"
import Website                          from "@/components/Slides/Website.vue"
import Mixin                            from "@/mixins/mixin"

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

        const Screen = ref<HTMLElement>( null as any );
        const { pulser } = Mixin();

        const bounce = function ( state: "minimize" | "maximize" ) {
            Screen.value.className = "no_select ";
            Screen.value.className += state;
        }

        const slider = async function ( x: TS.MyProducts ) {
            bounce( "minimize" );
            await new Promise( _ => setTimeout( _, 420) );
            VX.store.dispatch( VX.Acts.slideState, TS.SlideState.running );
            await new Promise( _ => setTimeout( _, 550) );
            VX.store.dispatch( VX.Acts.slideState, TS.SlideState.stop );
            await new Promise( _ => setTimeout( _, 100) );
            bounce( "maximize" );
        }

        VX.store.watch(
            getters => getters.focusedOn,
            newVal => slider( newVal ),
        );

        VX.store.watch(
            getters => getters.pulse,
            () => pulser( Screen ),
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
    box-shadow          : 0 0 4em 0 #02090f;
    position            : absolute;
}

.minimize {
    animation           : minimize .5s;
    animation-fill-mode : both;
}

.maximize {
    animation           : maximize .3s;
    animation-fill-mode : both;
}

@keyframes minimize {
    0%  { transform     : scale(1)          }
    40% { transform     : scale(1.1)        }
    100%{ transform     : scale(.5)         }
}

@keyframes maximize {
    0%  { transform     : scale(.5)         }
    100%{ transform     : scale(1)          }
}


/*                                                                                       */

</style>
