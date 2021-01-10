<template>
<div class="slide" ref="Slide">

    <img src="@/assets/pic/b_l_11.jpg" class="column left"  />
    <img src="@/assets/pic/b_r_11.jpg" class="column right" />

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

        const product = TS.MyProducts.website;
        const Slide = ref<HTMLElement>( null as any );
        const { slideAnimator } = Mixin();

        const context = `
            <p>Would you like unique and exquisite website like our collection?</p>
            <p>Make a request and have one in no time :)</p>`;

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
