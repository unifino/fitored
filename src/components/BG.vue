<template>
<div>

    <div id="wallpaper" class="fx no_select"></div>
    <img src="@/assets/pic/bg.png" id="beauty" class="no_select" />
    <!-- <div id="contact">contact</div>
    <div id="about_us">about us</div>
    <div id="settings">settings</div> -->

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

#contact {
    color: #626262;
    font-size: 1.3vw;
    font-weight: normal;
    position: absolute;
    top: 7.2vw;
    letter-spacing: .01vw;
    text-align: center;
    border-bottom: solid red 0.2vw;
    /* font-family         : "MuseoModerno"; */
    /* font-family         : "Oswald"; */
    font-family         : "Nova Mono";
    /* font-family         : "ZillaSlabHighlight"; */
    left: 81vw;
}

#about_us {
    color: #626262;
    font-size: 1.3vw;
    font-weight: normal;
    position: absolute;
    top: 7.2vw;
    letter-spacing: .01vw;
    text-align: center;
    border-bottom: solid red 0.2vw;
    font-family         : "Nova Mono";
    left: 73.2vw;
}

#settings {
    color: #626262;
    font-size: 1.3vw;
    font-weight: normal;
    position: absolute;
    top: 7.2vw;
    letter-spacing: .01vw;
    text-align: center;
    border-bottom: solid red 0.2vw;
    font-family         : "Nova Mono";
    left: 88vw;
}

</style>
