import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'
import { List, X, CaretDown } from '@phosphor-icons/react'
import { navigation } from '@/data/navigation'
import { company } from '@/data/company'
import { Button } from '@/components/buttons/Button'
import { cn } from '@/utils/cn'

function DesktopDropdown({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false)
      }}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors duration-150 hover:text-text cursor-pointer"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <CaretDown className={cn('size-3.5 transition-transform duration-150', open && 'rotate-180')} />
      </button>
      <div
        className={cn(
          'absolute left-0 top-full z-50 pt-2 transition-[opacity,transform] duration-200 ease-[var(--ease-out-strong)]',
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-1 opacity-0',
        )}
      >
        <div
          className={cn(
            'rounded-xl border border-border bg-surface-elevated/95 p-3 shadow-[var(--shadow-lg)] backdrop-blur-md',
            item.mega ? 'grid w-[34rem] grid-cols-2 gap-1' : 'min-w-[14rem]',
          )}
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors duration-150 hover:bg-white/5 hover:text-text"
              onClick={() => setOpen(false)}
            >
              <span className="block font-medium text-text">{child.label}</span>
              {child.description ? (
                <span className="mt-0.5 block text-xs text-muted">{child.description}</span>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setHidden(y > lastY && y > 120)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color,backdrop-filter,height] duration-300 ease-[var(--ease-out-strong)]',
        hidden && !mobileOpen ? '-translate-y-full' : 'translate-y-0',
        scrolled
          ? 'border-b border-border bg-bg/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-[4.25rem]">
        <Link to="/" className="font-display text-lg font-bold tracking-tight text-text">
          {company.name}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navigation.primary.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.label} item={item} />
            ) : (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150',
                    isActive ? 'text-text' : 'text-muted hover:text-text',
                  )
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to={navigation.cta.href}>{navigation.cta.label}</Link>
          </Button>

          <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface/60 text-text lg:hidden cursor-pointer"
                aria-label="Open menu"
              >
                <List className="size-5" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-[60] bg-bg/80 backdrop-blur-sm data-[state=open]:animate-in" />
              <Dialog.Content className="fixed inset-0 z-[70] flex flex-col bg-bg p-6 outline-none">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="font-display text-lg font-bold">
                    {company.name}
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="inline-flex size-10 items-center justify-center rounded-lg border border-border cursor-pointer"
                      aria-label="Close menu"
                    >
                      <X className="size-5" />
                    </button>
                  </Dialog.Close>
                </div>
                <nav className="mt-10 flex flex-1 flex-col gap-2 overflow-y-auto" aria-label="Mobile">
                  {navigation.primary.map((item) => (
                    <div key={item.label} className="border-b border-border/60 pb-3">
                      {item.href && !item.children ? (
                        <Link to={item.href} className="block py-2 text-2xl font-display font-semibold">
                          {item.label}
                        </Link>
                      ) : (
                        <>
                          <p className="py-2 text-2xl font-display font-semibold">{item.label}</p>
                          <div className="mt-1 grid gap-1">
                            {item.children?.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                className="rounded-lg px-2 py-2 text-muted hover:text-text"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </nav>
                <Button asChild size="lg" className="mt-4 w-full">
                  <Link to={navigation.cta.href}>{navigation.cta.label}</Link>
                </Button>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  )
}
