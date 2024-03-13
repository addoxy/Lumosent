import { cn } from '../utils/utils';

type IconProps = {
  className: string;
};

export const TrackerIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M20.172 6.75h-1.861l-4.566 4.564a1.874 1.874 0 1 1-1.06-1.06l4.565-4.565V3.828a.94.94 0 0 1 .275-.664l1.73-1.73a.249.249 0 0 1 .25-.063c.089.026.155.1.173.191l.46 2.301l2.3.46c.09.018.164.084.19.173a.25.25 0 0 1-.062.249l-1.731 1.73a.937.937 0 0 1-.663.275"
      ></path>
      <path
        fill="currentColor"
        d="M2.625 12A9.375 9.375 0 0 0 12 21.375A9.375 9.375 0 0 0 21.375 12c0-.898-.126-1.766-.361-2.587A.75.75 0 0 1 22.455 9c.274.954.42 1.96.42 3c0 6.006-4.869 10.875-10.875 10.875S1.125 18.006 1.125 12S5.994 1.125 12 1.125c1.015-.001 2.024.14 3 .419a.75.75 0 1 1-.413 1.442A9.39 9.39 0 0 0 12 2.625A9.375 9.375 0 0 0 2.625 12"
      ></path>
      <path
        fill="currentColor"
        d="M7.125 12a4.874 4.874 0 1 0 9.717-.569a.748.748 0 0 1 1.047-.798c.251.112.42.351.442.625a6.373 6.373 0 0 1-10.836 5.253a6.376 6.376 0 0 1 5.236-10.844a.75.75 0 1 1-.17 1.49A4.876 4.876 0 0 0 7.125 12"
      ></path>
    </svg>
  );
};

export const DashboardIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.557 2.75H4.682A1.932 1.932 0 0 0 2.75 4.682v3.875a1.942 1.942 0 0 0 1.932 1.942h3.875a1.942 1.942 0 0 0 1.942-1.942V4.682A1.942 1.942 0 0 0 8.557 2.75m10.761 0h-3.875a1.942 1.942 0 0 0-1.942 1.932v3.875a1.943 1.943 0 0 0 1.942 1.942h3.875a1.942 1.942 0 0 0 1.932-1.942V4.682a1.932 1.932 0 0 0-1.932-1.932m0 10.75h-3.875a1.942 1.942 0 0 0-1.942 1.933v3.875a1.942 1.942 0 0 0 1.942 1.942h3.875a1.942 1.942 0 0 0 1.932-1.942v-3.875a1.932 1.932 0 0 0-1.932-1.932M8.557 13.5H4.682a1.943 1.943 0 0 0-1.932 1.943v3.875a1.932 1.932 0 0 0 1.932 1.932h3.875a1.942 1.942 0 0 0 1.942-1.932v-3.875a1.942 1.942 0 0 0-1.942-1.942"
      ></path>
    </svg>
  );
};

export const KitIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={4}
      >
        <path
          strokeLinecap="round"
          d="M8 25v13a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V25"
        ></path>
        <path d="M5 15a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></path>
        <path
          strokeLinecap="round"
          d="M31 13V9a2 2 0 0 0-2-2H19a2 2 0 0 0-2 2v4m-2 10v6m18-6v6"
        ></path>
      </g>
    </svg>
  );
};

