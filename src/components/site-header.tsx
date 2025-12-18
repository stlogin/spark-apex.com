import Link from "next/link"

import { Icons } from "@/components/icons"
import { ModeSwitcher } from "@/components/mode-switcher"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="container flex h-14 items-center gap-2">
        <Link href="/" className="flex items-center space-x-1.5">
          <Icons.logo className="size-6" />
          <span className="font-semibold text-lg">Spark Apex</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <ModeSwitcher />
        </div>
      </div>
    </header>
  )
}