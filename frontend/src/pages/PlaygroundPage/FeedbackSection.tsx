import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Toaster } from '@/components/ui/toast';
import { toast } from '@/components/ui/toast-manager';

const TOASTS = ['success', 'info', 'warning', 'error', 'loading'] as const;

export function FeedbackSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h3>Switch</h3>
        <label className="flex items-center gap-3">
          <Switch />
          Off by default
        </label>
        <label className="flex items-center gap-3">
          <Switch defaultChecked />
          On by default
        </label>
        <label className="flex items-center gap-3">
          <Switch size="sm" />
          Small
        </label>
        <label className="flex items-center gap-3">
          <Switch disabled />
          Disabled
        </label>
      </div>

      <div className="space-y-3">
        <h3>Toast</h3>
        <Toaster>
          <div className="flex flex-wrap gap-3">
            {TOASTS.map((type) => (
              <Button
                key={type}
                variant="outline"
                onClick={() =>
                  toast.add({
                    type,
                    title: `Sample ${type} message`,
                    description: 'Check the text, icon and close button.',
                  })
                }
              >
                Show {type}
              </Button>
            ))}
          </div>
        </Toaster>
      </div>
    </section>
  );
}
