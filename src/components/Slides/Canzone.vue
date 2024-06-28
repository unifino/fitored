<template>
<div class="slide" ref="Slide">

    <img src="@/assets/pic/b_l_09.jpg" class="column left"  />
    <img src="@/assets/pic/b_r_09.jpg" class="column right" />

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

        const product = TS.MyProducts.canzone
        const Slide = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

        const { slideAnimator } = Mixin();

        const context = `
            <p>Canzone is our Music Player Application.
            Our aim on designing it is simplicity anf functionality.</p>

            <span class='underDev'>&nbsp;Under development!&nbsp;</span>`;

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
