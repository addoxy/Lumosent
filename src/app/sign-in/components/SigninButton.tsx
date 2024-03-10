'use client';

import { DiscordIcon, GithubIcon, GoogleIcon } from '@/components/Icons';
import { cn } from '@/utils/utils';
import { signIn } from 'next-auth/react';

interface SignInButtonProps {
  name: string;
  brand: string;
}

const SigninButton = (props: SignInButtonProps) => {
  const { name, brand } = props;

  return (
    <button
      className={cn(
        'flex w-80 items-center justify-center gap-x-3 rounded-md py-4 text-base font-medium shadow-md transition-all delay-100 duration-200 ease-in-out',
        brand === 'google' && 'bg-zinc-200 text-zinc-800 hover:bg-zinc-400',
        brand !== 'google' && 'bg-zinc-800 text-zinc-300 hover:bg-zinc-900'
      )}
      onClick={() => signIn(brand)}
    >
      {brand === 'google' && <GoogleIcon className="h-4 w-4" />}
      {brand === 'github' && <GithubIcon className="h-4 w-4" />}
      {brand === 'discord' && <DiscordIcon className="h-4 w-4" />}
      Continue with {name}
    </button>
  );
};

export default SigninButton;
