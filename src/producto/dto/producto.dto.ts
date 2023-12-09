import{ApiProperty} from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, isEmail } from 'class-validator';

export class ProductoDTO{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly nombre: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly descripcion : string;
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    readonly precio : string;
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    readonly image : string;
 
 
}