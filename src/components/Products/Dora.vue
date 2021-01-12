<template>
<div class="appBox" v-on:click="click()">
    <img class="appIcon" src="@/assets/pic/dora.png" ref="butt" />
    <div class="appTitle">Dora</div>
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

        const product = TS.MyProducts.dora;
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
