import Image from "next/image"
import { cn } from "@/lib/utils"

interface MascotProps {
  src: string
  alt?: string
  size?: number
  className?: string
}

export function Mascot({
  src,
  alt = "Kody, the CodeWithPurpose koala mascot",
  size = 128,
  className,
}: MascotProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      loading="lazy"
      className={cn(
        "object-contain mix-blend-multiply pointer-events-none select-none",
        className
      )}
    />
  )
}
