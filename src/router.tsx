import { createBrowserRouter } from 'react-router-dom'

import { RootLayout } from './components/layout/RootLayout'
import { SimulationFormPage } from './pages/SimulationFormPage'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: (
          <>
            <SimulationFormPage />
            
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
