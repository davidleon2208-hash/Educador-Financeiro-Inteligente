import type { FormStepProps } from '@/components/features/Simulation/FormStep'
import {
  CalendarClock,
  CreditCard,
  Goal,
  Landmark,
  PiggyBank,
  Wallet,
} from 'lucide-react'


export const simulationFormSteps: FormStepProps[] = [
  {
    id:'income',
    icon: PiggyBank,
    title: 'Renda mensal bruta',
    question:'Quanto é depositado na sua conta mensalmente (somando todas as fontes)?',
    inputProps:{
      placeholder:'ex: 3.000,00',
      prefix:'R$',
      maxLength: 12,
    },
  },
  {
    id:'expenses',
    icon: CreditCard,
    title: 'Custo fixos de vida',
    question:'Quanto você gasta mensalmente com custos fixos (aluguel, água, etc)?',
    inputProps:{
      placeholder:'ex: 1.500,00',
      prefix:'R$',
      maxLength: 12,
    },
  },
  {
    id:'debts',
    icon: Landmark,
    title: 'Dívidas / Parcelas',
    question:'Você tem algum valor compromentido com parcelas ou emprestimos mensalmente?',
    inputProps:{
      placeholder:'ex: 500,00',
      prefix:'R$',
      maxLength: 12,
    },
  },
  {
    id:'goalName',
    icon: Goal,
    title: 'Nome da meta',
    question:'Qual o objetivo que você deseja alcançar?',
    inputProps:{
      placeholder:'ex: Viagem para o Peru',
      maxLength: 50,
    },
  },
  {
    id:'goalAmount',
    icon: Wallet,
    title: 'Custo da meta',
    question:'Quanto custa realizar esse sonho?',
    inputProps:{
      placeholder:'ex: 12.000,00',
      prefix:'R$',
      maxLength: 12,
    },
  },
  {
    id:'goalDeadline',
    icon: CalendarClock,
    title: 'Prazo desejado',
    question:'Em quantos meses você planeja atingir ess objetivo?',
    inputProps:{
      type: 'number',
      placeholder:'ex: 12 meses',
      suffix: 'meses',
      min: 1,
      max: 120,
    },
    submitButtonProps:{
      label: 'Gerar simulação',
      emojiIcon: '☻☻☻',
    },
  }
]