import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { services } from "@/data/services";
import { MapPin, Home, Utensils } from "lucide-react";

export default function HomePage() {
  // liste image
  const images = [
    {
      id: 1,
      name: "Plages de Niafrang",
      description:
        "Découvrez les plages préservées et cristallines de Niafrang où le sable blanc rencontre les eaux turquoise.",
      src: "/images/plage.jpg",
    },
    {
      id: 2,
      name: "Forêts de Mangroves",
      description:
        "Explorez les mystérieuses mangroves de la Casamance, un écosystème riche et vital pour la région.",
      src: "/images/mangrove.jpg",
    },
    {
      id: 3,
      name: "Arbre Sacré du Fromager",
      description:
        "Visitez le majestueux fromager, symbole spirituel et historique au cœur de Niafrang.",
      src: "/images/fromager.jpg",
    },
  ];
  return (
    <>
      {/* hero section */}
      <main
        style={{
          backgroundImage: "url('/images/plage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="min-h-screen p-10 flex flex-col justify-center items-center bg-black/80">
          <div className="text-center text-white space-y-2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Niafrang village de tourisme en{" "}
              <span className="text-green-800">Casamance</span> au Sénégal
            </h1>
            <p className="text-lg">
              Découvrez Niafrang un village touristque en Casamance où vous
              vivez avec la nature et la culture
            </p>
            <Button
              size={"xl"}
              className="py-2 text-lg bg-green-800 cursor-pointer"
            >
              Découvrir Niafrang
            </Button>
          </div>
        </section>
      </main>

      {/* about */}
      <section className="py-20 px-10 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 relative h-72">
            <Image
              src="/images/mangrove.jpg"
              alt="Mangrove de Niafrang"
              sizes="(min-width: 768px) 50vw, 100vw"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              À propos de Niafrang
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Plongez au cœur de la Casamance, où Niafrang vous invite à une
              aventure authentique. Ici, la nature sauvage rencontre une culture
              riche et chaleureuse, vous permettant de vivre des moments
              inoubliables en harmonie avec l'environnement.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Ressentez l'émotion de marcher sur des plages préservées,
              d'explorer des mangroves mystérieuses et de partager des
              traditions ancestrales avec les habitants. Niafrang n'est pas
              seulement une destination, c'est une expérience qui touche l'âme.
            </p>
            <Button className="bg-green-800 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
              En savoir plus
            </Button>
          </div>
        </div>
      </section>
      {/* images Niafrang */}
      <section className="py-20 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Galerie de Niafrang
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <Card
                key={image.id}
                className=" pt-0 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={image.src}
                    alt={image.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-green-800">
                    {image.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {image.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* nos services */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Nos Services
          </h2>
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
                  className="text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <IconComponent className="h-12 w-12 text-green-800" />
                    </div>
                    <CardTitle className="text-xl text-green-800">
                      {service.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
