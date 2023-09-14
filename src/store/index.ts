import { Middleware, configureStore } from '@reduxjs/toolkit'
import usersReducer from './users/slice'

const persistanceLocalStorageMiddleware:Middleware = (store) => (next) => (action) => {
  console.log('antes de action')
  next(action)
  localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
}

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: [persistanceLocalStorageMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch