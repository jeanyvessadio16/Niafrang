import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { services } from "@/data/services";
import { images } from "@/data/images";
import { MapPin, Home, Utensils, ChevronRight, Compass } from "lucide-react";
import Link from "next/link";

export default function HomePage() {


  return (
    <div className="bg-slate-50 relative selection:bg-emerald-200">
      {/* HERO SECTION */}
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/plage.jpg"
            alt="Plages de Niafrang"
            fill
            className="object-cover object-center scale-105 animate-in slide-in-from-bottom-4 duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent mix-blend-multiply" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center mt-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Compass className="w-4 h-4" />
            <span>Destination Casamance</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight sm:leading-none mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            Niafrang village
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 inline-block pb-2">
              touristique en Casamance.
            </span>
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl text-white/80 font-light leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            Évadez-vous dans un village balnéaire authentique où la nature
            sauvage embrasse une culture vibrante et chaleureuse.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500 w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 py-7 text-lg font-medium shadow-lg shadow-emerald-900/40 transition-all hover:scale-105"
            >
              À propos de Niafrang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md rounded-full px-8 py-7 text-lg font-medium transition-all"
            >
              Découvrir Niafrang
            </Button>
          </div>
        </div>
      </main>

      {/* ABOUT SECTION */}
      <section className="relative py-24 md:py-32 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative z-10 transform transition-transform hover:scale-[1.02] duration-500">
              <Image
                src="/images/mangrove.jpg"
                alt="Mangrove de Niafrang"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-emerald-500/20 rounded-3xl z-0" />
            <div className="absolute top-10 -right-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-60 z-0" />
          </div>

          <div className="w-full lg:w-1/2 space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-px bg-emerald-600"></span>
              <h2 className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">
                À propos de Niafrang
              </h2>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15]">
              Une harmonie parfaite entre <span className="italic font-light text-slate-700">nature et traditions</span>.
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Plongez au cœur de la Casamance, où Niafrang vous invite à une
              aventure authentique. Ici, la nature sauvage rencontre une culture
              riche et chaleureuse, vous permettant de vivre des moments
              inoubliables en harmonie totale avec l'environnement.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
              >
                Lire notre histoire
                <span className="bg-emerald-100 group-hover:bg-emerald-200 p-2 rounded-full transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY BENTO GRID */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-emerald-600"></span>
                <h2 className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">
                  Galerie immersive
                </h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Paysages à couper le souffle.
              </h3>
            </div>
            <Button variant="outline" className="rounded-full shrink-0 border-slate-200 text-slate-700 hover:bg-slate-50 px-6">
              Voir toute la galerie
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative group rounded-3xl overflow-hidden cursor-pointer aspect-video"
              >
                <Image
                  src={image.src}
                  alt={image.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-2xl font-bold text-white mb-2">{image.name}</h4>
                  <p className="text-white/80 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 px-6 lg:px-12 bg-slate-50 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 justify-center mb-2">
              <span className="w-8 h-px bg-emerald-600"></span>
              <h2 className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">
                Nos Expériences
              </h2>
              <span className="w-8 h-px bg-emerald-600"></span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900">
              Ce que nous offrons
            </h3>
            <p className="text-lg text-slate-600">
              Profitez de services pensés pour rendre votre séjour aussi confortable
              qu'inoubliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent =
                service.icon === "MapPin"
                  ? MapPin
                  : service.icon === "Home"
                    ? Home
                    : Utensils;
              return (
                <Card
                  key={service.id}
                  className="group bg-white/70 backdrop-blur-xl border-white/80 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-900/10 rounded-[2rem] transition-all duration-300 hover:-translate-y-2 border-transparent hover:border-emerald-100/50 overflow-hidden"
                >
                  <CardHeader className="p-6 pb-0">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 isolate relative">
                      <div className="absolute inset-0 bg-emerald-600 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
                      <IconComponent className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                      {service.name}
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-4">
                    <Link
                      href="#"
                      className="inline-flex items-center text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors uppercase tracking-wider"
                    >
                      En savoir plus
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
