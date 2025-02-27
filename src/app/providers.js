'use client';

import { Content, Theme } from '@carbon/react';
import TutorialHeader from '@/components/TutorialHeader/TutorialHeader';

export function Providers({ children }) {
  return (
    <div>
      <Theme use="g100">
        <TutorialHeader />
      </Theme>
      <Content>{children}</Content>
      <TutorialHeader />
    </div>
  );
}
