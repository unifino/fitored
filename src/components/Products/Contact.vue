<template>
<div class="optionBox" v-on:click="click()">
    <div class="optionIcon" ref="butt">
        <i class="awesome"></i>
    </div>
    <div class="optionTitle">Contact Us</div>
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

// -- =====================================================================================

        const product = TS.MyProducts.contact;

        // eslint-disable-next-line
        const butt = ref<HTMLElement>( null as any );

// -- =====================================================================================

        const { me, pulser } = Mixin();

// -- =====================================================================================

        const click = function () {
            pulser( butt );
            me( product );
        }

// -- =====================================================================================

        return { butt, click }

    }

// -- =====================================================================================

} );

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

/*                                                                                       */

.optionIcon {
    line-height         : 4vw;
    height              : 4vw;
}

.mobile .optionTitle {
    /* padding-top              : 10vw; */
    padding-top         : 1.7em;
    margin-bottom       : -1.7em;
}

.awesome {
    color               : #be8a1a;
    font-family         : "fas";
    font-style          : normal;
    text-align          : center;
}


/*                                                                                       */

</style>
