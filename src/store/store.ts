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
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
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
type Mutations<S = State> = {
    [ MutationTypes.Description ] ( state: S , payload: string ): void;
}
// .. declare Actions Options
export enum ActionTypes {
    Description = "SET_Description"
}
// .. declare Action Interface
interface Actions {
    [ ActionTypes.Description ] ( {commit}: AugmentedActionContext, payload: string ): void;
}
// .. declare Getters Options
type Getters = {
    currentDescription( state: State ): string;
}


// -- ================================================================= definations =======

// .. defien  State
const state: State = {
    description: "",
}
// .. define Mutations 
const mutations: MutationTree<State> & Mutations = {
    [ MutationTypes.Description ] ( state: State, payload: string ) {
        state.description = payload;
    }
}
// .. define Actions
const actions: ActionTree<State, State> & Actions = {
    [ ActionTypes.Description ] ( {commit}, payload: string ) {
        commit( MutationTypes.Description, payload )
    }
}
// .. define Getters
const getters: GetterTree<State, State> & Getters = {
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
        commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]> (
            key: K,
            payload: P,
            options?: CommitOptions
        ): ReturnType<Mutations[K]>;
    }
    &
    {
        getters: { [K in keyof Getters]: ReturnType<Getters[K]> };
    }
    &
    {
        dispatch<K extends keyof Actions> (
            key: K,
            paylaod: Parameters<Actions[K]>[1],
            opations?: DispatchOptions
        ): ReturnType<Actions[K]>;
    }
    ;

// .. release Store
// export function useStore () { return store; }






