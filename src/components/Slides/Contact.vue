<template>
<div class="slide" ref="Slide">

    <img src="@/assets/pic/b_l_01.jpg" class="column left"  />
    <img src="@/assets/pic/b_r_01.jpg" class="column right" />

    <div class="column center">
        <div id="contactOptionsBox">

            <a href="https://t.me/aa_zz_001" target="blank">
                <div class="contactOption">
                    <img class="icon" src="@/assets/pic/telegram.png" />
                    <span class="title">Telegram</span>
                </div>
            </a>

            <a href="https://api.whatsapp.com/send?phone=905314312693" target="blank">
                <div class="contactOption">
                    <img class="icon" src="@/assets/pic/whatsapp.png" />
                    <span class="title">Whatsapp</span>
                </div>
            </a>

            <a href="mailto:name@rapidtables.com" target="blank">
                <div class="contactOption">
                    <img class="icon" src="@/assets/pic/email.png" />
                    <span class="title">Email</span>
                </div>
            </a>
        </div>
    </div>

</div>
</template>

// -- =====================================================================================

<script lang="ts">

import { defineComponent, ref }         from "vue";
import * as VX                          from "@/store/store";
import * as TS                          from "@/types/types";
import Mixin                            from "@/mixins/mixin";

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "Screen",

// -- =====================================================================================

    setup () {

        const product = TS.MyProducts.contact;
        const Slide = ref<HTMLElement>( null as any );
        const { slideAnimator } = Mixin();

        VX.store.watch(
            getters => getters.slideState, 
            newVal => slideAnimator( newVal, product, Slide ),
        );

        return { Slide }

    }

// -- =====================================================================================

} );

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

/*                                                                                       */

#contactOptionsBox {
    width               : 10vw;
}

.contactOption {
    width               : 100%;
    margin              : .5vw 0;
    padding             : .3vw;
    float               : left;
    cursor              : pointer;
}

.contactOption:hover{
    background-color    : rgba(54, 43, 33, 0.247);
    border-radius       : .5vw;
}

.icon {
    width               : 3vw;
    height              : 3vw;
    float               : left;
}

.title {
    display             : flex;
    justify-content     : left;
    align-items         : center;
    color               :seashell;
    height              : 3vw;
    width               : 55%;
    float               : right;
    font-size           : 1.2vw;
    font-family         : "PoiretOne";
}

/*                                                                                       */

</style>
