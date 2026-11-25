// Class names are written in full so Tailwind can find them.
const COLORS = [
  { name: 'background', className: 'bg-background text-foreground' },
  { name: 'card', className: 'bg-card text-card-foreground' },
  { name: 'primary', className: 'bg-primary text-primary-foreground' },
  { name: 'secondary', className: 'bg-secondary text-secondary-foreground' },
  { name: 'muted', className: 'bg-muted text-muted-foreground' },
  { name: 'accent', className: 'bg-accent text-accent-foreground' },
  { name: 'help', className: 'bg-help text-help-foreground' },
  { name: 'navy', className: 'bg-navy text-navy-foreground' },
  { name: 'destructive', className: 'bg-destructive text-background' },
];

export function ColorSection() {
  return (
    <section className="space-y-4">
      <h2>Colours</h2>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {COLORS.map(({ name, className }) => (
          <li key={name} className={`rounded-lg border px-4 py-8 font-semibold ${className}`}>
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
