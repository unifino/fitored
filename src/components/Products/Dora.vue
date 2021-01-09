<template>
<div class="appBox" v-on:click="about()">
    <img class="appIcon" src="@/assets/pic/dora.png" />
    <div class="appTitle">Dora</div>
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

        const product = VX.MyProducts.dora;

        function about() {

            const same = VX.store.getters.currentAbout === product;
            
            const aboutFitored = same ? null : {
                origin: product, 
                context: `
                    Dora is a powerfull language learning application, that helps you keep traces of what you've already lerened, review them and recognized important words in new lessons.

                    Types of availbale lesson is vary from text simple based lesson with or without audios, video based lessons, comics, ..., and you can sort them by the level (CEF) that approprite for you.`,
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
