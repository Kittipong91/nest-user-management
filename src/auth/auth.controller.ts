import { Controller, Post, Body, HttpCode, HttpStatus, Version } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginDto, LoginResponseDto } from './dto/login.dto';
import { ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiCreatedResponse({ 
    description: 'User created successfully',
    type: CreateUserDto 
  })
  @ApiConflictResponse({ description: 'Username or email already exists' })
  @ApiTags('Authentication')
  @Post('signup')
  @Version('1')
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
  @ApiOkResponse({ 
    description: 'Login successful, returns JWT token',
    type: LoginResponseDto
  })
  @HttpCode(HttpStatus.OK)
  @ApiTags('Authentication')
  @Post('signin')
  @Version('1')
  async signIn(@Body() loginDto: LoginDto) {
    return this.authService.signIn(loginDto);
  }


}