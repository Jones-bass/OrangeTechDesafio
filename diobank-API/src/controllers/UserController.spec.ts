import { UserController } from "./UserController";
import { Request } from 'express'
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { UserService } from "../services/UserService";

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
        getAllUsers: jest.fn(),
        deleteUser: jest.fn()
    }
    
    const userController = new UserController(mockUserService as UserService);

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Jones',
                email: 'jonesbass@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado' })
    })

    it('Deve retornar erro 400 se o usuário não informar o name', () => {
        const mockRequest = {
            body: {
                name: "",
                email: 'jonesbass@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Name obrigatório' })
    })

    it('Deve retornar erro 400 se o usuário não informar o email', () => {
        const mockRequest = {
            body: {
                name: 'Jones',
                email: ''
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Email obrigatório' })
    })
    
    it('deve excluir o usuário com o id correspondente do banco de dados', () => {
        const userService = new UserService([{ id: '1', name: 'João', email: 'joao@example.com' }]);
        const userId = '1';
  
        userService.deleteUser(userId);
  
        expect(userService.getAllUsers()).toHaveLength(0);
      });
  
      it('deve retornar falso se o usuário com o id correspondente não for encontrado', () => {
        const userService = new UserService([{ id: '1', name: 'João', email: 'joao@example.com' }]);
        const userId = '2';
  
        const result = userService.deleteUser(userId);
  
        expect(result).toBeFalsy();
        expect(userService.getAllUsers()).toHaveLength(1);
      });
})
