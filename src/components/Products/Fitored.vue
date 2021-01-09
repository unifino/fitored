<template>
    <img class="logo no_select" src="@/assets/pic/logo.png" v-on:click="me( product )" />
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

        const product = TS.MyProducts.fitored;
        const { me } = Mixin();
        return { me, product }

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
