import { createBrowserRouter, Navigate, RouterProvider, } from 'react-router-dom';
import App from './App';
import { UserListPage } from './pages/UserListPage';
import { UserEditPage } from './pages/UserEditPage';
import { HomePage } from './pages/HomePage';

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
                path: 'users/edit/:id',
                element: <UserEditPage />
            }
        ]
    }
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}