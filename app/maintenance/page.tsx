import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rosie Beauty Salon - Not Currently Operating',
  description: 'Rosie Beauty Salon is not currently operating.',
  robots: { index: false, follow: false },
}

export default function MaintenancePage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent" />

      <div className="relative w-full max-w-lg mx-auto px-6 text-center">
        {/* Decorative flourish */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="block w-12 h-px bg-accent-gold/40" />
          <span className="block w-2 h-2 rounded-full bg-accent-gold/30" />
          <span className="block w-12 h-px bg-accent-gold/40" />
        </div>

        {/* Brand name */}
        <h1 className="font-serif text-4xl md:text-5xl text-dark-gray mb-3 tracking-tight">
          Rosie Beauty Salon
        </h1>
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-accent-gold mb-10">
          Elite Aesthetics Salon
        </p>

        {/* Main message card */}
        <div className="bg-white rounded-lg shadow-md px-8 py-10 mb-10 border border-beige/50">
          <div className="w-10 h-10 mx-auto mb-6 rounded-full border-2 border-accent-gold/30 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-accent-gold"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-dark-gray mb-4">
            This business is not currently operating
          </h2>
          <p className="font-sans text-medium-gray text-sm leading-relaxed max-w-sm mx-auto">
            We appreciate your interest. This salon is no longer active at this time.
          </p>
        </div>

        {/* Websies CTA */}
        <div className="space-y-3">
          <p className="font-sans text-sm text-medium-gray">
            Want a beautiful website for your business?
          </p>
          <a
            href="https://websies.co"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block text-sm"
          >
            Visit websies.co
          </a>
          <p className="font-sans text-xs text-medium-gray/60 mt-4">
            Crafted by Websies
          </p>
        </div>

        {/* Decorative flourish */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <span className="block w-12 h-px bg-accent-gold/40" />
          <span className="block w-2 h-2 rounded-full bg-accent-gold/30" />
          <span className="block w-12 h-px bg-accent-gold/40" />
        </div>
      </div>

      {/* Decorative bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent" />
    </div>
  )
}
