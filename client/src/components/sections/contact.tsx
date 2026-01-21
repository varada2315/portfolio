import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";

const formSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message Sent! 🧩",
      description: "You've placed the final piece of the puzzle. I'll be in touch soon!",
    });
    form.reset();
  }

  return (
    <div id="contact" className="mb-24 scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold">Final Puzzle Block</h2>
        <div className="flex-1 h-px bg-border border-dashed border-t-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 space-y-4">
          <Block className="p-8 h-full" variant="purple">
            <h3 className="text-xl font-bold mb-6">Let's Connect! 🧩</h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white/40 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Email</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white/40 transition-colors">
                <Linkedin className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white/40 transition-colors">
                <Github className="w-5 h-5 text-slate-700" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </Block>
        </div>

        <div className="md:col-span-8">
          <Block className="p-10" variant="peach" bounce={false}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} className="rounded-xl border-2 border-primary/10 bg-white/50" />
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
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="What shall we build today?" className="min-h-[150px] rounded-xl border-2 border-primary/10 bg-white/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-soft">
                  Send Piece <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Form>
          </Block>
        </div>
      </div>
    </div>
  );
}
