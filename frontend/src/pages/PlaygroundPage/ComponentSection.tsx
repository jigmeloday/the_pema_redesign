import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';

const VARIANTS = ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'] as const;
const SIZES = ['xs', 'sm', 'default', 'lg'] as const;

export function ComponentSection() {
  return (
    <section className="space-y-8">
      <h2>UI kit</h2>

      <div className="space-y-3">
        <h3>Buttons</h3>
        <div className="flex flex-wrap items-center gap-3">
          {VARIANTS.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant}
            </Button>
          ))}
          <Button disabled>disabled</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {SIZES.map((size) => (
            <Button key={size} size={size}>
              size {size}
            </Button>
          ))}
          <Button variant="help" size="lg">
            I Need Help
          </Button>
        </div>
      </div>

      <div className="max-w-md space-y-3">
        <h3>Form fields</h3>
        <label className="block space-y-1">
          <span>Name</span>
          <Input placeholder="Your name" />
        </label>
        <label className="block space-y-1">
          <span>Email (error state)</span>
          <Input type="email" defaultValue="not-an-email" aria-invalid />
        </label>
        <div className="space-y-1">
          <span id="select-label" className="block">
            Topic
          </span>
          <Select>
            <SelectTrigger className="w-full" aria-labelledby="select-label">
              <SelectValue placeholder="Choose a topic" />
            </SelectTrigger>
            <SelectContent alignItemWithTrigger={false}>
              <SelectItem value="First option">First option</SelectItem>
              <SelectItem value="Second option">Second option</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <label className="block space-y-1">
          <span>Message</span>
          <Textarea placeholder="How can we help?" />
        </label>
        <Input placeholder="Disabled" aria-label="Disabled example" disabled />
      </div>

      <div className="max-w-md">
        <h3>Accordion</h3>
        <Accordion>
          <AccordionItem value="private">
            <AccordionTrigger>First sample question</AccordionTrigger>
            <AccordionContent>Sample answer text to check spacing.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="cost">
            <AccordionTrigger>Second sample question</AccordionTrigger>
            <AccordionContent>Another sample answer.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="space-y-3">
        <h3>Overlays</h3>
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>Open dialog</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Sample dialog</DialogTitle>
                <DialogDescription>Check the surface, text and buttons.</DialogDescription>
              </DialogHeader>
              <DialogFooter showCloseButton />
            </DialogContent>
          </Dialog>

          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Open menu
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>First item</DropdownMenuItem>
              <DropdownMenuItem>Second item</DropdownMenuItem>
              <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger render={<Button variant="outline" />}>Open sheet</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Sample sheet</SheetTitle>
                <SheetDescription>Useful for a mobile menu.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
}
