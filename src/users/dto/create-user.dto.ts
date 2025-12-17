import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Matches, MaxLength, MinLength } from 'class-validator';     

export class CreateUserDto {
    @IsString()
    @ApiProperty({ 
    example: 'Kittipong', 
    description: 'Unique username for the account' 
  })
    readonly userName: string;


    @IsEmail()
    @ApiProperty({ 
    example: 'kittipong@gmail.com', 
    description: 'User email address' 
  })
    readonly email: string;


    @IsString()
    @MinLength(8)
    @MaxLength(50)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'Password must contain uppercase, lowercase, number, and special character',
    })
    @ApiProperty({
    example: 'P@ssword123',
    description: 'Must contain uppercase, lowercase, number, and special character',
    minLength: 8,
    maxLength: 50,
    format: 'password', 
  })
    readonly password: string;


    @IsString()
    @ApiProperty({ 
    example: 'Kittipong', 
    description: 'First name' 
  })
    readonly firstName: string;


    @IsString()
    @ApiProperty({ 
    example: 'Tamae', 
    description: 'Last name' 
  })
    readonly lastName: string;
}
