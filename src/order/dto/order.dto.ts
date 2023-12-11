import{ApiProperty} from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class OrderDTO{
    @ApiProperty()
    
    @IsString()
    readonly Nombre: string;
    @ApiProperty()
    
    @IsString()
    readonly Descripcion: string;
    @ApiProperty()
    
    @IsString()
    readonly precio: string;
}