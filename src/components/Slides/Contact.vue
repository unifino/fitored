<template>
<div class="slide" ref="Slide">

    <img src="@/assets/pic/b_l_01.jpg" class="column left"  />
    <img src="@/assets/pic/b_r_01.jpg" class="column right" />

    <div class="column center">
        <div>

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

// -- =====================================================================================

        const product = TS.MyProducts.contact;
        // eslint-disable-next-line
        const Slide = ref<HTMLElement>( null as any );

// -- =====================================================================================

        const { slideAnimator } = Mixin();

// -- =====================================================================================

        VX.store.watch(
            getters => getters.slideState, 
            newVal => slideAnimator( newVal, product, Slide ),
        );

// -- =====================================================================================

        return { Slide }

    }

// -- =====================================================================================

} );

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

/*                                                                                       */

.contactOption {
    display             : flex;
    align-items         : center;
    justify-content     : center;
    cursor              : pointer;
}

.contactOption:hover{
    background-color    : rgba(54, 43, 33, 0.247);
    border-radius       : .5em;
}

.desktop .icon {
    width               : 3.8em;
    height              : 3.8em;
    margin              : .7em 1.3em .7em .5em;
}

.mobile .icon {
    width               : 3em;
    height              : 3em;
    margin              : .7em 1em;
}

.title {
    display             : flex;
    justify-content     : left;
    align-items         : center;
    color               : rgb(207, 206, 205);
    height              : 3em;
    width               : 5em;
    font-family         : "PoiretOne";
    font-weight         : bold;
}

.desktop .title {
    font-size           : 1.3em;
}

.mobile .title {
    font-size           : 1.2em;
}

/*                                                                                       */

</style>
