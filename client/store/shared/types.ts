export const GET_TODOS: string = 'GET_TODOS';

export type ActionType<
    Ac extends {
        [key: string]: (...args: any[]) => { type: string; payload?: unknown };
    },
    A = { [key in keyof Ac]: ReturnType<Ac[key]> }
    > = A[keyof A];