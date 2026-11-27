import { HOME_SERVICES } from './home.constant';
import { ServiceItem } from './ServiceItem';

export function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-20 px-4 py-16 sm:px-7 lg:px-28 lg:py-24"
    >
      <h2>Our services and programmes</h2>
      <p className="mt-3 text-muted-foreground">
        From prevention to aftercare. Start wherever you are.
      </p>
      <ul className="mt-10 border-t">
        {HOME_SERVICES.map((service) => (
          <ServiceItem key={service.to} {...service} />
        ))}
      </ul>
    </section>
  );
}
