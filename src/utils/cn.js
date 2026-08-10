import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path = '') {
  const base = 'https://techmitra.example'
  if (!path) return base
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}
