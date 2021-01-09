<template>
<div id="topBox" class="no_select">

    <Fitored />
    <div style="margin-right: 3vw" />
    <Dora />
    <NWord />
    <Canzone />

</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { defineComponent }              from "vue";
import * as VX                          from "@/store/store";
import Fitored                          from "@/components/Products/Fitored.vue"
import Dora                             from "@/components/Products/Dora.vue"
import NWord                            from "@/components/Products/NWord.vue"
import Canzone                          from "@/components/Products/Canzone.vue"

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "Header",

// -- =====================================================================================

    components: {
        Fitored,
        Dora,
        NWord,
        Canzone
    },

// -- =====================================================================================

} );

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

#topBox {
    float               : left;
    margin-top          : 4.5%;
    margin-left         : 5%;
    display             : flex;
    justify-content     : center;
    align-items         : center;
}

</style>
