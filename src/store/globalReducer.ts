import { createReducer, createAction, PayloadAction } from '@reduxjs/toolkit';
// import { loggedInUser } from 'app/components/ProtectedRoute/selectors';

export interface DfyProfile {
  activatedAt: number | null;
  address: any;
  birthday: any;
  createdAt: number | null;
  email: string | null;
  id: number | null;
  isActive: true;
  kyc: any;
  links: any;
  name: string;
  pawnShop: any;
  phoneNumber: any;
}
export interface GlobalState {
  loggedInUser: DfyProfile | null;
  wallet: Object | null;
}

const initialState: GlobalState = {
  loggedInUser: null,
  wallet: null,
};

export const profileUser = createAction<DfyProfile | null>('global/user');
export const walletAction = createAction<Object | null>('global/wallet');

const globalReducer = createReducer(initialState, {
  // [profileUser.toString()]: (state, action: PayloadAction<DfyProfile>) => {
  //   state.loggedInUser = action.payload;
  // },
  [walletAction.toString()]: (state, action: PayloadAction<Object>) => {
    state.wallet = action.payload;
  },
});

export default globalReducer;
