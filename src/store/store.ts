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
}                                       from 'vuex'

// .. a bizzare step
type AugmentedActionContext = {
    commit<K extends keyof MyMutations>(
        key: K,
        payload: Parameters<MyMutations[K]>[1]
    ): ReturnType<MyMutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;


// -- ================================================================ declarations =======

// .. declare State
type State = {
    description: string;
}
// .. declare Mutation Options
export enum MutationTypes {
    Description = "SET_Description"
}
// .. declare Mutation
type MyMutations<S = State> = {
    [ MutationTypes.Description ] ( state: S , payload: string ): void;
}
// .. declare Actions Options
export enum ActionTypes {
    Description = "SET_Description"
}
// .. declare Action Interface
interface MyActions {
    [ ActionTypes.Description ] ( {commit}: AugmentedActionContext, payload: string ): void;
}
// .. declare Getters Options
type MyGetters = {
    currentDescription( state: State ): string;
}


// -- ================================================================= definations =======

// .. defien  State
const state: State = {
    description: "",
}
// .. define Mutations 
const mutations: MutationTree<State> & MyMutations = {
    [ MutationTypes.Description ] ( state: State, payload: string ) {
        state.description = payload;
    }
}
// .. define Actions
const actions: ActionTree<State, State> & MyActions = {
    [ ActionTypes.Description ] ( {commit}, payload: string ) {
        commit( MutationTypes.Description, payload )
    }
}
// .. define Getters
const getters: GetterTree<State, State> & MyGetters = {
    currentDescription: state => state.description,
}
// .. define Store
export const store: Store = createStore( {
    state,
    mutations,
    actions,
    getters,
    plugins: [ createLogger() ]
} );

// .. SETUP STORE
type Store = 
    Omit<VuexStore<State>, "commit"|"getters"|"dispatch"> 
    &
    {
        commit<K extends keyof MyMutations, P extends Parameters<MyMutations[K]>[1]> (
            key: K,
            payload: P,
            options?: CommitOptions
        ): ReturnType<MyMutations[K]>;
    }
    &
    {
        getters: { [K in keyof MyGetters]: ReturnType<MyGetters[K]> };
    }
    &
    {
        dispatch<K extends keyof MyActions> (
            key: K,
            paylaod: Parameters<MyActions[K]>[1],
            opations?: DispatchOptions
        ): ReturnType<MyActions[K]>;
    }
    ;

// .. release Store
// export function useStore () { return store; }






