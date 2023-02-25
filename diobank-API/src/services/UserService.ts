import { v4 as uuidv4 } from 'uuid';
const id = uuidv4();

export interface User {
    id: string,
    name: string
    email: string
}

const db = [
    {
        id: '3c862a2e-221a-41ef-a28c-ac230e50f9c7',
        name: "Jones",
        email: "jones@dio.com",
    }
]

export class UserService {
    db: User[]

    constructor(
        database = db
    ){
        this.db = database
    }

    createUser = ( name: string, email: string) => {
        const user = {
            id: uuidv4(),
            name,
            email
          }

        this.db.push(user)
        console.log('DB atualizado', this.db)
    }

    getAllUsers = () => {
        return this.db
    }

    findUserById = (id: string): User | undefined => {
        return this.db.find(user => user.id === id);
      }

    deleteUser = (userId: string) => {
        const userIndex = this.db.findIndex((user) => user.email === userId);
        if (userIndex !== -1) {
          this.db.splice(userIndex, 1);
        }
    }
}