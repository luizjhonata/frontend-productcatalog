// IUser REPRESENTA O USUÁRIO QUE VAI SER SALVO NO CONTEXTO - ? SERVE PQ ELE NÃO É OBRIGATÓRIO NO PRIMEIRO ACESSO

export interface IUser {
    id?: number;
    username?: string;
    token?: string;
    name?: string;
    roles?: string;
}

// IContext EXTEND O IUser e tem outras FUNÇÕES.

export interface IContext extends IUser {
    authenticate: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

// IAuthProvider É UTILIZADA PARA O NOSSO PROVIDER PODER RECEBER UM CHILDREN

export interface IAuthProvider {
    children: JSX.Element;
}

export interface Products {
    id: number;
    cod: string;
    description: string;
    price: number;
    weight: number;
    details: string;
}