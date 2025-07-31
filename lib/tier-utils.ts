export type TierLevel = "free" | "silver" | "gold" | "platinum"

const tierHierarchy: Record<TierLevel, number> = {
  free: 0,
  silver: 1,
  gold: 2,
  platinum: 3,
}

export function canAccessTier(userTier: TierLevel, eventTier: TierLevel): boolean {
  return tierHierarchy[userTier] >= tierHierarchy[eventTier]
}

export function getTierColor(tier: TierLevel): string {
  const colors = {
    free: "bg-gray-100 text-gray-800",
    silver: "bg-gray-200 text-gray-900",
    gold: "bg-yellow-100 text-yellow-800",
    platinum: "bg-purple-100 text-purple-800",
  }
  return colors[tier]
}

export function getTierDisplayName(tier: TierLevel): string {
  return tier.charAt(0).toUpperCase() + tier.slice(1)
}
