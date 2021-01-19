<template>
<div id="headerBox" class="no_select">

    <div style="margin: 0 1.5em" />

    <Fitored />

    <div style="margin: 3em 0" />

    <div id="optionsBigBox">
        <Dora />
        <NWord />
        <Canzone />
        <div class="divider"></div>
        <Contact />
    </div>

</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { defineComponent, onMounted, ref }              from "vue";
import * as TS                          from "@/types/types"
import * as VX                          from "@/store/store";
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

#headerBox {
    float               : left;
    width               : 100vw;
    text-align          : center;
    justify-content     : left;
    align-items         : center;
}

.desktop #headerBox {
    margin-top          : 4.3em;
    display             : flex;
}

.mobile #headerBox {
    margin-top          : 2.5em;
    display             : block;
}

#optionsBigBox {
    display             : flex;
    justify-content     : center;
    align-items         : center;
}

.divider{ 
    background-color    : red;
    border-radius       : 100vw;
}

.desktop .divider {
    height              : 4.5vw;
    width               : .1vw;
    margin              : 1vw 2vw 0vw 2vw;
}

.mobile .divider {
    height              : 17vw;
    width               : .5vw;
    margin              : 1.5vw 5vw -3.5vw 5vw;
}

</style>
