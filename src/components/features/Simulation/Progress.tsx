interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function StepProgress({ currentStep, totalSteps }: StepProgressProps) {
  const progress = (currentStep / totalSteps) * 100
  return (
    <div className="mb-4">
      <p className="text-sm text-muted-foreground mb-2">
        passo {currentStep} de {totalSteps}
      </p>
      <div className="h-2 w-full rounded-full bg-muted">
        <div
          role="progressbar"
          aria-valuenow={currentStep}
          aria-valuemin={1}
          aria-valuemax={totalSteps}
          aria-label={`Progresso: passo ${currentStep} de ${totalSteps}`}
          className="h-2 w-full rounded-full bg-primary"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}