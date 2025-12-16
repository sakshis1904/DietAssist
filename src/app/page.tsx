import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import TerminalOverlay from '@/components/TerminalOverlay';
import UserPrograms from '@/components/UserPrograms';

const HomePage = () => {
  return (
    <div className='flex flex-col min-h-screen text-foreground overflow-hidden'>
      <section className='relative z-10 py-24 flex-grow'>
        <div className='container mx-auto px-4'>

          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative'>
            {/* corner */}
            <div className='absolute top-10 left-0 w-40 h-40 border-l-12 border-t-12 border-primary/20' />

            {/* left side content */}
            <div className='lg:col-span-7 space-y-8 relative text-center lg:text-left'>
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <div>
                  <span className="text-foreground">Elevate</span>
                </div>
                <div>
                  <span className="text-primary">Your Fitness</span>
                </div>
                <div className="pt-2">
                  <span className="text-foreground">Through Smart</span>
                </div>
                <div className="pt-2">
                  <span className="text-foreground">AI</span>
                  <span className="text-primary"> Guidance</span>
                </div>
              </h1>

              {/* Separator line */}
              <div className='h-px w-full bg-gradient-to-r from primary via-secondary to-primary opacity-50'></div>

              <p className='text-xl text-muted-foreground w-2/3'>
                Get personalized fitness and nutrition plans designed by smart systems to match your goals.
              </p>

              {/* stats */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-10 py-6 font-mono">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="text-2xl text-primary">1K+</div>
                  <div className="text-xs uppercase tracking-wider">Users Empowered</div>
                </div>
                <div className="hidden md:block h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
                <div className="flex flex-col items-center lg:items-start">
                  <div className="text-2xl text-primary">2 Min</div>
                  <div className="text-xs uppercase tracking-wider">Avg. Response</div>
                </div>
                <div className="hidden md:block h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
                <div className="flex flex-col items-center lg:items-start">
                  <div className="text-2xl text-primary">99%</div>
                  <div className="text-xs uppercase tracking-wider">Satisfaction</div>
                </div>
              </div>

              {/* button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
                <Button
                  size="lg"
                  asChild
                  className="overflow-hidden bg-primary text-primary-foreground px-8 py-6 text-lg font-medium"
                >
                  <Link href="/generate-program" className="flex items-center font-mono">
                    Get Your AI Plan
                    <ArrowRightIcon className="ml-2 size-5" />
                  </Link>
                </Button>
              </div>

            </div>

            {/* right side content */}
            <div className='lg:col-span-5 relative w-full max-w-md lg:max-w-full mx-auto'>
              {/* corner pieces */}
              <div className="absolute -inset-4 pointer-events-none">
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-border" />
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-border" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-border" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-border" />
              </div>
              {/* image container */}
              <div className='relative aspect-square max-w-lg mx-auto'>
                <div className='relaive overflow-hidden rounded-lg bg-cyber-black'>
                  <img src="/hero-ai3.jpg" alt="AI Fitness Coach" className='size-full object-cover object-center' />

                  {/* scan line */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_calc(50%-1px),var(--cyber-glow-primary)_50%,transparent_calc(50%+1px),transparent_100%)] bg-[length:100%_8px] animate-scanline pointer-events-none" />

                  {/* decorations on top of the image */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-primary/40 rounded-full" />

                    <div className="absolute top-1/2 left-0 w-1/4 h-px bg-primary/50" />
                    <div className="absolute top-1/2 right-0 w-1/4 h-px bg-primary/50" />
                    <div className="absolute top-0 left-1/2 h-1/4 w-px bg-primary/50" />
                    <div className="absolute bottom-0 left-1/2 h-1/4 w-px bg-primary/50" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>

                <TerminalOverlay />
              </div>
            </div>

            
            
          </div>
        </div>
      </section>

      <UserPrograms />
      
    </div>
  )
}

export default HomePage