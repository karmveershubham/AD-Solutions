import type { LucideIcon } from "lucide-react"

interface ExpertiseCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ExpertiseCard({ icon: Icon, title, description }: ExpertiseCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-4 p-3 bg-primary/10 rounded-full">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

