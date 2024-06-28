<template>
<div id="root" ref="root">

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

import { defineComponent, onMounted, ref }   from "vue";
import BG                               from "@/components/BG.vue"
import Header                           from "@/components/Header.vue"
import Screen                           from "@/components/Screen.vue"
import Options                          from "@/components/Options.vue"
import Footer                           from "@/components/Footer.vue"
import * as TS                          from "@/types/types"
import * as VX                          from "@/store/store";

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
    },

// -- =====================================================================================

    setup () {

// -- =====================================================================================

        const root = ref<HTMLElement>( {} as HTMLElement );

// -- =====================================================================================

        onMounted ( () => {

            const ua = navigator.userAgent;

            if ( /Android|webOS|Opera Mini|Mobile|mobile|CriOS/i.test(ua) )
                VX.store.dispatch( VX.Acts.clientDevice, TS.clientDeviceType.mobile );
            else if ( /iPhone|iPad|iPod|BlackBerry|IEMobile/i.test(ua) )
                VX.store.dispatch( VX.Acts.clientDevice, TS.clientDeviceType.mobile );
            else
                VX.store.dispatch( VX.Acts.clientDevice, TS.clientDeviceType.desktop );

            root.value.className = TS.clientDeviceType[ VX.store.getters.clientDevice ];

        } );

// -- =====================================================================================

        return { root }

    }

} );

// -- =====================================================================================

</script>

// -- =====================================================================================

<style>
</style>
