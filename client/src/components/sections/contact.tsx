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
    defaultValues: {
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <div id="contact" className="mb-24 scroll-mt-24">
      <motion.h2 
        className="text-2xl md:text-3xl font-display font-bold mb-8 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="w-1 h-8 bg-gradient-to-b from-primary via-primary to-secondary rounded-full"></span>
        Final Block
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info */}
        <Block 
          className="p-8 bg-gradient-to-br from-primary/10 to-card" 
          tilt={true}
          lift={true}
          title="Get In Touch"
        >
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Let's build something amazing together. Reach out through any channel.
            </p>
            
            <motion.a 
              href="mailto:email@example.com"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
              whileHover={{ x: 4 }}
            >
              <div className="p-2 bg-primary/20 rounded group-hover:bg-primary/40 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-white">Email</span>
            </motion.a>
            
            <motion.a 
              href="https://linkedin.com" 
              target="_blank"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
              whileHover={{ x: 4 }}
            >
              <div className="p-2 bg-blue-500/20 rounded group-hover:bg-blue-500/40 transition-colors">
                <Linkedin className="w-5 h-5 text-blue-400" />
              </div>
              <span className="font-medium text-white">LinkedIn</span>
            </motion.a>
            
            <motion.a 
              href="https://github.com/varada2315" 
              target="_blank"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
              whileHover={{ x: 4 }}
            >
              <div className="p-2 bg-slate-500/20 rounded group-hover:bg-slate-500/40 transition-colors">
                <Github className="w-5 h-5 text-slate-300" />
              </div>
              <span className="font-medium text-white">GitHub</span>
            </motion.a>
          </div>
        </Block>

        {/* Contact Form */}
        <Block 
          className="p-8 bg-gradient-to-br from-secondary/10 to-card"
          tilt={true}
          lift={true}
          title="Send Message"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="your@email.com" 
                        {...field}
                        className="bg-card/50 border-primary/30 focus:border-primary"
                      />
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
                      <Textarea 
                        placeholder="Let's build something..." 
                        className="min-h-[120px] bg-card/50 border-primary/30 focus:border-primary" 
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full gap-2 bg-secondary hover:bg-secondary/90 text-card font-semibold shadow-lg shadow-secondary/40"
              >
                Send Message <Send className="w-4 h-4" />
              </Button>
            </form>
          </Form>
        </Block>
      </div>
    </div>
  );
}
