import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send, Puzzle } from "lucide-react";
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
      title: "Assembly Complete! 🧩",
      description: "You've added the final piece. I'll reach out soon!",
    });
    form.reset();
  }

  return (
    <div id="contact" className="mb-24 scroll-mt-32">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-5xl font-black tracking-tighter">Final <span className="text-primary">Module</span></h2>
        <div className="flex-1 h-2 bg-primary/10 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <Block className="p-10 h-full border-4" variant="purple">
            <div className="p-5 bg-white/40 rounded-2xl w-fit mb-8 shadow-sm">
              <Puzzle className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black mb-8 leading-tight tracking-tight">Let's Connect!</h3>
            <div className="space-y-4">
              <a href="mailto:email@example.com" className="flex items-center gap-4 p-4 rounded-2xl bg-white/20 hover:bg-white/40 transition-all font-black text-xs uppercase tracking-widest">
                <Mail className="w-5 h-5" />
                <span>Mailbox</span>
              </a>
              <a href="https://linkedin.com" className="flex items-center gap-4 p-4 rounded-2xl bg-white/20 hover:bg-white/40 transition-all font-black text-xs uppercase tracking-widest">
                <Linkedin className="w-5 h-5 text-blue-500" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/varada2315" className="flex items-center gap-4 p-4 rounded-2xl bg-white/20 hover:bg-white/40 transition-all font-black text-xs uppercase tracking-widest">
                <Github className="w-5 h-5 text-slate-800" />
                <span>GitHub</span>
              </a>
            </div>
          </Block>
        </div>

        <div className="lg:col-span-8">
          <Block className="p-12 border-4" variant="peach" bounce={false}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-black uppercase tracking-widest text-[10px] opacity-40">Frequency Channel (Email)</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} className="h-16 rounded-2xl border-4 border-primary/10 bg-white/50 px-6 font-bold" />
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
                      <FormLabel className="font-black uppercase tracking-widest text-[10px] opacity-40">Instruction Module (Message)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="What shall we build today?" className="min-h-[180px] rounded-2xl border-4 border-primary/10 bg-white/50 p-6 font-bold" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full h-20 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl shadow-[0_10px_0_0_#9333ea] active:shadow-none active:translate-y-2 transition-all">
                  Launch Message <Send className="ml-2 w-6 h-6" />
                </Button>
              </form>
            </Form>
          </Block>
        </div>
      </div>
    </div>
  );
}
