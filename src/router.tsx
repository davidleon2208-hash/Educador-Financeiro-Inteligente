import { createBrowserRouter } from 'react-router-dom'

import { Button } from './components/Shared/Button'
import { PiggyBank } from 'lucide-react'

export const router = createBrowserRouter([
  {
    children: [
      {
        path: '/',
        element: (
          <>
            <div>Formulario de Simulação</div>
            <Button variant="primary" icon={PiggyBank}>
              Clique Aqui
            </Button>
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
