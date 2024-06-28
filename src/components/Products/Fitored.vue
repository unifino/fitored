<template>
<div id="logoBox">
    <img 
        id="logo"
        class="no_select" 
        ref="butt"
        src="@/assets/pic/logo.png" 
        v-on:click="click()"
    />
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

        const product = TS.MyProducts.fitored;
        const butt = ref<HTMLElement>( {} as HTMLElement );

// -- =====================================================================================

        const { me, pulser } = Mixin();

// -- =====================================================================================

        const click = function () {
            pulser( butt );
            me( product );
        }

// -- =====================================================================================

        return { butt, click }

    },

// -- =====================================================================================

} );

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

/*                                                                                       */

.desktop #logoBox {
    height              : 7vw;
    width               : 14%;
}

.mobile #logoBox {
    height              : 25vw;
    width               : 100%;
}

#logo {
    width               : auto;
    height              : 100%;
    background-color    : #03171b;
    border-radius       : 100em;
    box-shadow          : 0 0 1em .1em #213f4d;
    cursor              : pointer;
}

#logo:hover {
    box-shadow          : 0 0 .7em 0 #213f4d;
}

/*                                                                                       */

</style>