export const SettingsIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m88-29.84q.06-2.16 0-4.32l14.92-18.64a8 8 0 0 0 1.48-7.06a107.21 107.21 0 0 0-10.88-26.25a8 8 0 0 0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186 40.54a8 8 0 0 0-3.94-6a107.71 107.71 0 0 0-26.25-10.87a8 8 0 0 0-7.06 1.49L130.16 40h-4.32L107.2 25.11a8 8 0 0 0-7.06-1.48a107.6 107.6 0 0 0-26.25 10.88a8 8 0 0 0-3.93 6l-2.64 23.76q-1.56 1.49-3 3L40.54 70a8 8 0 0 0-6 3.94a107.71 107.71 0 0 0-10.87 26.25a8 8 0 0 0 1.49 7.06L40 125.84v4.32L25.11 148.8a8 8 0 0 0-1.48 7.06a107.21 107.21 0 0 0 10.88 26.25a8 8 0 0 0 6 3.93l23.72 2.64q1.49 1.56 3 3L70 215.46a8 8 0 0 0 3.94 6a107.71 107.71 0 0 0 26.25 10.87a8 8 0 0 0 7.06-1.49L125.84 216q2.16.06 4.32 0l18.64 14.92a8 8 0 0 0 7.06 1.48a107.21 107.21 0 0 0 26.25-10.88a8 8 0 0 0 3.93-6l2.64-23.72q1.56-1.48 3-3l23.78-2.8a8 8 0 0 0 6-3.94a107.71 107.71 0 0 0 10.87-26.25a8 8 0 0 0-1.49-7.06Zm-16.1-6.5a73.93 73.93 0 0 1 0 8.68a8 8 0 0 0 1.74 5.48l14.19 17.73a91.57 91.57 0 0 1-6.23 15l-22.6 2.56a8 8 0 0 0-5.1 2.64a74.11 74.11 0 0 1-6.14 6.14a8 8 0 0 0-2.64 5.1l-2.51 22.58a91.32 91.32 0 0 1-15 6.23l-17.74-14.19a8 8 0 0 0-5-1.75h-.48a73.93 73.93 0 0 1-8.68 0a8 8 0 0 0-5.48 1.74l-17.78 14.2a91.57 91.57 0 0 1-15-6.23L82.89 187a8 8 0 0 0-2.64-5.1a74.11 74.11 0 0 1-6.14-6.14a8 8 0 0 0-5.1-2.64l-22.58-2.52a91.32 91.32 0 0 1-6.23-15l14.19-17.74a8 8 0 0 0 1.74-5.48a73.93 73.93 0 0 1 0-8.68a8 8 0 0 0-1.74-5.48L40.2 100.45a91.57 91.57 0 0 1 6.23-15L69 82.89a8 8 0 0 0 5.1-2.64a74.11 74.11 0 0 1 6.14-6.14A8 8 0 0 0 82.89 69l2.51-22.57a91.32 91.32 0 0 1 15-6.23l17.74 14.19a8 8 0 0 0 5.48 1.74a73.93 73.93 0 0 1 8.68 0a8 8 0 0 0 5.48-1.74l17.77-14.19a91.57 91.57 0 0 1 15 6.23L173.11 69a8 8 0 0 0 2.64 5.1a74.11 74.11 0 0 1 6.14 6.14a8 8 0 0 0 5.1 2.64l22.58 2.51a91.32 91.32 0 0 1 6.23 15l-14.19 17.74a8 8 0 0 0-1.74 5.53Z"
      ></path>
    </svg>
  );
};

export const SignoutIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M112 216a8 8 0 0 1-8 8H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h56a8 8 0 0 1 0 16H48v160h56a8 8 0 0 1 8 8m109.66-93.66l-40-40a8 8 0 0 0-11.32 11.32L196.69 120H104a8 8 0 0 0 0 16h92.69l-26.35 26.34a8 8 0 0 0 11.32 11.32l40-40a8 8 0 0 0 0-11.32"
      ></path>
    </svg>
  );
};

export const CheckIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01m204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0c-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0c1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263c-12.512-12.496-32.768-12.496-45.28 0"
      ></path>
    </svg>
  );
};

export const FireIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M8 16c3.314 0 6-2 6-5.5c0-1.5-.5-4-2.5-6c.25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6c-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75c0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5c-.179 1-.25 2 1 3c.625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"
      ></path>
    </svg>
  );
};

export const GoldIcon = ({
  className,
  fill,
}: {
  className: string;
  fill?: string;
}) => {
  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill={fill || '#f1b32b'}></circle>
        <path
          fill="#09090b"
          d="M15.75 4C9.26 4 4 9.26 4 15.75S9.26 27.5 15.75 27.5S27.5 22.24 27.5 15.75A11.75 11.75 0 0 0 15.75 4m0 20.57a8.82 8.82 0 1 1 0-17.64a8.82 8.82 0 0 1 0 17.64m-2.93-8.81l2.94 4.4l2.92-4.4l-2.92-4.41z"
        ></path>
      </g>
    </svg>
  );
};

