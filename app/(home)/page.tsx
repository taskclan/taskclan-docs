import Link from 'next/link';
import { ArrowRight, Cloud, Terminal, Boxes, Rocket, Database, KeyRound } from 'lucide-react';

const sections = [
  {
    icon: Cloud,
    title: 'Taskclan Cloud',
    description: 'Deploy apps, provision databases, and manage secrets on your own control plane.',
    href: '/docs/cloud',
  },
  {
    icon: Database,
    title: 'Databases',
    description: 'Shared or dedicated Postgres, connection strings, and the schema tools.',
    href: '/docs/cloud/databases',
  },
  {
    icon: Terminal,
    title: 'Engine & API',
    description: 'The backend that powers every Taskclan product, and how to call it.',
    href: '/docs/api',
  },
  {
    icon: Rocket,
    title: 'Quickstart',
    description: 'Create your first project and ship it in a few minutes.',
    href: '/docs/getting-started/quickstart',
  },
  {
    icon: Boxes,
    title: 'Products',
    description: 'Guides for Nani, GameNova, Forge3D, FundNest, and the rest of the portfolio.',
    href: '/docs/products',
  },
  {
    icon: KeyRound,
    title: 'CLI',
    description: 'Drive Taskclan Cloud from your terminal and CI.',
    href: '/docs/getting-started/cli',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-fd-border">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, #6a43d7 0, transparent 40%), radial-gradient(circle at 80% 0%, #8b6be0 0, transparent 35%)',
          }}
        />
        <div className="relative mx-auto w-full max-w-5xl px-6 py-20 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-3 py-1 text-xs text-fd-muted-foreground">
            <span className="size-1.5 rounded-full bg-[#8b6be0]" />
            docs.taskclan.com
          </span>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Build, deploy, and run on Taskclan
          </h1>
          <p className="mt-4 max-w-2xl text-balance text-lg text-fd-muted-foreground">
            Everything you need to work with Taskclan Cloud and every Taskclan product — from your
            first deploy to the engine APIs behind it all.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
            >
              Get started <ArrowRight className="size-4" />
            </Link>
            <a
              href="https://cloud.taskclan.com"
              className="inline-flex items-center gap-2 rounded-lg border border-fd-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-fd-accent"
            >
              Open the Console
            </a>
          </div>
        </div>
      </section>

      {/* Section grid */}
      <section className="mx-auto w-full max-w-5xl px-6 py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-xl border border-fd-border bg-fd-card p-5 transition-colors hover:border-fd-primary/50 hover:bg-fd-accent"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 flex items-center gap-1 font-semibold">
                {title}
                <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </h3>
              <p className="mt-1 text-sm text-fd-muted-foreground">{description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
