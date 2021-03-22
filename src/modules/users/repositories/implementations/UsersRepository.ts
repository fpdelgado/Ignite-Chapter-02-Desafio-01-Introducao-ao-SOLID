import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User();
    user.name = name;
    user.email = email;
    UsersRepository.INSTANCE.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    const user = UsersRepository.INSTANCE.users.find((user) => user.id === id);
    return user;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const user = UsersRepository.INSTANCE.users.find(
      (user) => user.email === email
    );
    return user;
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    const user = UsersRepository.INSTANCE.users.find(
      (user) => user.id === receivedUser.id
    );
    user.admin = true;
    user.updated_at = new Date();
    return user;
  }

  list(): User[] {
    // Complete aqui
    return UsersRepository.INSTANCE.users;
  }
}

export { UsersRepository };