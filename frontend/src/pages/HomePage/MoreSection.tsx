import { HOME_MORE_LINKS } from './home.constant';
import { MoreLink } from './MoreLink';

export function MoreSection() {
  return (
    <section className="bg-muted px-4 py-14 sm:px-7 lg:px-28">
      <h2>More from PEMA</h2>
      <ul className="mt-8 flex flex-wrap gap-3">
        {HOME_MORE_LINKS.map((link) => (
          <MoreLink key={link.to} {...link} />
        ))}
      </ul>
    </section>
  );
}
