<template>
<div id="panel" ref="d_panel">

    <div class="close no_select" v-on:click="clearDialog()">x</div>
    <div id="content" class="no_select"></div>

</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { defineComponent }              from "vue";
import $                                from "jquery";
import * as VX                          from "@/store/store";

// -- =====================================================================================

export default defineComponent ( {

    name: "Dialog",

// -- =====================================================================================

    setup () {

        const clearDialog = () => VX.store.dispatch( VX.Acts.About, null );

        function panelCtr( msg: string|null ) {
            
            const panel = $( "#panel" );
            
            // .. duration of First Animation base on if Panel already is active
            const duration = ( !panel.is(':hidden') ) ? 400 : 800;

            // panel.show();
            const content = $( "#content" );
            const height = panel.height() || 0;

            // .. First (Mandatory) Animation
            panel.animate(
                { bottom: -height }, 
                duration, 
                () => {
                    if ( msg ) {
                        content.html( msg );
                        panel.css( { bottom: -Number( panel.height() ) } );
                        // .. Second (Optional) Animation
                        panel.animate( { bottom: 0 }, 400 );
                    }
                    else panel.hide();
                } 
            );

        }

        VX.store.watch(
            state => state.about.origin, 
            () => panelCtr( VX.store.state.about.context )
        );

        return { panelCtr, clearDialog }
        
    },

// -- =====================================================================================

    mounted () {
        this.panelCtr( "" );
    },

// -- =====================================================================================

} );

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

/*                                                                                       */

#panel {
    background-color    : teal;
    bottom              : -100%;
    left                : 24vw;
    max-height          : 30vw;
    border-radius       : 7px 7px 0 0;
    position            : absolute;
    box-shadow          : 0 0 10px 0px black;
}

#content {
    color               : whitesmoke;
    font-size           : 1.3vw;
    width               : 20em;
    text-align          : justify;
    padding             : 1.9em 3.9em 2.7em 3.9em;
    white-space         : pre-line;
}

.close {
    color               : #112736;
    font-size           : 2.5vw;
    font-weight         : bold;
    font-family         : "ComicNeue";
    right               : 0;
    position            : absolute;
    padding             : 1.2vw;
    height              : 1ex;
    width               : 1ex;
    line-height         : 1ex;
    cursor              : pointer;
}

.close:hover {
    color               : #364a53;
}

/*                                                                                       */


</style>
