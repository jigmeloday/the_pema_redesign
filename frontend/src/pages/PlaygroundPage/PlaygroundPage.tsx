import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ColorSection } from './ColorSection';
import { ComponentSection } from './ComponentSection';
import { FeedbackSection } from './FeedbackSection';
import { FontSection } from './FontSection';

export function PlaygroundPage() {
  const [dark, setDark] = useState(false);

  // Dark mode is previewed here only, so remove it when leaving the page.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    return () => document.documentElement.classList.remove('dark');
  }, [dark]);

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1>Playground</h1>
        <Button variant="outline" size="lg" onClick={() => setDark(!dark)}>
          {dark ? 'Light mode' : 'Dark mode'}
        </Button>
      </div>
      <ColorSection />
      <FontSection />
      <ComponentSection />
      <FeedbackSection />
    </div>
  );
}
