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
    <div className="mb-24">
       <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
        <span className="w-8 h-1 bg-primary inline-block rounded-full"></span>
        Connect Block
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Block title="Get In Touch" className="flex flex-col justify-between">
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Interested in collaborating or have a question? Reach out through any of these channels.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:email@example.com" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group">
                <div className="p-2 bg-primary/10 rounded group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">email@example.com</span>
              </a>
              
              <a href="https://linkedin.com" target="_blank" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group">
                <div className="p-2 bg-blue-100 text-blue-700 rounded group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="font-medium">LinkedIn Profile</span>
              </a>
              
              <a href="https://github.com/varada2315" target="_blank" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group">
                <div className="p-2 bg-slate-100 text-slate-800 rounded group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <span className="font-medium">GitHub Profile</span>
              </a>
            </div>
          </div>
        </Block>

        <Block title="Send a Message">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} />
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
                      <Textarea placeholder="Let's build something..." className="min-h-[120px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full gap-2">
                Send Message <Send className="w-4 h-4" />
              </Button>
            </form>
          </Form>
        </Block>
      </div>
    </div>
  );
}