export const HeartIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
      ></path>
    </svg>
  );
};

export const ThreeDotsIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-84-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m136 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16"
      ></path>
    </svg>
  );
};

export const CrossIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.066 8.995a.75.75 0 1 0-1.06-1.061L12 10.939L8.995 7.934a.75.75 0 1 0-1.06 1.06L10.938 12l-3.005 3.005a.75.75 0 0 0 1.06 1.06L12 13.06l3.005 3.006a.75.75 0 0 0 1.06-1.06L13.062 12z" />
    </svg>
  );
};

export const GoogleIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301c1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08z"
      />
    </svg>
  );
};

export const GithubIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"
      />
    </svg>
  );
};

export const DiscordIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011a.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0a8.258 8.258 0 0 0-.412-.833a.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02a.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059a.051.051 0 0 0-.018-.011a8.875 8.875 0 0 1-1.248-.595a.05.05 0 0 1-.02-.066a.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085a8.254 8.254 0 0 1-1.249.594a.05.05 0 0 0-.03.03a.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019a13.235 13.235 0 0 0 4.001-2.02a.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612c0-.889.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613c0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612c0-.889.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613c0 .888-.631 1.612-1.438 1.612"
      />
    </svg>
  );
};

export const Logo = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="35" height="35" rx="11.5" />
      <path d="M12 12L23.1864 23.1864" strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
};

export const DownArrowIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M8 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l4.15 4.15l4.14-4.14c.2-.2.51-.2.71 0c.2.2.2.51 0 .71l-4.5 4.5c-.1.1-.23.15-.35.15Z"
      ></path>
    </svg>
  );
};

export const GraphIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m7 14l2.293-2.293a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0L17 10m0 0v2.5m0-2.5h-2.5"
        ></path>
      </g>
    </svg>
  );
};

