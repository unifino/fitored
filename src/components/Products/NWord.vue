<template>
<div class="appBox" v-on:click="click()">
    <img class="appIcon" src="@/assets/pic/n_word.png" ref="butt" />
    <div class="appTitle">n_Word</div>
</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { defineComponent, ref }         from "vue";
import * as VX                          from "@/store/store";
import * as TS                          from "@/types/types"
import Mixin                            from "@/mixins/mixin"

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "Dora",

// -- =====================================================================================

    setup () {

        const { me, pulser } = Mixin();

        const product = TS.MyProducts.n_word;
        const butt = ref<HTMLElement>( null as any );
        
        const click = function () {
            pulser( butt );
            me( product );
        }

        return { butt, click }

    }

// -- =====================================================================================

} );

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

/*                                                                                       */
.appBox {
    text-align          : center;
    margin              : 0 .7vw;
    width               : auto;
}

/*                                                                                       */

</style>
