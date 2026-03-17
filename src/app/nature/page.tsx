import HeaderTitle from "@/components/layout/HeaderTitle";

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
        </>
    );
}