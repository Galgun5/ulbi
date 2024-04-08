import { User } from 'entities_/User';

export interface Comment {
    id: string;
    user: User;
    text: string;
}
