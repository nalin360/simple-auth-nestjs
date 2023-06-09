import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { UserSchema } from '../schemas/user.schema';
// export type User = any;
export interface User {
    userId: number;
    username: string;
    password: string;
    role: string;
  }

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private userModel: Model<User>) {}
    private readonly users = [
        {
          userId: 1,
          username: 'papu@gmail.com',
          password: 'papu',
          role:'admin'
        },
        {
          userId: 2,
          username: 'tappu@gmail.com',
          password: 'tappu',
          role:'user'
        },
      ];
      
      async findOneOnly(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
      }

      async findOne(username: string): Promise<User | undefined> {
        return this.userModel.findOne({ username }).exec();
      }
      async create(user: User): Promise<User> {
        const createdUser = new this.userModel(user);
        return createdUser.save();
      }
    
      async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
      }
}
