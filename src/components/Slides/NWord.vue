<template>
<div class="slide" >

    <img src="@/assets/pic/b_l_05.jpg" class="column left"  />
    <img src="@/assets/pic/b_r_05.jpg" class="column right" />

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
            <p>n-Word is a new flashCard application, it provides many functions to capture and practice informations that you need.</p>

            <span class="underDev">&nbsp;n-Word is still under development!&nbsp;</span>`;

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
