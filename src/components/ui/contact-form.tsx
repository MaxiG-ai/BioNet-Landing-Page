import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactForm() {
  const [contactMethod, setContactMethod] = useState<'phone' | 'mail'>('phone');
  const [contactPlaceholder, setContactPlaceholder] = useState('Enter your phone number');

  return (
    <div>
      <p className="text-base md:text-lg mb-4">Want to discuss your options to join?</p>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full p-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-primary" 
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1">Contact Method</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio text-primary" name="contactMethod" value="phone" onChange={() => { setContactMethod('phone'); setContactPlaceholder('Enter your phone number'); }} />
              <span className="ml-2 text-white">Phone</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio text-primary" name="contactMethod" value="mail" onChange={() => { setContactMethod('mail'); setContactPlaceholder('Enter your email address'); }} />
              <span className="ml-2 text-white">Mail</span>
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="contactDetails" className="block text-sm font-medium text-white mb-1">Contact Details</label>
          <input 
            type={contactMethod === 'mail' ? 'email' : 'text'} 
            id="contactDetails" 
            className="w-full p-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-primary" 
            placeholder={contactPlaceholder} />
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl transform transition-transform hover:scale-105">We'll get back to you!</Button>
      </div>
    </div>
  );
}
