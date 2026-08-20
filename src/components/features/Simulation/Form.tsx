import { FormStep } from "./FormStep"
import { StepProgress } from "./Progress"
import { PiggyBank } from "lucide-react"

export const SimulationForm = () => {
  return (
    <>
    <StepProgress currentStep={1} totalSteps={6} />
    <FormStep
    icon={PiggyBank}
    title="Renda mensal bruta"
    question="Quanto é depositado na sua conta mensalmente contando todas as fontes?"
    inputProps={{
      type: "text",
      placeholder: "ex: R$ 1.000,00",
      prefix: "R$",
      min: 0,
      step: 100,
    }}
    />
    </>
  )
}
