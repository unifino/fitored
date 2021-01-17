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
    font-size           : 0.9vw;
    bottom              : 0;
    right               : 2vw;
    width               : 40vw;
    padding             : 1.2% 0%;
    position            : absolute;
    z-index             : -1;
}

.copyRight {
    color               : #146a75;
    font-family         : "Oswald";
}

/*                                                                                       */

</style>
