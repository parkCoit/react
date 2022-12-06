
import { configureStore,
    combineReducers } from "@reduxjs/toolkit"
import logger from "redux-logger"
import todoReducer from 'todos/reducers/todo.reducer'

export const rootReducer = combineReducers({
    todoReducer
})

export const store = configureStore({
    reducer : rootReducer,
    middleware :(getDefaultMiddleware) => getDefaultMiddleware()
                                                    .concat(logger)
})



