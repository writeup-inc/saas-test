import type { Guide } from './catalog-data';

type McpIllustrationProps = {
  slug: Guide['slug'];
};

const lineProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'square' as const,
  strokeLinejoin: 'miter' as const,
  strokeWidth: 2,
  vectorEffect: 'non-scaling-stroke' as const,
};

function IllustrationBody({ slug }: McpIllustrationProps) {
  switch (slug) {
    case 'google-drive':
      return <>
        <path {...lineProps} d="M34 50h58l12 13h101v76H34z" />
        <path {...lineProps} d="M52 82h79v41H52zM65 94h52M65 105h38" />
        <circle {...lineProps} cx="163" cy="101" r="21" />
        <path {...lineProps} className="svg-accent" d="m178 116 17 17" />
      </>;
    case 'slack':
      return <>
        <path {...lineProps} d="M28 53h128v61H74l-23 18v-18H28z" />
        <path {...lineProps} d="M86 79h48M60 93h74" />
        <path {...lineProps} d="M111 75h98v48h-18v16l-21-16h-59" />
        <rect className="svg-accent-fill" x="190" y="43" width="18" height="18" />
      </>;
    case 'notion':
      return <>
        <rect {...lineProps} x="54" y="36" width="132" height="94" />
        <path {...lineProps} d="M39 51v94h132M70 59h76M70 76h96M70 93h96M70 110h58" />
        <path {...lineProps} className="svg-accent" d="M157 52h22v22" />
      </>;
    case 'github':
      return <>
        <circle {...lineProps} cx="57" cy="48" r="11" />
        <circle {...lineProps} cx="57" cy="124" r="11" />
        <circle {...lineProps} cx="175" cy="72" r="11" />
        <path {...lineProps} d="M57 59v54M68 48h36c28 0 20 24 42 24h18" />
        <path {...lineProps} d="M175 83v19c0 14-11 25-25 25H85" />
        <path {...lineProps} className="svg-accent" d="m133 117 12 10-12 10" />
      </>;
    case 'playwright':
      return <>
        <rect {...lineProps} x="25" y="39" width="190" height="105" />
        <path {...lineProps} d="M25 62h190M39 51h1M50 51h1M61 51h1" />
        <path {...lineProps} d="m91 79 26 55 9-22 22-9z" />
        <path {...lineProps} className="svg-accent" d="M165 82h31M181 66v31" />
      </>;
    case 'postgresql':
      return <>
        <ellipse {...lineProps} cx="104" cy="48" rx="65" ry="20" />
        <path {...lineProps} d="M39 48v65c0 11 29 20 65 20s65-9 65-20V48M39 80c0 11 29 20 65 20s65-9 65-20" />
        <path {...lineProps} d="M184 65h31M184 82h22M184 99h31" />
        <rect className="svg-accent-fill" x="188" y="117" width="22" height="9" />
      </>;
    case 'calendar':
      return <>
        <rect {...lineProps} x="34" y="45" width="172" height="98" />
        <path {...lineProps} d="M34 70h172M75 34v22M165 34v22M77 91h18M111 91h18M145 91h18M77 116h18M111 116h18" />
        <rect className="svg-accent-fill" x="142" y="105" width="24" height="24" />
      </>;
    case 'stripe':
      return <>
        <rect {...lineProps} x="25" y="46" width="155" height="96" />
        <path {...lineProps} d="M25 74h155M45 115h47M45 126h29" />
        <path {...lineProps} d="M151 31h63v86h-34M165 51h31M165 66h31M165 81h21" />
        <rect className="svg-accent-fill" x="137" y="91" width="25" height="16" />
      </>;
    default:
      return null;
  }
}

export default function McpIllustration({ slug }: McpIllustrationProps) {
  return (
    <svg className="card-illustration" viewBox="0 0 240 170" aria-hidden="true" focusable="false">
      <IllustrationBody slug={slug} />
    </svg>
  );
}
