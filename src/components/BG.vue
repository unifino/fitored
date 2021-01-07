<template>
<div>

    <div id="wallpapaer" class="fx"></div>
    <img src="../assets/pic/bg.png" id="beauty" />

</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { Options, Vue }                 from "vue-class-component";

// -- =====================================================================================

@Options( {} )

// -- =====================================================================================

export default class BG extends Vue {

}

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

#wallpapaer {
    background-image    : url( "../assets/pic/bg-r.png" );
    background-position : left bottom;
    background-repeat   : repeat;
    background-size     : 30% auto;
    position            : fixed;
    z-index             : -1;
}

#beauty {
    left: 2%;
    height: 24vw;
    bottom: 0;
    position: absolute;
}

</style>