export const Graph = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      width="591"
      height="260"
      viewBox="0 0 591 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M224.084 243.905H176.827C175.547 243.903 174.32 243.394 173.415 242.489C172.511 241.585 172.002 240.358 172 239.078V173.934C172.002 172.654 172.511 171.427 173.415 170.522C174.32 169.618 175.547 169.109 176.827 169.107H224.084C225.364 169.109 226.591 169.618 227.496 170.522C228.401 171.427 228.91 172.654 228.911 173.934V239.078C228.91 240.358 228.401 241.585 227.496 242.489C226.591 243.394 225.364 243.903 224.084 243.905Z"
        fill="#3F3F46"
      />
      <path
        d="M138.084 243.905H90.8269C89.5472 243.903 88.3204 243.394 87.4155 242.489C86.5106 241.585 86.0015 240.358 86 239.078V173.934C86.0015 172.654 86.5106 171.427 87.4155 170.522C88.3204 169.618 89.5472 169.109 90.8269 169.107H138.084C139.364 169.109 140.591 169.618 141.496 170.522C142.401 171.427 142.91 172.654 142.911 173.934V239.078C142.91 240.358 142.401 241.585 141.496 242.489C140.591 243.394 139.364 243.903 138.084 243.905Z"
        fill="#3F3F46"
      />
      <path
        d="M52.0842 242.907H4.82687C3.54721 242.906 2.32036 242.479 1.41547 241.719C0.51057 240.959 0.0015272 239.929 0 238.855V184.16C0.0015272 183.085 0.51057 182.055 1.41547 181.295C2.32036 180.536 3.54721 180.108 4.82687 180.107H52.0842C53.3639 180.108 54.5907 180.536 55.4956 181.295C56.4005 182.055 56.9095 183.085 56.9111 184.16V238.855C56.9095 239.929 56.4005 240.959 55.4956 241.719C54.5907 242.479 53.3639 242.906 52.0842 242.907Z"
        fill="#3F3F46"
      />
      <path
        d="M310.264 243.905H263.007C261.727 243.903 260.5 243.394 259.595 242.489C258.69 241.585 258.181 240.358 258.18 239.078V112.144C258.181 110.865 258.69 109.638 259.595 108.733C260.5 107.828 261.727 107.319 263.007 107.318H310.264C311.544 107.319 312.77 107.828 313.675 108.733C314.58 109.638 315.089 110.865 315.091 112.144V239.078C315.089 240.358 314.58 241.585 313.675 242.489C312.77 243.394 311.544 243.903 310.264 243.905Z"
        fill="#3F3F46"
      />
      <path
        d="M396.444 243.905H349.186C347.907 243.903 346.68 243.394 345.775 242.489C344.87 241.585 344.361 240.358 344.359 239.078V173.934C344.361 172.654 344.87 171.427 345.775 170.522C346.68 169.618 347.907 169.109 349.186 169.107H396.444C397.723 169.109 398.95 169.618 399.855 170.522C400.76 171.427 401.269 172.654 401.27 173.934V239.078C401.269 240.358 400.76 241.585 399.855 242.489C398.95 243.394 397.723 243.903 396.444 243.905Z"
        fill="#3F3F46"
      />
      <path
        d="M482.623 243.905H435.366C434.115 243.932 432.905 243.462 432 242.598C431.096 241.734 430.57 240.547 430.539 239.297V87.5355C430.57 86.285 431.096 85.0979 432 84.2342C432.905 83.3706 434.115 82.9007 435.366 82.9276H482.623C483.874 82.9007 485.084 83.3706 485.989 84.2342C486.893 85.0979 487.419 86.285 487.45 87.5355V239.297C487.419 240.547 486.894 241.734 485.989 242.598C485.084 243.462 483.874 243.932 482.623 243.905Z"
        fill="#3F3F46"
      />
      <path
        d="M568.803 243.905H521.545C520.266 243.903 519.039 243.394 518.134 242.489C517.229 241.585 516.72 240.358 516.719 239.078V43.8512C516.72 42.5715 517.229 41.3447 518.134 40.4398C519.039 39.535 520.266 39.0261 521.545 39.0247H568.803C570.082 39.0261 571.309 39.535 572.214 40.4398C573.119 41.3447 573.628 42.5715 573.63 43.8512V239.078C573.628 240.358 573.119 241.585 572.214 242.489C571.309 243.394 570.082 243.903 568.803 243.905Z"
        fill="#3F3F46"
      />
      <path
        d="M200.456 149.595C205.844 149.595 210.212 145.227 210.212 139.839C210.212 134.45 205.844 130.082 200.456 130.082C195.067 130.082 190.699 134.45 190.699 139.839C190.699 145.227 195.067 149.595 200.456 149.595Z"
        fill="#22C55E"
      />
      <path
        d="M119.756 149.512C125.144 149.512 129.512 145.144 129.512 139.756C129.512 134.368 125.144 130 119.756 130C114.368 130 110 134.368 110 139.756C110 145.144 114.368 149.512 119.756 149.512Z"
        fill="#22C55E"
      />
      <path
        d="M27.7562 169.512C33.1444 169.512 37.5124 165.144 37.5124 159.756C37.5124 154.368 33.1444 150 27.7562 150C22.368 150 18 154.368 18 159.756C18 165.144 22.368 169.512 27.7562 169.512Z"
        fill="#22C55E"
      />
      <path
        d="M286.635 86.1796C292.024 86.1796 296.392 81.8116 296.392 76.4234C296.392 71.0352 292.024 66.6672 286.635 66.6672C281.247 66.6672 276.879 71.0352 276.879 76.4234C276.879 81.8116 281.247 86.1796 286.635 86.1796Z"
        fill="#22C55E"
      />
      <path
        d="M372.815 149.595C378.203 149.595 382.571 145.227 382.571 139.839C382.571 134.45 378.203 130.082 372.815 130.082C367.427 130.082 363.059 134.45 363.059 139.839C363.059 145.227 367.427 149.595 372.815 149.595Z"
        fill="#22C55E"
      />
      <path
        d="M458.994 55.2851C464.383 55.2851 468.751 50.9171 468.751 45.5289C468.751 40.1407 464.383 35.7727 458.994 35.7727C453.606 35.7727 449.238 40.1407 449.238 45.5289C449.238 50.9171 453.606 55.2851 458.994 55.2851Z"
        fill="#22C55E"
      />
      <path
        d="M545.174 19.5124C550.562 19.5124 554.93 15.1444 554.93 9.75618C554.93 4.36799 550.562 0 545.174 0C539.786 0 535.418 4.36799 535.418 9.75618C535.418 15.1444 539.786 19.5124 545.174 19.5124Z"
        fill="#22C55E"
      />
      <path
        d="M373.021 142.024L286.635 77.321L201.431 141.14L199.481 138.537L286.635 73.257L372.609 137.653L458.044 44.159L458.387 44.02L544.566 9.297L545.782 12.314L459.945 46.898L373.021 142.024Z"
        fill="#22C55E"
      />
      <path
        d="M585.566 259.47H538.309C537.029 259.469 535.802 258.96 534.897 258.055C533.992 257.15 533.483 255.923 533.482 254.644V59.4168C533.483 58.1372 533.992 56.9103 534.897 56.0055C535.802 55.1007 537.029 54.5918 538.309 54.5903H585.566C586.846 54.5918 588.072 55.1007 588.977 56.0055C589.882 56.9103 590.391 58.1372 590.393 59.4168V254.644C590.391 255.923 589.882 257.15 588.977 258.055C588.072 258.96 586.846 259.469 585.566 259.47Z"
        fill="#22C55E"
      />
      <line
        x1="200"
        y1="140.5"
        x2="120"
        y2="140.5"
        stroke="#22C55E"
        stroke-width="3"
      />
      <line
        x1="120.334"
        y1="140.462"
        x2="28.3338"
        y2="161.462"
        stroke="#22C55E"
        stroke-width="3"
      />
    </svg>
  );
};

