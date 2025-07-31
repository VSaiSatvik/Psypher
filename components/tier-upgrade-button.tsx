"use client"

import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { getTierDisplayName, type TierLevel } from "@/lib/tier-utils"
import { ArrowUp, Check } from "lucide-react"

interface TierUpgradeButtonProps {
  currentTier: TierLevel
}

const tiers: { name: TierLevel; price: string; features: string[] }[] = [
  {
    name: "free",
    price: "Free",
    features: ["Community events", "Basic workshops", "Email support"],
  },
  {
    name: "silver",
    price: "$29/mo",
    features: ["All Free features", "Advanced training", "Priority support", "Networking events"],
  },
  {
    name: "gold",
    price: "$99/mo",
    features: ["All Silver features", "VIP product launches", "Masterclasses", "Direct access to experts"],
  },
  {
    name: "platinum",
    price: "$299/mo",
    features: ["All Gold features", "Executive summits", "Annual gala", "Personal account manager"],
  },
]

export function TierUpgradeButton({ currentTier }: TierUpgradeButtonProps) {
  const { user } = useUser()
  const [isOpen, setIsOpen] = useState(false)
  const [isUpgrading, setIsUpgrading] = useState(false)

  const handleUpgrade = async (newTier: TierLevel) => {
    if (!user) return

    setIsUpgrading(true)
    try {
      await user.update({
        publicMetadata: {
          ...user.publicMetadata,
          tier: newTier,
        },
      })

      // Refresh the page to show updated content
      window.location.reload()
    } catch (error) {
      console.error("Error upgrading tier:", error)
    } finally {
      setIsUpgrading(false)
      setIsOpen(false)
    }
  }

  const availableUpgrades = tiers.filter((tier) => {
    const tierOrder = ["free", "silver", "gold", "platinum"]
    return tierOrder.indexOf(tier.name) > tierOrder.indexOf(currentTier)
  })

  if (currentTier === "platinum") {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2 bg-transparent">
          <ArrowUp className="w-4 h-4" />
          Upgrade Tier
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Upgrade Your Membership</DialogTitle>
          <DialogDescription>
            Unlock more exclusive events and features with a higher tier membership.
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {tiers.map((tier) => {
            const isCurrent = tier.name === currentTier
            const isUpgrade = availableUpgrades.some((t) => t.name === tier.name)

            return (
              <div
                key={tier.name}
                className={`border rounded-lg p-4 ${isCurrent ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{getTierDisplayName(tier.name)}</h3>
                  {isCurrent && <Badge variant="secondary">Current</Badge>}
                </div>

                <div className="text-2xl font-bold mb-4">{tier.price}</div>

                <ul className="space-y-2 mb-4">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {isUpgrade && (
                  <Button onClick={() => handleUpgrade(tier.name)} disabled={isUpgrading} className="w-full">
                    {isUpgrading ? "Upgrading..." : `Upgrade to ${getTierDisplayName(tier.name)}`}
                  </Button>
                )}
              </div>
            )
          })}
        </div>
      </DialogContent>
    </Dialog>
  )
}
