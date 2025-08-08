import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitToGoogleSheets } from "@/lib/contact";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setStatus('idle');

    const data = {
      name: form.elements.namedItem('name') as HTMLInputElement,
      email: form.elements.namedItem('email') as HTMLInputElement,
      message: form.elements.namedItem('message') as HTMLInputElement,
    };

    try {
      const result = await submitToGoogleSheets({
        name: data.name.value,
        email: data.email.value,
        message: data.message.value,
      });
      
      if (result.success) {
        setStatus('success');
        // Reset form fields individually
        data.name.value = '';
        data.email.value = '';
        data.message.value = '';
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          name="name"
          placeholder="Your Name"
          required
          disabled={isSubmitting}
        />
      </div>
      <div>
        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          disabled={isSubmitting}
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Your Message"
          required
          disabled={isSubmitting}
        />
      </div>
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
      
      {status === 'success' && (
        <p className="text-green-500">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-500">Failed to send message. Please try again.</p>
      )}
    </form>
  );
}
