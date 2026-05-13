"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Variant } from "@/lib/types"

interface VariantPickerProps {
  variants: Variant[]
  onSelect: (variant: Variant) => void
}

export function VariantPicker({ variants, onSelect }: VariantPickerProps) {
  const [selected, setSelected] = useState<string | null>(
    variants.find((v) => v.availableForSale)?.id ?? null
  )

  const handleSelect = (variant: Variant) => {
    if (!variant.availableForSale) return
    setSelected(variant.id)
    onSelect(variant)
  }

  return (
    <div className="flex flex-wrap gap-2">
      {variants.map((variant) => (
        <Button
          key={variant.id}
          variant="outline"
          size="sm"
          disabled={!variant.availableForSale}
          onClick={() => handleSelect(variant)}
          className={cn(
            "min-w-[3rem]",
            selected === variant.id &&
              "border-primary bg-primary text-primary-foreground",
            !variant.availableForSale && "line-through opacity-40"
          )}
        >
          {variant.title}
        </Button>
      ))}
    </div>
  )
}
