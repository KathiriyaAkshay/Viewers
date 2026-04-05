import React from 'react';

import { cn } from '../../lib/utils';
import { getWhiteLabelFaviconSrc } from '../../utils/whiteLabelFaviconSrc';

import { DialogTitle } from './Dialog';

export function DialogTitleWithWhiteLabelIcon({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const src = getWhiteLabelFaviconSrc();
  return (
    <DialogTitle className={cn('flex items-center gap-2 pr-8', className)}>
      {src ? (
        <img
          src={src}
          alt=""
          className="h-6 w-6 shrink-0"
          aria-hidden
        />
      ) : null}
      <span className="min-w-0 flex-1">{children}</span>
    </DialogTitle>
  );
}
