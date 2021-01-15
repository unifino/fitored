<template>
<div>

    <BG />
    <Header />
    <Screen />
    <Options />
    <Footer />

</div>
</template>

// -- =====================================================================================

<script lang="ts">

// -- =====================================================================================

import { defineComponent }              from "vue";
import BG                               from "@/components/BG.vue"
import Header                           from "@/components/Header.vue"
import Screen                           from "@/components/Screen.vue"
import Options                          from "@/components/Options.vue"
import Footer                           from "@/components/Footer.vue"

// -- =====================================================================================

export default defineComponent ( {

    name: "App",

// -- =====================================================================================

    components: {
        BG,
        Header,
        Screen,
        Options,
        Footer
    }

} );

// -- =====================================================================================

</script>

// -- =====================================================================================

<style>
</style>