export const CustomizeIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M16.687 18.365q-.55-.125-.928-.33q-.378-.204-.73-.597l-.517.21q-.137.05-.268.016t-.211-.164l-.139-.23q-.1-.132-.079-.287q.022-.156.147-.262l.42-.34q-.184-.512-.184-1.016q0-.503.185-1.034l-.421-.36q-.125-.106-.156-.252q-.031-.146.069-.277l.158-.25q.08-.13.211-.164t.268.016l.517.21q.333-.373.74-.588q.406-.214.918-.34l.07-.503q.031-.156.134-.259q.103-.102.265-.102h.277q.161 0 .264.102q.103.103.134.26l.07.503q.512.106.91.33q.397.224.749.597l.517-.21q.136-.05.267-.016t.212.164l.157.25q.1.131.07.277q-.031.146-.156.252l-.421.36q.204.55.194 1.044q-.01.494-.213 1.006l.42.34q.087.067.147.223t-.06.325l-.138.231q-.081.13-.212.164q-.13.034-.267-.016l-.517-.21q-.352.374-.73.588q-.378.214-.928.34l-.071.503q-.031.156-.134.259q-.103.103-.264.103h-.277q-.162 0-.265-.103q-.103-.103-.133-.259zm.607-.865q.883 0 1.519-.636q.635-.635.635-1.518t-.636-1.518q-.635-.636-1.518-.636q-.882 0-1.518.636q-.636.635-.636 1.518t.636 1.518q.636.636 1.518.636M5.615 19q-.69 0-1.152-.462Q4 18.075 4 17.385V4.615q0-.69.463-1.152Q4.925 3 5.615 3h12.77q.69 0 1.152.463q.463.462.463 1.152v5.612q-.244-.148-.485-.247q-.24-.1-.515-.174v-5.19q0-.27-.173-.443T18.385 4H5.615q-.269 0-.442.173T5 4.615v9h3.57q.376 0 .563.119q.186.118.311.362q.293.556.746.91q.454.354 1.012.504q.083.984.457 1.877q.374.892 1.058 1.613z"
      />
    </svg>
  );
};
