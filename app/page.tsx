import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { currentUser } from "@clerk/nextjs/server"

export default async function Home() {
  const user = await currentUser()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Event Showcase</h1>
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link href="/events">
                  <Button variant="outline">View Events</Button>
                </Link>
                <UserButton />
              </>
            ) : (
              <>
                <SignInButton>
                  <Button variant="outline">Sign In</Button>
                </SignInButton>
                <SignUpButton>
                  <Button>Sign Up</Button>
                </SignUpButton>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Exclusive Events for Every Tier</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access premium events based on your membership level. Upgrade your tier to unlock more exclusive
            experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-600">Free</CardTitle>
              <CardDescription>Community events and basic workshops</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">$0</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gray-700">Silver</CardTitle>
              <CardDescription>Advanced training and networking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">$29/mo</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-yellow-600">Gold</CardTitle>
              <CardDescription>VIP access and masterclasses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">$99/mo</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-purple-600">Platinum</CardTitle>
              <CardDescription>Executive summits and galas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">$299/mo</div>
            </CardContent>
          </Card>
        </div>

        {!user && (
          <div className="text-center">
            <p className="text-gray-600 mb-6">Sign up to start viewing events for your tier</p>
            <SignUpButton>
              <Button size="lg">Get Started</Button>
            </SignUpButton>
          </div>
        )}
      </main>
    </div>
  )
}
