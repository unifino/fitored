<template>
<div id="panel" ref="d_panel">

    <div class="close unselectable" v-on:click="clearDialog()">x</div>

    <div id="content" class="unselectable"></div>

</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { defineComponent }              from "vue";
import $                                from "jquery";
import * as VX                          from "../store/store";

// -- =====================================================================================

export default defineComponent ( {

    name: "Description",

// -- =====================================================================================

    setup () {

        function clearDialog() {
            VX.store.dispatch( VX.Acts.Description, "" );
        }

        function panelCtr( msg = "" ) {

            const panel = $( "#panel" );
            const content = $( "#content" );
            const height = panel.height() || 0;

            panel.animate( 
                { bottom  : -height/101.1, opacity : 1 }, 
                400, 
                () => {
                    if ( msg ) {
                        content.html( msg );
                        panel.animate( { bottom  : 0, opacity : 1 }, 400 );
                    }
                } 
            );

        }

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
    bottom              : 0;
    left                : 24vw;
    max-height          : 30vw;
    border-radius       : 7px 7px 0 0;
    position            : absolute;
    box-shadow          : 0 0 10px 0px black;
    opacity             : 0;
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
