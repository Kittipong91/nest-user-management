import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";


export class UpdateUserDto {
    @ApiPropertyOptional({ 
        example: 'Kittipong', 
        description: 'First name' 
      })
    readonly firstName?: string;

    @ApiPropertyOptional({ 
    example: 'Tamae', 
    description: 'Last name' 
  })
    readonly lastName?: string;
}