import { routerReducer, RouterState } from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AuthenticationActions } from '../store/action/login.actions';
import * as authentication from '../store/reducer/login.reducer';

export interface AppState {
  authentication: authentication.State;
  router: RouterState;
}

export const reducers: ActionReducerMap<AppState, AuthenticationActions>  = {
  authentication: authentication.reducer,
  router: routerReducer
};

export const selectAuthenticationState = createFeatureSelector<AppState>('authentication');
