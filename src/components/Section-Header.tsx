interface SectionHeaderProps {
    title: string
    description?: string
  }
  
  export function SectionHeader({ title, description }: SectionHeaderProps) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{description}</p>
        </div>
      </div>
    )
  }
  
  