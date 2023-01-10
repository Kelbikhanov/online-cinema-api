import { ModelType } from '@typegoose/typegoose/lib/types';
import { UserModel } from 'src/user/user.model';
export declare class AuthService {
    private readonly UserModel;
    constructor(UserModel: ModelType<UserModel>);
    register(dto: any): Promise<any>;
}
