import type { InputHTMLAttributes } from 'react'
import { Divider } from './Divider'
export interface InputProps extends InputHTMLAttributes <HTMLInputElement> {
  prefix?: string
  suffix?: string
}

export function Input({ prefix, suffix, ...rest }: InputProps) {
  return (
    <div className="bg-input flex items-center rounded-2xl p-4 shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
      {prefix && (
        <>
        <span className="text-muted-foreground text-sm font-medium mr-2">
          {prefix}
        </span>
        <Divider orientation="vertical" />
        </>
      )}
      <input
        className= "text-foreground placeholder:text-muted-foreground w-full bgtransparent text-sm outline-none"
        autoFocus
        {...rest}
      />
      {suffix && (
        <>
        <Divider orientation='vertical'/>
        <span className="text-muted-foreground text-sm font-medium">
          {suffix}
        </span>
        </>
      )}
    </div>
  )
}