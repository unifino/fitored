<template>
<div>

    <BG />
    <Header />
    <Description />
    <Footer />

</div>
</template>

// -- =====================================================================================

<script lang="ts">

// -- =====================================================================================

import { Options, Vue }                 from "vue-class-component";
import BG                               from "./components/BG.vue"
import Header                           from "./components/Header.vue"
import Description                      from "./components/Description.vue"
import Footer                           from "./components/Footer.vue"

// -- =====================================================================================

@Options({
    components: {
        BG,
        Header,
        Description,
        Footer
    }
})

// -- =====================================================================================

export default class App extends Vue {

}

// -- =====================================================================================

</script>

// -- =====================================================================================

<style>
</style>
