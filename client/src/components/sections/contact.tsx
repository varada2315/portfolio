import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";

const formSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", message: "" },
  });

  return (
    <div id="contact" className="mb-32 scroll-mt-24">
      <div className="max-w-2xl mx-auto">
        <Block title="Final Cap Block" className="p-12 border-4 bg-secondary/5" depth={true}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-black uppercase tracking-tighter mb-4">Structure Complete</h2>
            <p className="text-muted-foreground">The final piece of the assembly. Let's build together.</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(() => {})} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="EMAIL@ASSEMBLY.COM" {...field} className="h-16 rounded-xl border-2 border-border bg-white font-bold tracking-widest" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="WHAT SHALL WE BUILD?" className="min-h-[150px] rounded-xl border-2 border-border bg-white font-bold tracking-widest" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full h-16 rounded-xl bg-foreground text-background font-black uppercase tracking-widest hover:bg-foreground/90 transition-all border-b-8 border-black/20">
                Send Final Piece
              </Button>
            </form>
          </Form>

          <div className="flex justify-center gap-8 mt-12 opacity-50">
            <a href="#" className="font-black hover:text-primary transition-colors">LINKEDIN</a>
            <a href="#" className="font-black hover:text-primary transition-colors">GITHUB</a>
          </div>
        </Block>
      </div>
    </div>
  );
}
