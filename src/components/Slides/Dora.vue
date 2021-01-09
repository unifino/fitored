<template>
<div class="slide" >

    <img src="@/assets/pic/b_l_04.jpg" class="column left"  />
    <img src="@/assets/pic/b_r_04.jpg" class="column right" />

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
            <p>Dora is a powerfull language learning application, that helps you keep traces of what you've already lerened.</p>
            <p>Types of availbale lesson is vary from text based with audios, video, comics, ..., and you can sort them by level that approprites for you.</p>`;

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
