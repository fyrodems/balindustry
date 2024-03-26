'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'

import { cn } from '@/libs/utils'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-5 w-5 shrink-0 rounded-sm border border-solid border-grafit ring-offset-background transition-colors before:-ml-[18px] before:-mt-[18px] before:h-9 before:w-9 before:rounded-full before:bg-orange-200 before:opacity-50 hover:border-black before:hover:absolute hover:before:duration-150 hover:before:animate-in hover:before:zoom-in-75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-1  disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500 data-[state=checked]:text-white data-[state=checked]:before:hidden',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}
    >
      <Check className="h-5 w-5" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
