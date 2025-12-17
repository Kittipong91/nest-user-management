import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ 
    example: 'kittipong@gmail.com', 
    description: 'The identifier for the user (Username or Email)' 
  })
  @IsNotEmpty()
  @IsString()
  identity: string; 

  @ApiProperty({ 
    example: 'P@ssword123!', 
    description: 'The user password',
    format: 'password' 
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class LoginResponseDto {

  @ApiProperty({ 
      example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NDJmNjdjMTFiZTk1Mjk5MTYwZTUyMyIsInVzZXJOYW1lIjoiS2l0dGlwb25nXzQiLCJlbWFpbCI6ImtpdHRpcG9uZ180QGdtYWlsLmNvbSIsImlhdCI6MTc2NTk5NzI2MCwiZXhwIjoxNzY2MDgzNjYwfQ.BovZP8FLXcewdLxsrmfs1zFa77uiXvauLjk3apw8Hss', 
      description: 'JWT token for authenticated access' 
    })  
  accessToken: string;
}