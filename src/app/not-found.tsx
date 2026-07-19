import Link from 'next/link';
import { ArrowLeft, Home, MessageCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-24">
      <div className="aurora" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />

      <div className="container-wide relative text-center">
        <p className="font-display text-[26vw] leading-none text-primary/10 dark:text-white/10 md:text-[220px]">
          404
        </p>
        <div className="-mt-24 md:-mt-40">
          <span className="eyebrow">Lost your way?</span>
          <h1 className="mt-5 text-display-1 text-primary text-balance dark:text-white">
            This pond isn't here.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-primary/70 dark:text-white/70">
            The page you're looking for has moved, been renamed or never existed. Let's get you back to solid
            ground.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-primary">
              <Home className="h-4 w-4" /> Take me home
            </Link>
            <Link href="/#contact" className="btn-ghost">
              <MessageCircle className="h-4 w-4" /> Talk to a human
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:gap-3"
            >
              <ArrowLeft className="h-4 w-4" /> Or view our projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
