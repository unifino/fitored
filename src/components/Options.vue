<template>
<div id="panelWrapper">
    <div id="panel" ref="panel" class="fadeIn">
        <div v-for="(opt,i) of options" :key=key+i class="optionBox">
            <i class="icon">{{opt.icon}}</i>
            <div :class="'title ' + opt.class">{{opt.title}}</div>
        </div>
    </div>
</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { defineComponent, ref }         from "vue";
import * as VX                          from "@/store/store";
import { MyProducts, SlideAnimationState }          from "@/types/types";

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "Options",

// -- =====================================================================================

    setup () {

        // eslint-disable-next-line
        const panel = ref<HTMLElement>( null as any );
        const options =  ref ( [{}] );
        const key = ref(0);

        options.value = [
            // { title: "Contact Us", class:"mTop", icon: "", }
        ]

        const panelCtl = function ( state: SlideAnimationState ) {

            if ( state === SlideAnimationState.stop ) panel.value.className = "fadeIn";

            if ( state === SlideAnimationState.waiting ) panel.value.className = "fadeOut";

            if ( state === SlideAnimationState.up ) {

                // .. alter it by length of options
                key.value += options.value.length || 4;

                switch ( VX.store.getters.focusedOn ) {
                    case MyProducts.fitored:
                        options.value = [
                            // { title: "Contact Us", class:"mTop", icon: "", }
                        ];
                        break;

                    case MyProducts.dora:
                        options.value = [
                            { title: "Sign-in" , class:"", icon: "", },
                            { title: "Tutorial", class:"", icon: "", },
                            { title: "Gallery" , class:"", icon: "", },
                            { title: "Download", class:"", icon: "", },
                        ]
                        break;

                    case MyProducts.n_word:
                        options.value = []
                        break;

                    case MyProducts.canzone:
                        options.value = []
                        break;

                }

            }

        }

        VX.store.watch(
            getters => getters.slideState,
            newVal => panelCtl( newVal ),
        );

        return { panel, options, key }

    }

// -- =====================================================================================

} );

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

/*                                                                                       */

#panelWrapper {
    bottom              : 7vw;
    right               : 46vw;
    height              : 25vw;
    padding             : 1.5vw 0;
    width               : 16vw;
    position            : absolute;
    display             : flex;
    align-items         : flex-end;
}

#panel {
    width               : 100%;
    min-height          : 5vw;
    margin              : 2.5vw 0 0 0;
}

.optionBox {
    margin              : .725vw 0;
    width               : 100%;
    float               : left;
    cursor              : pointer;
}

.title {
    color               : #a09271;
    width               : 60%;
    float               : left;
    font-size           : 1.36vw;
    font-weight         : bold;
    line-height         : 1.6vw;
    text-align          : right;
    margin-top          : .4vw;
    font-family         : "PoiretOne";
    transition          : color 1s;
}

.mTop {
    margin-top          : .8vw;
}

.icon {
    color               : #916f26;
    font-family         : "fas";
    font-style          : normal;
    font-size           : 2.5vw;
    text-align          : center;
    float               : right;
    width               : 40%;
    transition          : color 1s;
}

.optionBox:hover .title,
.optionBox:hover .icon {
    color               : #0b8191;
    transition          : .5s;
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
