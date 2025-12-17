import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards , Request, Version, ForbiddenException} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Version('1')
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'Return user data' })
  @ApiResponse({ status: 401, description: 'Unauthorized - Token' })
  @ApiTags('Profile Management')
  getMe(@Request() req) {
    return this.usersService.findOne(req.user.id);
  }

  @Version('1')
  @UseGuards(AuthGuard('jwt'))
  @Patch('me')
  @ApiBearerAuth()
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, description: 'Profile updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiTags('Profile Management')
  update(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(req.user.id, updateUserDto);
  }


  @Version('1')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiTags('Admin Management')
  @Get()
  findAll(@Request() req) {
    this.usersService.checkAdmin(req.user);
    return this.usersService.findAll();
  }

  @Version('1')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiTags('Admin Management')
  @Get(':id')
  findOne(@Request() req,@Param('id') id: string) {
    this.usersService.checkAdmin(req.user);
    return this.usersService.findOne(id);
  }

  @Version('1')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiTags('Admin Management')
  @Delete()
  removeAll(@Request() req ) {
    this.usersService.checkAdmin(req.user);
    return this.usersService.removeAll();
  }

  @Version('1')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiTags('Admin Management')
  @Delete(':id')
  remove(@Request() req, @Param('id') id: string) {
    this.usersService.checkAdmin(req.user); 
    return this.usersService.remove(id);
  }


}
