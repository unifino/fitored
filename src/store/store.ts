import { 
    ActionContext, 
    ActionTree, 
    GetterTree, 
    MutationTree ,
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
    createStore,
    createLogger
}                                       from "vuex";
import * as TS                          from "@/types/types"

// -- ================================================================ declarations =======

// .. declare AugmentedActionContext
type AAC = Omit< ActionContext<State, State>, "commit" > & {
    commit <K extends keyof MyMutations> (
        key: K,
        payload?: Parameters<MyMutations[K]>[1]
    ): ReturnType<MyMutations[K]>;
};

// .. declare Store
type Store = Omit< VuexStore<State>, "commit"|"dispatch"|"getters" > & {

    commit < K extends keyof MyMutations, P extends Parameters<MyMutations[K]>[1] > (
        key: K,
        payload?: P,
        options?: CommitOptions
    ): ReturnType<MyMutations[K]>;

    dispatch <K extends keyof MyActions > (
        key: K,
        payload?: Parameters<MyActions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<MyActions[K]>;

    getters: { [K in keyof MyGetters]: ReturnType<MyGetters[K]> };

};

// -- ======================================================================= State =======

// .. declare State
type State = {
    focusedOn: TS.MyProducts;
    slideState: TS.SlideState;
    pulse: boolean;
}

// .. define  State
const state: State = {
    focusedOn: TS.MyProducts.fitored,
    slideState: TS.SlideState.stop,
    pulse: false,
}

// -- =================================================================== Mutations =======

// .. declare Mutation-Options
enum Mutates {
    newFocus = "SET_newProduct_on_focus",
    slideState = "SET_slideState",
    pulse = "pulse",
}

// .. declare Mutations
type MyMutations<S = State> = {
    [ Mutates.newFocus ] ( state: S, payload: TS.MyProducts ): void;
    [ Mutates.slideState ] ( state: S, payload: TS.SlideState ): void;
    [ Mutates.pulse ] ( state: S ): void;
}

// .. define Mutations 
const mutations: MutationTree<State> & MyMutations = {

    [ Mutates.newFocus ] ( state, payload ) { state.focusedOn = payload },
    [ Mutates.slideState ] ( state, payload ) { state.slideState = payload },
    [ Mutates.pulse ] ( state ) { state.pulse = !state.pulse },

}

// -- ===================================================================== Actions =======

// .. declare Action-Options
export enum Acts {
    newFocus = "SET_newProduct_on_focus",
    slideState = "SET_slideState",
    pulse = "pulse",
}

// .. declare Action Interface
interface MyActions {
    [ Acts.newFocus ] ( {commit}: AAC, payload: TS.MyProducts ): void;
    [ Acts.slideState ] ( {commit}: AAC, payload: TS.SlideState ): void;
    [ Acts.pulse ] ( {commit}: AAC ): void;
}

// .. define Actions
const actions: ActionTree<State, State> & MyActions = {
    
    // .. focusing on Product
    [ Acts.newFocus ] ( {commit}, newProduct ) { commit( Mutates.newFocus, newProduct ) },

    // .. changing state of Slide
    [ Acts.slideState ] ( {commit}, newState ) { commit( Mutates.slideState, newState ) },

    // .. pulse
    [ Acts.pulse ] ( {commit} ) { commit( Mutates.pulse ) },

}

// -- ===================================================================== Getters =======

// .. declare Getters Options
type MyGetters = {
    focusedOn( state: State ): TS.MyProducts;
    slideState( state: State ): TS.SlideState;
    pulse( state: State ): boolean;
}

// .. define Getters
const getters: GetterTree<State, State> & MyGetters = {
    focusedOn: state => state.focusedOn,
    slideState: state => state.slideState,
    pulse: state => state.pulse,
}


// -- ======================================================================= Setup =======

// .. SETUP STORE
export const store: Store = createStore( {
    state,
    mutations,
    actions,
    getters,
    plugins: [ createLogger() ]
} );

// .. release Store
// export function useStore () { return store; }






