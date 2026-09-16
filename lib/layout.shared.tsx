import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

/** Small Taskclan mark — an emerald rounded tile with a rocket glyph. */
function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <rect width="24" height="24" rx="6" fill="#6a43d7" />
        <path
          d="M12 5.5c2.2 1 3.4 3.1 3.4 5.7 0 1-.2 1.9-.5 2.7l1.2 1.2-2.1.5-.9-.9c-.2.1-.5.2-.8.2h-.6c-.3 0-.6-.1-.8-.2l-.9.9-2.1-.5 1.2-1.2c-.3-.8-.5-1.7-.5-2.7 0-2.6 1.2-4.7 3.4-5.7Z"
          fill="#fff"
        />
        <circle cx="12" cy="10.4" r="1.15" fill="#6a43d7" />
        <path d="M10.5 16.6c.4.8.9 1.4 1.5 1.9.6-.5 1.1-1.1 1.5-1.9-.5.2-1 .3-1.5.3s-1-.1-1.5-.3Z" fill="#fff" />
      </svg>
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
