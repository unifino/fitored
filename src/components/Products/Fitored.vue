<template>
<div class="logoBox"  v-on:click="click()">
    <img class="logo no_select" src="@/assets/pic/logo.png" ref="butt" />
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

        const product = TS.MyProducts.fitored;
        const butt = ref<HTMLElement>( null as any );
        
        const click = function () {
            pulser( butt );
            me( product );
        }

        return { butt, click }

    },

// -- =====================================================================================

} );

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

/*                                                                                       */

.logo {
    background-color    : #03171b;
    border-radius       : 100px;
    width               : 7vw;
    box-shadow          : 0 0 10px 1px #213f4d;
    cursor              : pointer;
    float               : left;
}

#logo:hover {
    box-shadow          : 0 0 7px 0px #213f4d;
}

/*                                                                                       */

</style>
