import { User, UserService } from "./UserService";

describe('UserController', () => {
    const mockDb: User[] = []
    const userService = new UserService(mockDb);
    
    it('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser( 'Jones', 'jonesbass@gmail.com.br')
        expect(mockConsole).toBeCalledWith('DB atualizado', mockDb)
    })
})
