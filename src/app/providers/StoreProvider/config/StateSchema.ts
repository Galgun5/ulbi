import { CounterScheme } from 'entities_/Counter';
import { UserSchema } from 'entities_/User';

export interface StateSchema {
    counter: CounterScheme
    user: UserSchema
}
