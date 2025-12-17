import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {User, UserDocument} from './schemas/user.schema'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; 
import { UserInfo } from 'src/auth/interfaces/jwt-payload.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  checkAdmin(user: UserInfo) {
    if (user.role !== 'admin') {
      throw new ForbiddenException('Admin access only');
    }
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const result = new this.userModel(createUserDto);
    return result.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    const result = this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();   
    return result;
  }

  async remove(id: string) {
    try {
      const result = await this.userModel.findByIdAndDelete(id).exec();
      if (!result) {
        throw new NotFoundException('User not found');
      }
      return result;
    } catch (error) {
      return error
    }
  }

  async findOneByIdentity(identity: string): Promise<User | null> {
    return await this.userModel.findOne({
      $or: [
        { userName: identity },
        { email: identity }
      ],
    }).exec();
  }

  async removeAll() {
    return this.userModel.deleteMany({role: 'user'}).exec();
  }
}
