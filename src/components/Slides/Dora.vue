<template>
<div class="slide" ref="Slide">

    <img src="@/assets/pic/b_l_04.jpg" class="column left"  />
    <img src="@/assets/pic/b_r_04.jpg" class="column right" />

    <div class="column center"> <div class="content" v-html="context"></div> </div>

</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { defineComponent, ref }         from "vue";
import * as VX                          from "@/store/store";
import * as TS                          from "@/types/types";
import Mixin                            from "@/mixins/mixin";

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "Screen",

// -- =====================================================================================

    setup () {

// -- =====================================================================================

        const product = TS.MyProducts.dora;
        // eslint-disable-next-line
        const Slide = ref<HTMLElement>( null as any );

// -- =====================================================================================

        const { slideAnimator } = Mixin();

        const context = `
            <p>Dora is a powerful language learning application, that helps you keep traces of what you've already learned.</p>
            <p>Types of available lesson is vary from text based with audios, video, comics, ..., and you can sort them by level that appropriates for you.</p>`;

// -- =====================================================================================

        VX.store.watch(
            getters => getters.slideState, 
            newVal => slideAnimator( newVal, product, Slide ),
        );

// -- =====================================================================================

        return { Slide, context }

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
