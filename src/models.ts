export enum accessOptions{
    administrator = 'administrador',
    manager = 'gerente',
    employee = 'funcionário',
    undefined = 'Não definido'
  }
  
  interface IPerson {
    fullName: string;
    address?: string[];
  }

  export interface IUser extends IPerson{
    register?: string | number;
    access?: accessOptions;
    active?: boolean
  }


