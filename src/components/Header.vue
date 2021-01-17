<template>
<div id="topBox" class="no_select">

    <Fitored />
    <div style="margin-right: 3vw" />
    <Dora />
    <NWord />
    <Canzone />
    <div class="space"></div>
    <Contact />

</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { defineComponent }              from "vue";
import Fitored                          from "@/components/Products/Fitored.vue"
import Dora                             from "@/components/Products/Dora.vue"
import NWord                            from "@/components/Products/NWord.vue"
import Canzone                          from "@/components/Products/Canzone.vue"
import Contact                          from "@/components/Products/Contact.vue"

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "Header",

// -- =====================================================================================

    components: {
        Fitored,
        Dora,
        NWord,
        Canzone,
        Contact
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

.space{ 
    background-color    : red;
    height              : 5vw;
    width               : .1vw;
    border-radius       : 10vw;
    margin              : 1vw 2vw 0 2vw;
}

</style>
