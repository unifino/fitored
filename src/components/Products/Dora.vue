<template>
<div class="appBox" v-on:click="me( product )">
    <img class="appIcon" src="@/assets/pic/dora.png" />
    <div class="appTitle">Dora</div>
</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { defineComponent }              from "vue";
import * as VX                          from "@/store/store";
import * as TS                          from "@/types/types"
import Mixin                            from "@/mixins/mixin"
// import $                                from "jquery";

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "Dora",

// -- =====================================================================================

    setup () {

        const product = TS.MyProducts.dora;
        const { me } = Mixin();
        return { me, product }

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
