import { Sparkles } from "lucide-react";

interface HeaderTitleProps {
    title: string;
    description: string;
    badge?: string;
    bgImage?: string;
}

export default function HeaderTitle({ title, description, badge = "Découverte", bgImage }: HeaderTitleProps) {
    return (
        <div className="relative w-full py-24 lg:py-32 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
            {/* Background elements */}
            {bgImage ? (
                <>
                    <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                        style={{ backgroundImage: `url(${bgImage})` }}
                    />
                    <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply z-0" />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-0" />
                </>
            ) : (
                <>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl opacity-60 rounded-full pointer-events-none" />
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/10 blur-3xl rounded-full pointer-events-none" />
                </>
            )}
            
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                {badge && (
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-100 shadow-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <Sparkles className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm font-bold tracking-widest text-emerald-700 uppercase">
                            {badge}
                        </span>
                    </div>
                )}
                
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150 ${bgImage ? "text-white" : "text-slate-900"}`}>
                    {title}
                </h1>
                
                <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mb-8 animate-in fade-in duration-1000 delay-300" />
                
                <p className={`text-lg md:text-xl leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 ${bgImage ? "text-white/90" : "text-slate-600"}`}>
                    {description}
                </p>
            </div>
        </div>
    );
}