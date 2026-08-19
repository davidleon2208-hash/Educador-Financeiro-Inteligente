interface dividerProps{
  orientation?: 'horizontal' | 'vertical';
  spacing?: number;
  className?: string
}

export function Divider({ 
  orientation = 'horizontal',
  spacing = 16,
  className,
}: dividerProps) {
  const style =
    orientation === 'horizontal'
      ? { margin: `${spacing}px 0` }
      : { margin: `0 ${spacing}px` }
    
  const classNamesByOrientation = {
    horizontal: 'w-full h-px',
    vertical: 'self-stretch w-px'
  }

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      style={style}
      className={['bg-border', classNamesByOrientation[orientation], className]
      .filter(Boolean)
      .join(' ')}
    />
  )
}