<template>
<div id="footer">

    Fitored DESG. & Dev. 
    <span class="copyRight">©</span>
    2020
    
</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { defineComponent }              from "vue";

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "Footer",

// -- =====================================================================================


} );

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

@import url( "../../public/main.css" );

/*                                                                                       */

#footer {
    color               : #636363;
    font-family         : "Nova Mono";
    text-align          : center;
    right               : 0;
    position            : absolute;
    z-index             : -1;
}

.desktop #footer {
    bottom              : .1vw;
    padding             : 1.2% 0%;
    width               : 44vw;
    font-size           : 0.9vw;
}

.mobile #footer {
    bottom              : 4.5vw;
    width               : 85.5vw;
    font-size           : 2.5vw;
}

.copyRight {
    color               : #146a75;
    font-family         : "Oswald";
}

/*                                                                                       */

</style>
