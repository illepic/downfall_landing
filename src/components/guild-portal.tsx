import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>

type Section = {
  title: string
  description: string
  image?: ImageProps & { alt: string }
  link?: { href: string; label: string }
  body?: React.ReactNode
}

const getSections = (images: GuildPortalProps["images"]): Section[] => [
  {
    title: "Discord",
    description:
      "Downfall has moved mainly to Discord for both in-game voice chat and out-of-game collaboration. Discord is free and runs in both a browser and an app.",
    image: { ...images.discord, alt: "Discord logo" },
    link: { href: "https://discord.gg/hXe9rF3", label: "Join the <Downfall> Discord" },
  },
  {
    title: "Facebook",
    description:
      "Though <Downfall> was raiding before Facebook even existed, these days the <Downfall> Facebook page is quite active.",
    image: { ...images.facebook, alt: "Facebook logo" },
    link: { href: "https://www.facebook.com/groups/167901269916918/", label: "Join us on Facebook" },
  },
  {
    title: "Contact",
    description:
      "Keep in touch! If you're looking to get ahold of old guildies, try the Discord or Facebook links. If those don't work, contact Garreth here.",
    body: <ContactForm />,
  },
]

type GuildPortalProps = {
  images: { discord: ImageProps; facebook: ImageProps }
}

export function GuildPortal({ images }: GuildPortalProps) {
  const sections = getSections(images)
  return (
    <nav aria-label="Downfall communities" className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {sections.map((section) => (
        <Dialog key={section.title}>
          <DialogTrigger render={<Button size="lg" className="h-12 w-40 px-6 font-heading text-lg" />}>
            {section.title}
          </DialogTrigger>
          <DialogContent className="gap-6 border border-gold/40 p-8 text-base shadow-2xl sm:max-w-2xl sm:p-10">
            <DialogHeader className="gap-4 border-b border-gold/40 pb-6">
              <DialogTitle className="bg-linear-to-b from-[#f3eee2] to-[#e2c2ab] bg-clip-text text-4xl font-normal text-transparent sm:text-5xl">
                {section.title}
              </DialogTitle>
              <DialogDescription className="text-base leading-relaxed">{section.description}</DialogDescription>
            </DialogHeader>
            {section.image && (
              <img
                {...section.image}
                className="w-full border border-gold/40 bg-black/40 outline outline-offset-[-8px] outline-gold/40"
              />
            )}
            {section.body}
            {section.link && (
              <div>
                <Button size="lg" className="h-12 px-6 font-heading text-lg" nativeButton={false} render={<a href={section.link.href} />}>
                  {section.link.label}
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      ))}
    </nav>
  )
}

function ContactForm() {
  // Posts natively to Netlify Forms; the static stub in index.astro registers "contact-form" at build time.
  return (
    <form name="contact-form" method="POST" className="grid gap-5">
      <input type="hidden" name="form-name" value="contact-form" />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="contact-name">Name</Label>
          <Input id="contact-name" name="name" autoComplete="name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input id="contact-email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea id="contact-message" name="message" rows={4} required />
      </div>
      <div>
        <Button type="submit" size="lg" className="h-12 px-6 font-heading text-lg">
          Send message
        </Button>
      </div>
    </form>
  )
}
