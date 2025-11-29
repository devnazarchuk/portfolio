import Image from "next/image";
import { LineChart, Target, Activity, CandlestickChart } from "lucide-react";

export function Evals() {
    return (
        <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl tracking-tight text-white">
                Model Evals
            </h2>
            <p className="text-white/70 mt-2">
                Continuous evaluation of prompts, tools, and retrieval quality across
                production workloads.
            </p>

            {/* Main Chart Card */}
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <LineChart className="w-4 h-4 text-white/80" />
                        <h3 className="text-base font-semibold tracking-tight text-white">
                            Pass@1 by model (weekly)
                        </h3>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <span className="text-xs text-white/60">Live data</span>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="h-48 relative w-full">
                        {/* Using the image asset as a placeholder for the chart */}
                        <Image
                            src="/assets/evals-chart.png"
                            alt="Evaluation Chart"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                    <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                        <div className="text-white/60">Current best</div>
                        <div className="text-lg font-semibold tracking-tight text-white">
                            82%
                        </div>
                        <div className="text-xs text-green-400 mt-1">+4% this week</div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                        <div className="text-white/60">Context win</div>
                        <div className="text-lg font-semibold tracking-tight text-white">
                            +10% RAG
                        </div>
                        <div className="text-xs text-white/50 mt-1">vs baseline</div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                        <div className="text-white/60">Latency p95</div>
                        <div className="text-lg font-semibold tracking-tight text-white">
                            780ms
                        </div>
                        <div className="text-xs text-yellow-400 mt-1">Within SLA</div>
                    </div>
                </div>
            </div>

            {/* Sub Cards Grid */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Eval Categories */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 mb-3">
                        <Target className="w-4 h-4 text-white/70" />
                        <h4 className="text-sm font-medium tracking-tight text-white">
                            Eval Categories
                        </h4>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center text-white">
                            <span className="text-xs text-white/70">Code generation</span>
                            <span className="text-xs font-medium">87%</span>
                        </div>
                        <div className="flex justify-between items-center text-white">
                            <span className="text-xs text-white/70">Q&A retrieval</span>
                            <span className="text-xs font-medium">82%</span>
                        </div>
                        <div className="flex justify-between items-center text-white">
                            <span className="text-xs text-white/70">Tool usage</span>
                            <span className="text-xs font-medium">76%</span>
                        </div>
                        <div className="flex justify-between items-center text-white">
                            <span className="text-xs text-white/70">Reasoning</span>
                            <span className="text-xs font-medium">73%</span>
                        </div>
                    </div>
                </div>

                {/* Recent Tests */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 mb-3">
                        <Activity className="w-4 h-4 text-white/70" />
                        <h4 className="text-sm font-medium tracking-tight text-white">
                            Recent Tests
                        </h4>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-xs text-white/90">
                                    GPT-4o prompt optimization
                                </div>
                                <div className="text-[10px] text-white/60">2 hours ago</div>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-xs text-white/90">
                                    Claude-3.5 tool calling
                                </div>
                                <div className="text-[10px] text-white/60">6 hours ago</div>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-xs text-white/90">
                                    RAG chunk size A/B test
                                </div>
                                <div className="text-[10px] text-white/60">12 hours ago</div>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Evaluation Framework */}
            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <CandlestickChart className="w-4 h-4 text-white/80" />
                        <h4 className="text-sm font-medium tracking-tight text-white">
                            Evaluation Framework
                        </h4>
                    </div>
                    <span className="text-xs text-white/60">1,247 total tests</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                    Automated testing pipeline with custom metrics, human feedback loops,
                    and A/B testing. Tracks accuracy, hallucination rates, tool usage
                    effectiveness, and user satisfaction scores across different model
                    versions and prompt templates.
                </p>
            </div>
        </div>
    );
}
