import React from 'react'
import { useDispatch } from 'react-redux';
import { action, ACCOUNT } from '../../../account/state/actions/account-action';

export function DefaultPage() {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>
                Please login if you have an account. Or Register <button onClick={() => dispatch(action(ACCOUNT.LOGIN))}> click here </button>
            </h1>
        </div>
    );
}