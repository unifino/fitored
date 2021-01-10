<template>
<div>

    <div id="wallpaper" class="fx no_select"></div>
    <img src="../assets/pic/bg.png" id="beauty" class="no_select" />

</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { defineComponent }                  from "vue";

// -- =====================================================================================

export default defineComponent ( {

    name: "BG",

} );

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

#wallpaper {
    background-image    : url( "../assets/pic/bg-r.png" );
    background-position : left bottom;
    background-repeat   : repeat;
    background-size     : 30% auto;
    position            : fixed;
    z-index             : -1;
}

#beauty {
    left                : 2%;
    height              : 24vw;
    bottom              : 0;
    position            : absolute;
    z-index             : -1;

}

</style>
