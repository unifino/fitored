<template>
<div id="panel" ref="panel" class="fadeIn">
    <div class="optionBox"><i class="icon"></i><div class="title">Sign-in</div></div>
    <div class="optionBox"><i class="icon"></i><div class="title">Tutorial</div></div>
    <div class="optionBox"><i class="icon"></i><div class="title">Gallery</div></div>
    <div class="optionBox"><i class="icon"></i><div class="title">Download</div></div>
    <!-- <div class="option">contact</div> -->
    <!-- <div class="option">about us</div> -->
    <!-- <div class="option">settings</div> -->
</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { defineComponent, ref }         from "vue";
import * as VX                          from "@/store/store";
import { SlideAnimationState }          from "@/types/types";

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "Options",

// -- =====================================================================================

    setup () {

        // eslint-disable-next-line
        const panel = ref<HTMLElement>( null as any );

        const panelCtl = function ( state: SlideAnimationState ) {
            if ( state === SlideAnimationState.stop ) panel.value.className = "fadeIn";
            if ( state === SlideAnimationState.waiting ) panel.value.className = "fadeOut";
        }

        VX.store.watch(
            getters => getters.slideState,
            newVal => panelCtl( newVal ),
        );

        return { panel }

    }

// -- =====================================================================================

} );

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

/*                                                                                       */

#panel {
    bottom              : 7.9vw;
    right               : 46vw;
    height              : 22.5vw;
    width               : 16vw;
    position            : absolute;
}

.optionBox {
    width               : 100%;
    float               : left;
    margin-top          : 1.5vw;
    cursor              : pointer;
}

.title {
    color               : #c5c5c5;
    color               : #8d6f6f60;
    width               :60%;
    float               : left;
    font-size           : 1.36vw;
    font-weight         : bold;
    line-height         : 1.6vw;
    text-align          : right;
    margin-top          : .43vw;
    font-family         : "BadScript";
    font-family         : "ComicNeue";
    font-family         : "Thasadith";
    font-family         : "Oswald";
    font-family         : "PoiretOne";
    /* font-family         : "Nova Mono"; */
}

.optionBox:hover .title,
.optionBox:hover .icon {
    color               : #8d6f6f;
    transition          : .4s;
}

.icon {
    font-family         : "fas";
    font-style          : normal;
    font-size           : 2.5vw;
    text-align          : center;
    color               :#d1c40f;
    color               :#d1770f;
    float               : right;
    width               : 40%;
}

.fadeOut {
    transform           : translateX(-4vw);
    transition          : .4s;
    opacity             : 0;
}

.fadeIn {
    transform           : translateX(0);
    transition          : 1s;
    opacity             : 1;
}

/*                                                                                       */

</style>
