import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, Target, ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-light tracking-tight antialiased">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image src="/codewp-logo.png" alt="CodeWithPurpose Logo" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-medium text-green-800">CodeWithPurpose</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-800 transition-colors">
                Home
              </Link>
              <Link href="/programs" className="text-gray-700 hover:text-green-800 transition-colors">
                Programs
              </Link>
              <Link href="/about" className="text-green-800 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-800 transition-colors">
                Contact
              </Link>
            </div>

            <Button className="bg-green-800 hover:bg-green-900 text-white" asChild>
              <Link href="/">Join Our Mission</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-green-800 hover:text-green-900 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-medium text-gray-900 mb-6">What is CodeWithPurpose?</h1>
            <p className="text-xl text-green-600 leading-relaxed">
              We're more than just a coding bootcamp. We're a movement that believes education and giving back should go
              hand in hand.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-green-800" />
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">Our Foundation</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our organization is built on the idea that education and philanthropy can go hand-in-hand. We offer a
                  virtual tech-focused bootcamp designed to equip students with the latest skills and knowledge in
                  technology. By enrolling in our bootcamp, students not only gain valuable expertise but also
                  contribute to the greater good.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-green-800" />
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our mission is centered on a deepened dedication to the community. We allocate 50% of the revenue from course
                  fees to local charities, ensuring that our impact extends beyond the classroom. This approach creates
                  a unique and exciting blend of learning and giving back.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-green-800" />
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">The Impact</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Through this initiative, students can develop their technical skills while knowing that they are
                  making a positive difference in their community. Every line of code you write, every project you
                  complete, and every skill you master contributes to something bigger than yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-xl text-green-600">The values that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-800" />
              </div>
              <h3 className="text-xl font-medium mb-3">Purpose Over Profit</h3>
              <p className="text-gray-600">
                We measure success not just by what our students learn, but by the positive impact we create together in
                our communities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-800" />
              </div>
              <h3 className="text-xl font-medium mb-3">Community First</h3>
              <p className="text-gray-600">
                Every decision we make is filtered through one question: "How does this serve our community better?"
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-800" />
              </div>
              <h3 className="text-xl font-medium mb-3">Real Impact</h3>
              <p className="text-gray-600">
                We're not interested in feel-good gestures. We track our donations, measure our impact, and ensure every
                dollar makes a real difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-6">Ready to be part of something bigger?</h2>
          <p className="text-xl text-green-600 mb-8">
            Join our community of learners who are changing their lives while changing their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white" asChild>
              <Link href="/programs">View Our Programs</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-green-800 text-green-800 hover:bg-teal-50" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
