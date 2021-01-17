<template>
<div class="appBox" v-on:click="click()">
    <div class="appIcon" ref="butt">
        <i class="icon"></i>
    </div>
    <div class="appTitle">Contact Us</div>
</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { defineComponent, ref }         from "vue";
import * as TS                          from "@/types/types"
import Mixin                            from "@/mixins/mixin"

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "Dora",

// -- =====================================================================================

    setup () {

        const { me, pulser } = Mixin();

        const product = TS.MyProducts.contact;
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
    height: 4vw;
}

.icon {
    color               : #be8a1a;
    font-family         : "fas";
    font-style          : normal;
    font-size           : 3.5vw;
    text-align          : center;
}


/*                                                                                       */

</style>
