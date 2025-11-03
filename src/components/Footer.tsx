import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <footer className="py-12 px-[5%] text-center text-white/50 border-t border-[hsl(var(--cyan))]/10">
      <p>© 2024 Valyd. All rights reserved.</p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="mt-4 text-white/70 hover:text-[hsl(var(--cyan))] transition-colors underline">
            Privacy Policy/Terms & Conditions
          </button>
        </DialogTrigger>
        <DialogContent className="bg-background border-[hsl(var(--cyan))]/20">
          <DialogHeader>
            <DialogTitle>Privacy Policy/Terms & Conditions</DialogTitle>
            <DialogDescription className="pt-4 text-base">
              Valyd is owned by Pollus Group LLC and follows their privacy policy:{" "}
              <a
                href="https://pollus.us/legal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--cyan))] hover:underline font-medium"
              >
                check it here
              </a>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </footer>
  );
};
