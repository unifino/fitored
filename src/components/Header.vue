<template>
<div id="topBox">

    <img src="../assets/pic/logo.png" id="logo" v-on:click="dialog()" />

</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { Options, Vue }                 from "vue-class-component";
import { ActionTypes, MutationTypes, useStore }                     from "../store/index";

// -- =====================================================================================

@Options( {} )

// -- =====================================================================================

export default class Header extends Vue {

    store =  useStore();

    dialog() {
        const content = `
        <span class="trendName">Fitored Design & Software Development</span> is an innovative Graphical and Software Developing company,
            that aims to make digital world a nicer and easier place to live with it.

            Our services vary from Designing Graphical Materials such as Brouchures, Flyers, Websites, Cards, ...,to Web-Appllications as well as Mobile Apps.

            We make sure that our taste of designing would be poured in our production.

            Have a Nice World, make it nicer.`;
        this.store.commit( MutationTypes.Description, "hatef" )
        // ( this as any ).emitter.emit( "dialoger", content );
    }


    // dialog() {
    //     const content = `
    //         <p>Canzone is our Music Player Application.
    //         Our aim on desigining it is simplicity anf functionality.</p>
    //         <span class='underDev'>&nbsp;Canzone is still under development!&nbsp;</span>`;
    //     ( this as any ).emitter.emit( "dialoger", content );
    // }

}

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

#topBox {
    float               : left;
    margin-top          : 4.5%;
    margin-left         : 5%;
    display             : flex;
    justify-content     : center;
    align-items         : center;
}

#logo {
    background-color    : #03171b;
    border-radius       : 100px;
    width               : 7vw;
    box-shadow          : 0 0 10px 1px #213f4d;
    cursor              : pointer;
    float               : left;
}

#logo:hover {
    box-shadow          : 0 0 7px 0px #213f4d;
}

</style>
