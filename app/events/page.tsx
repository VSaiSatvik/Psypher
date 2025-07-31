import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { supabase, type Event } from "@/lib/supabase"
import { EventCard } from "@/components/event-card"
import { canAccessTier, getTierDisplayName, type TierLevel } from "@/lib/tier-utils"
import { Badge } from "@/components/ui/badge"
import { TierUpgradeButton } from "@/components/tier-upgrade-button"
import { UserButton } from "@clerk/nextjs"

async function getEvents(): Promise<Event[]> {
  const { data, error } = await supabase.from("events").select("*").order("event_date", { ascending: true })

  if (error) {
    console.error("Error fetching events:", error)
    return []
  }

  return data || []
}

export default async function EventsPage() {
  const user = await currentUser()

  if (!user) {
    redirect("/")
  }

  const userTier = (user.publicMetadata?.tier as TierLevel) || "free"
  const events = await getEvents()

  const accessibleEvents = events.filter((event) => canAccessTier(userTier, event.tier))
  const restrictedEvents = events.filter((event) => !canAccessTier(userTier, event.tier))

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Events</h1>
            <Badge className={`${getTierColor(userTier)}`}>{getTierDisplayName(userTier)} Member</Badge>
          </div>
          <div className="flex items-center gap-4">
            <TierUpgradeButton currentTier={userTier} />
            <UserButton />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user.firstName || "Member"}!</h2>
          <p className="text-gray-600">
            You have access to {accessibleEvents.length} events as a {getTierDisplayName(userTier)} member.
          </p>
        </div>

        {accessibleEvents.length > 0 && (
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Available Events</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accessibleEvents.map((event) => (
                <EventCard key={event.id} event={event} canAccess={true} />
              ))}
            </div>
          </section>
        )}

        {restrictedEvents.length > 0 && (
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Upgrade to Access More Events</h3>
            <p className="text-gray-600 mb-6">
              These premium events are available to higher tier members. Upgrade your membership to unlock them!
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restrictedEvents.map((event) => (
                <EventCard key={event.id} event={event} canAccess={false} />
              ))}
            </div>
          </section>
        )}

        {events.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No events available at the moment.</p>
          </div>
        )}
      </main>
    </div>
  )
}

function getTierColor(tier: TierLevel): string {
  const colors = {
    free: "bg-gray-100 text-gray-800",
    silver: "bg-gray-200 text-gray-900",
    gold: "bg-yellow-100 text-yellow-800",
    platinum: "bg-purple-100 text-purple-800",
  }
  return colors[tier]
}
