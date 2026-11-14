import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const make = (paths: ReactNode) =>
  function Icon({ size = 20, ...rest }: IconProps) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
        {paths}
      </svg>
    );
  };

export const LeafIcon = make(<><path d="M20 4C10 4 4 9 4 16c0 1.5.4 2.9 1 4 1.2.7 2.5 1 4 1 7 0 11-6 11-17z" fill="currentColor" stroke="none" /><path d="M5 20C8 14 12 10 17 7" stroke="#fff" strokeWidth={1.4} /></>);
export const LeavesIcon = make(<><path d="M12 21v-9M12 14c0-4-3-7-8-7 0 4 3 7 8 7zM12 12c0-3.5 2.5-6 7-6 0 3.5-2.5 6-7 6z" /></>);
export const SproutIcon = make(
  <>
    <path d="M12 22V10" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" />
    <path d="M12 10C8 10 5 7 5 3.5C8.5 3.5 12 6.5 12 10Z" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" fill="none" />
    <path d="M12 10C16 10 19 7 19 3.5C15.5 3.5 12 6.5 12 10Z" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" fill="none" />
  </>
);
export const HandSproutIcon = make(
  <>
    <path d="M12 9C8.5 9 5.5 6 5.5 2.5C9 2.5 12 5.5 12 9Z" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round" fill="none" />
    <path d="M12 9C15.5 9 18.5 6 18.5 2.5C15 2.5 12 5.5 12 9Z" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round" fill="none" />
    <path d="M12 9v5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    <rect x="2.5" y="14" width="2.5" height="6.5" rx="0.8" stroke="currentColor" strokeWidth={1.8} fill="none" />
    <path d="M5 16.5h5.5l3-2h4.5a1.8 1.8 0 0 1 1.8 1.8c0 .5-.2 1-.6 1.4L15.5 20.5H7.5l-2.5-1.5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </>
);
export const TractorIcon = make(<><circle cx="7" cy="16" r="3.5" /><circle cx="18" cy="17.5" r="2" /><path d="M3 12h6V5h6l2 5h3v7M9 9h6M10.5 16h5" /></>);
export const DropIcon = make(<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />);
export const AwardIcon = make(<><circle cx="12" cy="9" r="6" /><path d="M8.5 14L7 21l5-3 5 3-1.5-7M12 6l1 2 2 .3-1.5 1.4.4 2L12 10.700 10.100 11.700l.4-2L9 8.300l2-.3z" /></>);
export const UsersIcon = make(<><circle cx="12" cy="8" r="3" /><circle cx="5.500" cy="9.500" r="2.200" /><circle cx="18.500" cy="9.500" r="2.200" /><path d="M6 20c0-3.500 2.700-5.500 6-5.500s6 2 6 5.500M1.500 17c0-2.200 1.500-3.500 3.500-3.500M22.500 17c0-2.200-1.500-3.500-3.500-3.500" /></>);
export const PhoneIcon = make(<path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />);
export const MailIcon = make(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>);
export const PinIcon = make(
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.25 6.3 11.45 6.77 11.9a1.05 1.05 0 0 0 1.46 0c.47-.45 6.77-6.65 6.77-11.9C19.5 5.36 16.14 2 12 2zm0 10.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
    fill="currentColor"
    stroke="none"
  />
);
export const UserIcon = make(<><circle cx="12" cy="8" r="3.800" /><path d="M4.500 20c0-4 3.400-6 7.500-6s7.500 2 7.500 6" /></>);
export const MessageIcon = make(<><path d="M4 5h16v11H9l-5 4z" /><path d="M8.500 10.500h.01M12 10.500h.01M15.500 10.500h.01" strokeWidth={2.400} /></>);
export const ArrowRightIcon = make(<path d="M5 12h14M13 6l6 6-6 6" />);
export const ArrowLeftIcon = make(<path d="M19 12H5M11 6l-6 6 6 6" />);
export const ArrowUpRightIcon = make(<path d="M7 17L17 7M8 7h9v9" />);
export const ChevronDownIcon = make(<path d="M6 9l6 6 6-6" />);
export const ChevronUpIcon = make(<path d="M6 15l6-6 6 6" />);
export const ChevronRightIcon = make(<path d="M9 6l6 6-6 6" />);
export const CheckIcon = make(<path d="M5 12.500l4.500 4.500L19 7.500" />);
export const TargetIcon = make(<><circle cx="11" cy="13" r="7.500" /><circle cx="11" cy="13" r="3.500" /><path d="M11 13l8-8M16 4v4h4" /></>);
export const EyeIcon = make(<><path d="M2 12s3.500-7 10-7 10 7 10 7-3.500 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3.500" fill="currentColor" /></>);
export const SendIcon = make(<path d="M21 3L3 10.500l7 3 3 7zM10 13.500L21 3" fill="currentColor" />);
export function QuoteIcon({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={`rotate-180 ${className}`} aria-hidden="true">
      <path d="M4.5 15.5C3.5 14.2 3 12.8 3 11c0-3.8 2.8-7 6.8-8.5l1.2 1.8C7.5 5.6 6 7.8 5.8 9.5c.6-.3 1.3-.5 2.2-.5 2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5c-1.3 0-2.5-.5-3.5-1.5zm10 0c-1-1.3-1.5-2.7-1.5-4.5 0-3.8 2.8-7 6.8-8.5l1.2 1.8c-3.5 1.3-5 3.5-5.2 5.2.6-.3 1.3-.5 2.2-.5 2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5c-1.3 0-2.5-.5-3.5-1.5z" />
    </svg>
  );
}
export const StarIcon = make(<path d="M12 2.500l2.900 6 6.600.9-4.800 4.600 1.200 6.500-5.900-3.200-5.900 3.200 1.200-6.500L2.500 9.400l6.600-.9z" fill="currentColor" stroke="none" />);
export const MenuIcon = make(<path d="M4 7h16M4 12h16M4 17h16" />);
export const CloseIcon = make(<path d="M6 6l12 12M18 6L6 18" />);
export const FacebookIcon = make(<path d="M14 21v-8h3l.5-3.500H14V7.500c0-1 .5-1.800 2-1.800h1.700V2.700C17.300 2.600 16.300 2.500 15.200 2.500 12.700 2.500 10.500 4 10.500 7v2.500H7.500V13h3v8z" fill="currentColor" stroke="none" />);
export const InstagramIcon = make(<><rect x="4" y="4" width="16" height="16" rx="4.500" /><circle cx="12" cy="12" r="3.700" /><circle cx="16.800" cy="7.200" r=".8" fill="currentColor" /></>);
export const LinkedinIcon = make(<path d="M6.500 9.500v9M6.500 5.800v.1M10.500 18.500v-9M10.500 13c0-2 1.300-3.500 3.200-3.500 2 0 3.300 1.300 3.300 3.800v5.200" strokeWidth={2.300} />);
export const YoutubeIcon = make(
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M6 5.5h12A3.5 3.5 0 0 1 21.5 9v6a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 15V9A3.5 3.5 0 0 1 6 5.5zm4 4v5l4.5-2.5L10 9.5z"
    fill="currentColor"
    stroke="none"
  />
);

/* Mountain flag icon */
export const MountainFlagIcon = make(<><path d="M3 20l6.500-10 3.500 5 2-3 6 8zM9.500 10V3.500l4 1.800-4 1.700" /></>);

const ICONS = {
  leaves: LeavesIcon, sprout: SproutIcon, handSprout: HandSproutIcon, tractor: TractorIcon, drop: DropIcon,
  award: AwardIcon, users: UsersIcon, phone: PhoneIcon, mail: MailIcon, pin: PinIcon, target: TargetIcon, eye: EyeIcon,
} as const;

type IconName = keyof typeof ICONS;

export function NamedIcon({ name, ...props }: IconProps & { name: string }) {
  const Icon = ICONS[name as IconName] ?? LeavesIcon;
  return <Icon {...props} />;
}
