<template>
    <img id="logo" class="no_select" src="@/assets/pic/logo.png" v-on:click="about()" />
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

        function about() {

            const product = VX.MyProducts.fitored;

            const same = VX.store.getters.currentAbout === product;
            
            const aboutFitored = same ? null : {
                origin: product, 
                context: `
                    <span class="trendName">Fitored Design & Software Development</span> is an innovative Graphical and Software Developing company,
                    that aims to make digital world a nicer and easier place to live with it.

                    Our services vary from Designing Graphical Materials such as Brouchures, Flyers, Websites, Cards, ...,to Web-Appllications as well as Mobile Apps.

                    Have a Nice World, make it nicer.`,
            }

            VX.store.dispatch( VX.Acts.About, aboutFitored );

        }

        return { about }

    },

// -- =====================================================================================

} );

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

/*                                                                                       */

#logo {
    background-color    : #03171b;
    border-radius       : 100px;
    width               : 7vw;
    box-shadow          : 0 0 10px 1px #213f4d;
    cursor              : pointer;
    float               : left;
}

#logo:hover {
    box-shadow          : 0 0 7px 0px #213f4d;
}

/*                                                                                       */

</style>
