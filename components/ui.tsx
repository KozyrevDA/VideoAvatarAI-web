'use client'
import { ReactNode, ButtonHTMLAttributes } from 'react'
import { Loader2 } from 'lucide-react'

export function Btn({
  children, loading, variant = 'primary', className = '', ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean; variant?: 'primary'|'secondary'|'ghost'|'teal' }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    primary:   'bg-purple text-white hover:bg-purple-mid active:scale-[.98] shadow-sm',
    secondary: 'bg-purple-light text-purple hover:bg-purple/20 border border-purple/20',
    ghost:     'text-tx-2 hover:bg-purple-light border border-border',
    teal:      'bg-teal text-white hover:opacity-90 active:scale-[.98]',
  }
  return (
    <button className={`${base} ${variants[variant]} ${className}`} disabled={loading} {...props}>
      {loading && <Loader2 size={14} className="animate-spin"/>}
      {children}
    </button>
  )
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-border shadow-card ${className}`}>
      {children}
    </div>
  )
}

export function Badge({ children, color = 'purple' }: { children: ReactNode; color?: 'purple'|'teal'|'warn'|'gray' }) {
  const c = { purple:'bg-purple-light text-purple', teal:'bg-teal-light text-teal-dark', warn:'bg-warn-bg text-warn', gray:'bg-border text-tx-2' }
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${c[color]}`}>{children}</span>
}

export function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-xs text-tx-2 font-medium uppercase tracking-wide">{label}</label>}
      <input
        className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-tx placeholder:text-tx-3 outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all"
        {...props}
      />
    </div>
  )
}

export function Textarea({ label, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-xs text-tx-2 font-medium uppercase tracking-wide">{label}</label>}
      <textarea
        rows={4}
        className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-tx placeholder:text-tx-3 outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all resize-none"
        {...props}
      />
    </div>
  )
}

export function Spinner() {
  return <div className="flex items-center justify-center p-12"><Loader2 className="animate-spin text-purple" size={32}/></div>
}
