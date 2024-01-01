import { createBrowserRouter, Navigate, RouterProvider, } from 'react-router-dom';
import { UserListPage } from './pages/UserListPage';
import { UserEditPage } from './pages/UserEditPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserListPage />,
        children: [
            { index: true, element: <Navigate to='/users' replace />},
            { 
                path: 'users', 
                element: <UserListPage />,
                children: [
                    { 
                        path: 'edit/:id', 
                        element: <UserEditPage />
                    }
                ]
            }
        ]
    }
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}