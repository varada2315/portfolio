import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send, MessageSquare } from "lucide-react";
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
    <div id="contact" className="mb-24 scroll-mt-32 relative">
      <div className="flex items-center gap-6 mb-16 relative z-10">
        <h2 className="text-4xl font-black tracking-tight uppercase tracking-[0.1em]">
          Final <span className="text-primary">Module</span>
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-6">
          <Block className="p-10 border-2 bg-white/40" variant="primary">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-black mb-2 tracking-tight">Open for Collaboration</h3>
                <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Response within 24 hours</p>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: "Email", icon: Mail, value: "varadakumbhar2004@gmail.com", href: "mailto:varadakumbhar2004@gmail.com" },
                  { label: "LinkedIn", icon: Linkedin, value: "/in/k-varada", href: "https://www.linkedin.com/in/k-varada-854b69280/" },
                  { label: "GitHub", icon: Github, value: "@varada2315", href: "https://github.com/varada2315" }
                ].map((social) => (
                  <motion.a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-5 p-4 rounded-3xl bg-white border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all group"
                  >
                    <div className="p-3 bg-primary/5 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{social.label}</span>
                      <span className="text-sm font-bold tracking-tight">{social.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </Block>
        </div>

        <div className="lg:col-span-8">
          <Block className="p-12 bg-white/40 backdrop-blur-3xl" variant="default" bounce={false}>
            <div className="mb-10 flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-2xl font-black tracking-tight">Transmission</h4>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 ml-1">Protocol: Sender Identification</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} className="h-16 rounded-[1.5rem] border-2 border-border/50 bg-white/50 px-8 font-bold text-lg focus:border-primary transition-all shadow-sm" />
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
                      <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 ml-1">Protocol: Data Payload</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe the project scope or inquiry..." className="min-h-[180px] rounded-[1.5rem] border-2 border-border/50 bg-white/50 p-8 font-bold text-lg focus:border-primary transition-all shadow-sm" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full h-18 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-black text-sm uppercase tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(168,85,247,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Initiate Handshake <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </Form>
          </Block>
        </div>
      </div>
    </div>
  );
}
