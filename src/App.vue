<template>
<div>

    <BG />
    <Header />
    <Screen />
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
import Footer                           from "@/components/Footer.vue"

// -- =====================================================================================

export default defineComponent ( {

    name: "App",

// -- =====================================================================================

    components: {
        BG,
        Header,
        Screen,
        Footer
    }

} );

// -- =====================================================================================

</script>

// -- =====================================================================================

<style>
</style>
