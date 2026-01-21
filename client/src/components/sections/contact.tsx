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
      title: "Assembly Complete! ✨",
      description: "Message sent successfully. I'll be in touch soon!",
    });
    form.reset();
  }

  return (
    <div id="contact" className="mb-24 scroll-mt-32">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-4xl font-black tracking-tight">Final <span className="text-primary">Module</span></h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-4">
          <Block className="p-10 h-full border-2" variant="primary">
            <h3 className="text-3xl font-bold mb-8 tracking-tight">Connect</h3>
            <div className="space-y-4">
              <a href="mailto:varadakumbhar2004@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-white hover:shadow-md transition-all font-bold text-xs uppercase tracking-widest">
                <Mail className="w-5 h-5 text-primary" />
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/k-varada-854b69280/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white hover:shadow-md transition-all font-bold text-xs uppercase tracking-widest">
                <Linkedin className="w-5 h-5 text-blue-500" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/varada2315" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white hover:shadow-md transition-all font-bold text-xs uppercase tracking-widest">
                <Github className="w-5 h-5 text-slate-800" />
                <span>GitHub</span>
              </a>
            </div>
          </Block>
        </div>

        <div className="lg:col-span-8">
          <Block className="p-12" variant="default" bounce={false}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] font-bold uppercase tracking-widest opacity-40">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} className="h-14 rounded-2xl border-2 border-border bg-background px-6 font-bold" />
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
                      <FormLabel className="text-[10px] font-bold uppercase tracking-widest opacity-40">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can I help you today?" className="min-h-[150px] rounded-2xl border-2 border-border bg-background p-6 font-bold" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full h-16 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-xl shadow-primary/20 transition-all">
                  Send Message <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </Form>
          </Block>
        </div>
      </div>
    </div>
  );
}
