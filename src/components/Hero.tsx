"use client";
import{ArrowDown, ArrowUpRight, FileText} from "lucide-react";
export default function Hero()
{
    const handleEnterControlRoom=()=>{
        const controlRoom=document.getElementById("control-room");
        if (controlRoom){
            controlRoom.scrollIntoView({
                    behavior: "smooth", block: "start",
            });
        }
    };
    const handleResume=()=>{
        window.open("/resume.pdf", "_blank");
    };

    return(
        <section id="home" className="relative min-h-[calc(100vh-80px)] overflow-hidden px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center">
            <div className="grid w-full gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                {/*Left -Hero Content */}
                <div>
                    {/* System label */}
                    <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400"></span>
                        <span>System / Profile_001</span>
                    </div>
                    {/* Professional role */}
                    <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-lime-400">AI Language Quality Analyst</p>

                    {/* Main heading */}
                    <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-zinc-100 sm:text-6xl lg:text-8xl">
                        AI QUALITY
                        <br />
                        CONTROL ROOM
                    </h1>

                    {/* Introduction */}
                    <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                        I understand how technology is built. I focus on whether its AI ouput works for people.
                    </p>
                    
                    {/* Action buttons */}
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <button type="button" onClick={handleEnterControlRoom} className="group inline-flex min-h-12 items-center justify-center gap-3 border border-lime-400 bg-lime-400 px-6 py-3 font-mono text-sm font-medium uppercase tracking-wide text-black transition-all duration-300 hover:bg-lime-300">
                            Enter Control Room
                            <ArrowDown size={17} className="transition-transform duration-300 group-hover:translate-y-1" />
                        </button>
                        <button type="button" onClick={handleResume} className="group inline-flex min-h-12 items-center justify-center gap-3 border border-zinc-700 px-6 py-3 font-mono text-sm uppercase tracking-wide text-zinc-200 transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-900">
                            View Resume
                            <FileText size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                        </button>
                    </div>

                    {/* Scroll indicator */}
                    <div className="mt-14 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:flex">
                        <ArrowDown size={13} />
                        Scroll to investigate
                    </div>
                </div>

                {/* Right-Quality Snapshot */}
                <div className="lg:justify-self-end">
                    <div className="relative max-w-md border border-zinc-800 bg-zinc-950/70 p-6 sm:p-8">

                        {/* Top label */}
                        <div className="mb-8 flex items-center justify-between border-b border-zinc-800 pb-4">
                            <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-400">Quality Snapshot</span>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-lime-400">Online</span>
                        </div>

                        {/* Metrics */}
                        <div className="space-y-6">
                            <div className="flex items-end justify-between gap-4">
                                <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">Experience</span>
                                <span className="text-right text-2xl font-medium tracking-tight text-zinc-100">3 Years</span>
                            </div>

                            <div className="flex items-end justify-between gap-4">
                                <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">Data Reviewed</span>
                                <span className="text-right text-2xl font-medium tracking-tight text-zinc-100">2,000+</span>
                            </div>

                            <div className="flex items-end justify-between gap-4">
                                <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">Team Supported</span>
                                <span className="text-right text-2xl font-medium tracking-tight text-zinc-100">22</span>
                            </div>

                            <div className="flex items-end justify-between gap-4">
                                <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">QA Findings</span>
                                <span className="text-right text-2xl font-medium tracking-tight text-zinc-100">100+</span>
                            </div>

                            <div className="flex items-end justify-between gap-4" >
                                <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">Calibration</span>
                                <span className="text-right text-2xl font-medium tracking-tight text-zinc-100">40+</span>
                            </div>
                        </div>

                        {/* Bottom system status */}
                        <div className="mt-8 border-t border-zinc-800 pt-4">
                            <div className="flex items-center justify-between font-mono text=[10px] uppercase tracking-wider">
                                <span className="text-zinc-600">Quality standard</span>
                                <span className="text-zinc-400">Human judgement + structured evaluation</span>
                            </div>
                        </div>
                    </div>

                    {/* Small technical label */}
                    <div className="mt-4 flex justify-end">
                        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                            <ArrowUpRight size={12} />Human-in-the-loop
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}