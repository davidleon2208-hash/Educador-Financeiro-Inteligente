import { Clock, TrendingUp, Wallet } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from './Button'


export function Header() {
    const navigate = useNavigate()
  return (
    <header className="border-b border-(--border) px-6 py-3">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary">
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
          onClick={() => void navigate('/historico')}>
            <span className="hidden sm:inline">Histórico</span>
          </Button>
        
        </div>
      </nav>
    </header>
  )
}
