import { 
    ActionContext, 
    ActionTree, 
    GetterTree, 
    MutationTree ,
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
    createStore,
    // createLogger
}                                       from 'vuex'

// -- ================================================================ declarations =======

// .. declare registered Items
export enum MyProducts { "fitored", "dora", "n_word", "canzone" }

// ..  declare About Object
type About = {
    origin: MyProducts|null;
    context: string|null;
}

// .. declare AugmentedActionContext
type AAC = Omit< ActionContext<State, State>, "commit" > & {
    commit <K extends keyof MyMutations> (
        key: K,
        payload: Parameters<MyMutations[K]>[1]
    ): ReturnType<MyMutations[K]>;
};

// .. decalre Store
type Store = Omit< VuexStore<State>, "commit"|"dispatch"|"getters" > & {

    commit < K extends keyof MyMutations, P extends Parameters<MyMutations[K]>[1] > (
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<MyMutations[K]>;

    dispatch <K extends keyof MyActions > (
        key: K,
        paylaod: Parameters<MyActions[K]>[1],
        opations?: DispatchOptions
    ): ReturnType<MyActions[K]>;

    getters: { [K in keyof MyGetters]: ReturnType<MyGetters[K]> };

};

// -- ======================================================================= State =======

// .. declare State
type State = {
    about: About;
}

// .. define  State
const state: State = {

    about: { origin: null, context: null },

}

// -- =================================================================== Mutations =======

// .. declare Mutation-Options
enum Mutates {
    AboutOrigin  = "(un)SET_Origin_of_Current_About",
    AboutContext = "(un)SET_Context_of_Current_About",
}

// .. declare Mutations
type MyMutations<S = State> = {
    [ Mutates.AboutOrigin  ] ( state: S , payload: MyProducts|null ): void;
    [ Mutates.AboutContext ] ( state: S , payload: string|null ): void;
}

// .. define Mutations 
const mutations: MutationTree<State> & MyMutations = {

    // .. Origin of About
    [ Mutates.AboutOrigin ] ( state, payload ) { state.about.origin = payload },

    // .. Context of About
    [ Mutates.AboutContext ] ( state, payload ) { state.about.context = payload }

}

// -- ===================================================================== Actions =======

// .. declare Action-Options
export enum Acts {
    About = "(un)SET_About_Parameters",
}

// .. declare Action Interface
interface MyActions {
    [ Acts.About ] ( {commit}: AAC, payload: About|null ): void;
}

// .. define Actions
const actions: ActionTree<State, State> & MyActions = {
    // .. change Descriptiotn
    [ Acts.About ] ( {commit}, payload ) {
        commit( Mutates.AboutOrigin, payload ? payload.origin : null ),
        commit( Mutates.AboutContext, payload ? payload.context : null )
    }
}

// -- ===================================================================== Getters =======

// .. declare Getters Options
type MyGetters = {
    currentAbout( state: State ): MyProducts|null;
}

// .. define Getters
const getters: GetterTree<State, State> & MyGetters = {
    currentAbout: state => state.about.origin,
}


// -- ======================================================================= Setup =======

// .. SETUP STORE
export const store: Store = createStore( {
    state,
    mutations,
    actions,
    getters,
    // plugins: [ createLogger() ]
} );

// .. release Store
// export function useStore () { return store; }






