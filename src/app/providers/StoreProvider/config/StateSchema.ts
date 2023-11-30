import { CounterScheme } from 'entities_/Counter';
import { UserSchema } from 'entities_/User';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    counter: CounterScheme
    user: UserSchema
    loginForm?: LoginSchema
}
