import HeaderTitle from "@/components/layout/HeaderTitle";
// import { imageLinks } from "@/data/natureCulture";
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import Image from "next/image";

export default function Nature() {
  return (
    <>
      {/* Header title */}
      <div className="relative">
        <HeaderTitle
          title="Nature et culture"
          description="Découvrez la beauté naturelle et la culture Diola"
          bgImage="/images/foyer.jpg"
        />
      </div>

      {/* galerie images */}
      {/* <section>
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {imageLinks.map((image) => (
            <Card key={image.id}>
              <CardHeader>
                <CardTitle>
                  <Image
                    width={300}
                    height={250}
                    src={image.image}
                    alt="image"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardTitle> {image.title} </CardTitle>
                <CardDescription> {image.description} </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}
    </>
  );
}
