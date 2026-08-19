import { Clock, Moon, Sun, TrendingUp, Wallet } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from './Button'
import { useTheme } from '@/hooks/useTheme'

export function Header() {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="border-b border-(--border) px-6 py-3">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-primary flex h-9 w-9 items-center justify-center rounded-full">
            <Wallet size={20} className="text-primary-foreground" />
          </div>
          <span className="text-lg">
            <span className="text-muted-foreground font-medium">Plano</span>
            <span className="font-extrabold">.AI</span>
          </span>
        </div>
        {/* Actions Buttons */}
        <div className="flex items-center gap-1">
          <Button
            variant="secondary"
            icon={TrendingUp}
            onClick={() => void navigate('/')}
          >
            <span className="hidden sm:inline">Nova Simulação</span>
          </Button>

          <Button
            variant="ghost"
            icon={Clock}
            onClick={() => void navigate('/historico')}
          >
            <span className="hidden sm:inline">Histórico</span>
          </Button>
          <Button
            aria-label={`Mudar tema ${theme === 'light' ? 'para escuro' : 'para claro'}`}
            variant="ghost"
            icon={theme === 'light' ? Moon : Sun}/* {theme === 'light' ? '🌙' : '🌞'} */
            onClick={toggleTheme}
          />
          

        </div>
      </nav>
    </header>
  )
}
