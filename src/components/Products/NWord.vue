<template>
<div class="appBox" v-on:click="about()">
    <img class="appIcon" src="@/assets/pic/n_word.png" />
    <div class="appTitle">n_Word</div>
</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { defineComponent }              from "vue";
import * as VX                          from "@/store/store";
// import $                                from "jquery";

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "Dora",

// -- =====================================================================================

    setup () {

        const product = VX.MyProducts.n_word;

        function about() {

            const same = VX.store.getters.currentAbout === product;
            
            const aboutFitored = same ? null : {
                origin: product, 
                context: `
                    n-Word is a new flashCard application, it provides many functions to capture and practice informations that you need.

                    <span class="underDev">&nbsp;n-Word is still under development!&nbsp;</span>`,
            }

            VX.store.dispatch( VX.Acts.About, aboutFitored );

        }

        return { about }


    }

// -- =====================================================================================

} );

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

/*                                                                                       */
.appBox {
    text-align          : center;
    margin              : 0 .7vw;
    width               : auto;
}

/*                                                                                       */

</style>
