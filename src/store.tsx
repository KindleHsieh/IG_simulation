import {configureStore} from "@reduxjs/toolkit"
import {combineReducers} from 'redux'
import {homeApi} from "services/homeServices"
import friendReducer from "slices/friendSlices"


const reducers = combineReducers({
    [homeApi.reducerPath]: homeApi.reducer,
    friendReducer
})

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homeApi.middleware)

}
)

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;

export default store;