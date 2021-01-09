<template>
<div class="appBox" v-on:click="about()">
    <img class="appIcon" src="@/assets/pic/canzone.png" />
    <div class="appTitle">Canzone</div>
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

        const product = VX.MyProducts.canzone;

        function about() {

            const same = VX.store.getters.currentAbout === product;
            
            const aboutFitored = same ? null : {
                origin: product, 
                context: `
                    Canzone is our Music Player Application.
                    Our aim on desigining it is simplicity anf functionality.

                    <span class='underDev'>&nbsp;Canzone is still under development!&nbsp;</span>`,
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
