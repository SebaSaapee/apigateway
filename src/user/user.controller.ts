import { Controller, Post , Body, Get, Param, Put,Delete, UseGuards} from '@nestjs/common';
import { ClientProxyEcommerce } from 'common/proxy/client-proxy';
import { UserDTO } from './dto/user.dto';
import { Observable } from 'rxjs';
import { IUser } from 'common/interfaces/user.interface';
import { UserMSG } from 'common/proxy/constants';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
@ApiTags('user')
@UseGuards(JwtAuthGuard)
@Controller('api/v2/user')
export class UserController {
    constructor (private readonly clientProxy: ClientProxyEcommerce){}
    private _clientProxyUser = this.clientProxy.clientProxyUsers();

    @Post()
    create(@Body() userDTO:UserDTO): Observable<IUser>{
        return this._clientProxyUser.send(UserMSG.CREATE, userDTO);

    }
    @Get()
    findAll(): Observable<IUser[]>{
        return this._clientProxyUser.send(UserMSG.FIND_ALL,'');
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<IUser>{
        return this._clientProxyUser.send(UserMSG.FIND_ONE,id);
    }

    @Put(':id')
    update(@Param('id')id:string, @Body() userDTO:UserDTO): Observable<IUser>{
        return this._clientProxyUser.send(UserMSG.UPDATE,{id,userDTO});
    }

    @Delete(':id')
    delete(@Param('id') id:string): Observable<any>{
        return this._clientProxyUser.send(UserMSG.DELETE,id);
    }
    
}
