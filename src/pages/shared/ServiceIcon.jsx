import {
  Brain,
  ChatsCircle,
  Cloud,
  CloudArrowUp,
  Code,
  DeviceMobile,
  GitBranch,
  Globe,
  PaintBrush,
  PlugsConnected,
  Robot,
  ShieldCheck,
  ShoppingCart,
  Stack,
  Wrench,
} from '@phosphor-icons/react'

const ICON_MAP = {
  Globe,
  DeviceMobile,
  Code,
  CloudArrowUp,
  PaintBrush,
  Brain,
  Cloud,
  GitBranch,
  ShieldCheck,
  Stack,
  ShoppingCart,
  ChatsCircle,
  Robot,
  PlugsConnected,
  Wrench,
}

export function ServiceIcon({ name, className, weight = 'duotone' }) {
  const Icon = ICON_MAP[name] ?? Code
  return <Icon className={className} weight={weight} aria-hidden />
}
