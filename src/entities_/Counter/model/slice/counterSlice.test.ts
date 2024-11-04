import { CounterScheme } from '../types/counterScheme';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });

    test('should return decremented value', () => {
        const state: CounterScheme = { value: 10 };

        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });

    test('should return incremented value', () => {
        const state: CounterScheme = { value: 10 };

        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
});
