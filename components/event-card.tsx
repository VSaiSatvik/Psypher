import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import type { Event } from "@/lib/supabase"
import { getTierColor, getTierDisplayName } from "@/lib/tier-utils"
import Image from "next/image"

interface EventCardProps {
  event: Event
  canAccess: boolean
}

export function EventCard({ event, canAccess }: EventCardProps) {
  const eventDate = new Date(event.event_date)

  return (
    <Card className={`transition-all duration-200 hover:shadow-lg ${!canAccess ? "opacity-60" : ""}`}>
      <div className="relative">
        <Image
          src={event.image_url || "/placeholder.svg?height=200&width=300"}
          alt={event.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <Badge className={`absolute top-2 right-2 ${getTierColor(event.tier)}`}>{getTierDisplayName(event.tier)}</Badge>
        {!canAccess && (
          <div className="absolute inset-0 bg-black/50 rounded-t-lg flex items-center justify-center">
            <Badge variant="destructive" className="text-sm">
              Upgrade Required
            </Badge>
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="line-clamp-2">{event.title}</CardTitle>
        <CardDescription className="line-clamp-3">{event.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>
            {eventDate.toLocaleDateString()} at{" "}
            {eventDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
