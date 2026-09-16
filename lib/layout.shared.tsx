import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

/** The Taskclan brand mark (public/img/taskclan-mark.svg) + the docs wordmark. */
function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/taskclan-mark.svg"
        alt="Taskclan"
        width={24}
        height={24}
        className="size-6 shrink-0"
      />
      <span className="font-semibold">{appName}</span>
    </div>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
      // The docs live at the root; send the logo home to the docs index.
      url: '/docs',
    },
    // Top-right links to the rest of the Taskclan surface.
    links: [
      {
        text: 'Cloud Console',
        url: 'https://cloud.taskclan.com',
        external: true,
      },
      {
        text: 'taskclan.com',
        url: 'https://taskclan.com',
        external: true,
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
