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

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "Brochure",

// -- =====================================================================================

    setup () {

// -- =====================================================================================

        const product = TS.MyProducts.brochure
        const Slide = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

        const { slideAnimator } = Mixin();

        const context = `
            <p><span class="trendName">Fitored</span> Designs elegant Brochures and E-Flyers upon demands of its customers.</p>
            <p>You can make a request for your projects.</p>`;

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
