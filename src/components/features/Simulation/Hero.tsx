import PiggyBankImage from '@/assets/images/piggy_bank.png'
export function SimulationHero() {
  return (
    <div className="mb-8 text-center">
      <div className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-8">
      <h1 className="text-foreground text-2xl font-semibold sm:text-3xl">
        Vamos Planejar seu Futuro Financeiro!
      </h1>
      <img
        src={PiggyBankImage}
        alt="Imagem de um cofrinho"
        aria-hidden="true"
        className="h-16 w-16 sm:-mt-2 sm:-mt-3"
        />
        
      <p className="text-muted-foreground text-sm">
        Responda algumas perguntas e descubra para ter insights financeiros personalizados.
      </p>
      </div>
    </div>
  )
}