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
            <p><span class="trendName">Fitored Design & Software Development</span> is an innovative Graphical and Software Developing company,
            that aims to make digital world a nicer and easier place to live with it.</p>
            Our services includes Designing Brouchures, Websites, Apps, ...`;

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
