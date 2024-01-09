import { createBrowserRouter, Navigate, RouterProvider, } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage';
import { UserListPage } from './pages/UserListPage';
import { UserCreatePage } from './pages/UserCreatePage';
import { UserEditPage } from './pages/UserEditPage';
import { UserDeletePage } from './pages/UserDeletePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { 
                index: true, 
                element: <HomePage />},
            { 
                path: 'users', 
                element: <UserListPage />
            },
            { 
                path: 'users/create',
                element: <UserCreatePage />
            },
            { 
                path: 'users/delete/:id',
                element: <UserDeletePage />
            },
            { 
                path: 'users/edit/:id',
                element: <UserEditPage />
            }
        ]
    }
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}