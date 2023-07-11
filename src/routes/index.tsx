import { createBrowserRouter, Link, Outlet } from 'react-router-dom';

import App from '../App.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '/usuarios',
        element: <><div>usuarios</div>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <Link to="/usuarios">A</Link>
            </li>
            <li>
              <Link to="/usuarios/cadastro">A</Link>
            </li>
          </ul>
        <Outlet /></>,
        children:[
          {
            path:'cadastro',
            element: <div>Cadastro de usuários</div>
          }
        ]
      },
      {
        path: '/mercadorias',
        element: <div>mercadorias</div>,
      },
      {
        path: '/embalagens',
        element: <div>embalagens</div>,
      },
      {
        path: '/lojas',
        element: <div>lojas</div>,
      },
      {
        path: '/vendedores',
        element: <div>vendedores</div>,
      },
      {
        path: '/estoque',
        element: <div>estoque</div>,
      }
    ]
  },
])

export default router;