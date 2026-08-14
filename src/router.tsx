import { createBrowserRouter } from 'react-router-dom'

import { RootLayout } from './components/layout/RootLayout'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: (
          <>
            <div>Formulario de Simulação</div>
            
          </>
        ),
      },
      {
        path: '/resultados',
        element: <div>Resultados da Simulação</div>,
      },
      {
        path: '/historico',
        element: <div>Histórico de Simulações</div>,
      },
    ],
  },
])
