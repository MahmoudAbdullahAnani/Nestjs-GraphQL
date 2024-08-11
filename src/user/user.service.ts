import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

const db = [];

@Injectable()
export class UserService {
  create(createUserInput: CreateUserInput) {
    const user = { ...createUserInput, id: `${Date.now()}` };
    db.push(user);
    return user;
  }

  findAll() {
    return {
      statue: 200,
      data: db,
      count: db.length,
    };
  }

  findOne(userId: string) {
    const userIndex = db.findIndex(({ id }) => id === userId);
    if (userIndex === -1) {
      throw new NotFoundException(`Not Found User on this id: ${userId}`);
    }

    return db[userIndex];
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
