import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientProxyEcommerce } from 'common/proxy/client-proxy';
import { UserMSG } from 'common/proxy/constants';
import { UserDTO } from 'src/user/dto/user.dto';



@Injectable()
export class AuthService {

    constructor(private readonly clientProxy: ClientProxyEcommerce,
                private readonly jwtService: JwtService){}
    
    private _clientProxyUser = this.clientProxy.clientProxyUsers();
    async validateUser(username: string, password:string): Promise<any>{
        const user = await this._clientProxyUser.send(UserMSG.VALID_USER,{
            username,
            password,
        })
        .toPromise();
        
        if(user) {
        return user;  
        }
        
        return null;
  
    }
    async signIn( user : any){
        
        const payload = {
            username: user.username,
            sub: user._id,
            pasword: user.password
        }
        
        return { access_token: this.jwtService.sign(payload), 
                user}

    }

    async signUp(userDTO: UserDTO){
        return await this._clientProxyUser.send(UserMSG.CREATE,userDTO).toPromise();
    }

}
