<template>
<div class="slide" ref="Slide">

    <img src="@/assets/pic/b_l_02.jpg" class="column left"  />
    <img src="@/assets/pic/b_r_02.jpg" class="column right" />

    <div class="column center"> <div class="content" v-html="context"></div> </div>

</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { defineComponent, ref }         from "vue";
import * as VX                          from "@/store/store";
import * as TS                          from "@/types/types";
import Mixin                            from "@/mixins/mixin";
// import $                                from "jquery";

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "Screen",

// -- =====================================================================================

    setup () {

        const product = TS.MyProducts.fitored;
        const Slide = ref<HTMLElement>( null as any );
        const { slideAnimator } = Mixin();

        const context = `
            <p><span class="trendName">Fitored Design & Software Development</span> is an innovative Graphical and Software Developing company,
            that aims to make digital world a nicer and easier place to live with it.</p>
            Our services includes Designing Brouchures, Websites, Apps, ...`;

        VX.store.watch(
            getters => getters.slideState, 
            newVal => slideAnimator( newVal, product, Slide ),
        );

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
