import { FOOTER_COLUMNS } from '@/constants/nav.constant';
import { FooterBrand } from './FooterBrand';
import { FooterColumn } from './FooterColumn';
import { FooterHelp } from './FooterHelp';

export function Footer() {
  return (
    <footer className="bg-navy px-4 text-navy-foreground [&_a]:outline-navy-foreground sm:px-7 lg:px-28">
      <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.7fr_1.3fr_1fr_0.6fr]">
        <FooterBrand />
        {FOOTER_COLUMNS.map((column) => (
          <FooterColumn key={column.label} column={column} />
        ))}
      </div>

      <FooterHelp />

      <p className="max-w-none border-t border-navy-foreground/20 py-6 text-sm text-navy-foreground/75">
        © {new Date().getFullYear()} The PEMA Secretariat
      </p>
    </footer>
  );
}
