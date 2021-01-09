<template>
<div class="slide" >

    <img src="@/assets/pic/b_l_09.jpg" class="column left"  />
    <img src="@/assets/pic/b_r_09.jpg" class="column right" />

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

    name: "Screen",

// -- =====================================================================================

    setup () {

        const screenClass = ref( "no_select maximize" );
        const context = `
            <p>Canzone is our Music Player Application.
            Our aim on desigining it is simplicity anf functionality.</p>

            <span class='underDev'>&nbsp;Canzone is still under development!&nbsp;</span>`;

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
