import HeaderTitle from "@/components/layout/HeaderTitle";
import Image from "next/image";
import { activities } from "@/data/activity";
import {
  Clock,
  ArrowRight,
  Fish,
  Waves,
  Music,
  Sprout,
  Shell,
  Leaf,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const iconMap: Record<string, any> = {
  Fish,
  Waves,
  Music,
  Sprout,
  Shell,
  Leaf,
};

export default function AboutPage() {
  return (
    <>
      {/* Header title */}
      <div className="relative">
        <HeaderTitle
          title="Découverte de Niafrang"
          description="Découvrez l'histoire et la culture de Niafrang"
          bgImage="/images/reboisement.jpg"
        />
      </div>

      {/* About section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                À propos de Niafrang
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Le village de Niafrang se situe au nord-ouest du département de
                Bignona dans la commune de Kataba 1 dont l’arrondissement porte
                le même nom. Le village de Niafrang abrite un des sites où le
                zircon a été découvert sur la dune il y a quelques décennies. A
                l’ouest, se trouve l’écosystème de la mangrove ensuite, les
                bolongs, la plage, l’océan et à l’Est se situent les périmètres
                rizicoles.
                <br />
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Le village de Niafrang est créé il y a environ 150 ans. Le
                premier habitant du village s’appelait Bacary COLY. Il est venu
                du village de Karantaba. Selon les sources villageoises, avant
                Karantaba, il a séjourné au niveau des villages de Karone,
                Tendouck, Thiobon et Koudiouké. Cette longue pérégrination est
                la cause de l’ignorance de ses origines familiales. Les gardiens
                de la tradition au sein de la communauté ne sont pas en mesure
                de dresser l’arbre généalogique du premier habitant du village
                de Niafrang.
              </p>
            </div>
            <div>
              <Image
                src="/images/fromager.jpg"
                alt="Plage de Niafrang"
                width={800}
                height={400}
                className="rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activity */}
      <section className="py-24 px-6 lg:px-12 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 justify-center mb-4">
              <span className="w-8 h-px bg-emerald-600"></span>
              <h2 className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">
                Immersion Locale
              </h2>
              <span className="w-8 h-px bg-emerald-600"></span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Nos Activités Authentiques
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Partagez le quotidien des habitants de Niafrang et découvrez la
              richesse de leur culture à travers des expériences uniques au cœur
              de la Casamance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => {
              const Icon = iconMap[activity.icon] || Fish;
              return (
                <Card
                  key={activity.id}
                  className="group relative bg-white border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden rounded-3xl"
                >
                  {/* Large faint background icon */}
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] transform translate-x-1/4 -translate-y-1/4 group-hover:scale-125 group-hover:opacity-10 transition-all duration-700 pointer-events-none">
                    <Icon className="w-48 h-48 text-emerald-900 relative z-0" />
                  </div>

                  <CardHeader className="p-8 relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">
                      {activity.name}
                    </CardTitle>
                    <CardDescription className="text-slate-600 leading-relaxed text-base grow">
                      {activity.description}
                    </CardDescription>
                    {activity.duration && (
                      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50/50 w-max px-3 py-1.5 rounded-full">
                        <Clock className="w-4 h-4" />
                        {activity.duration}
                      </div>
                    )}
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
