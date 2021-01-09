<template>
<div class="slide" >

    <img src="@/assets/pic/b_l_02.jpg" class="column left"  />
    <img src="@/assets/pic/b_r_02.jpg" class="column right" />

    <div class="column center"> <div class="content" v-html="context"></div> </div>

</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { defineComponent, ref }         from "vue";
import * as VX                          from "@/store/store";
// import $                                from "jquery";

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "Brochure",

// -- =====================================================================================

    setup () {

        const screenClass = ref( "no_select maximize" );

        const context = `
            <p><span class="trendName">Fitored</span> Designs elegent Brochures and E-Flyers upon demands of its customers.</p>
            <p>You can make a request for your projects.</p>`;

        VX.store.watch(
            state => state.about.origin, 
            newVal => {
                screenClass.value = "no_select ";
                screenClass.value += newVal !== null ? "minimize" : "maximize";
            }
        );

        return { screenClass, context }

    }

// -- =====================================================================================

} );

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

/*                                                                                       */

/*                                                                                       */

</style>
