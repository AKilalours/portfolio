"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { X, Send, Volume2, VolumeX, MessageCircle, Loader2 } from "lucide-react";
import { Button } from "./ui/button";

// ─── Knowledge base ───────────────────────────────────────────────────────────
const KB = {
  greeting: [
    "Hi there! 👋 I'm Akila's personal AI assistant. I know everything about her — projects, skills, education, experience, and more. What would you like to know?",
    "Hello! I'm here to tell you all about Akila Lourdes Miriyala Francis — AI Engineer, ML builder, and FAANG-standard thinker. Ask me anything!",
  ],
  who: `Akila Lourdes Miriyala Francis is an AI Engineer who builds production-grade ML systems to FAANG standards. She defines SLOs before writing code, measures latency at p50/p95/p99, writes eval harnesses, and documents every failure in postmortems. She has shipped 9 production-grade ML systems — each with ablation studies, quality gates, and latency benchmarks.`,
  contact: `You can reach Akila at:\n📧 akilalourdes@gmail.com\n📞 +1 (347) 278-2942\n💼 linkedin.com/in/akila-lourdes-miriyala-francis-5b047019a\n🐙 github.com/AKilalours`,
  location: `Akila is currently based in Brooklyn, New York, USA. She originally comes from Chennai, Tamil Nadu, India.`,
  education: `Akila has two degrees:\n\n🎓 MS in Artificial Intelligence — Long Island University, Brooklyn, NY (2025–2027) | CGPA: 3.98/4.0 — Currently pursuing\n\n🎓 BE in Computer Science & Engineering — Panimalar Engineering College, Chennai, India (2020–2024) | CGPA: 9.36/10`,
  experience: `Akila has two key roles:\n\n1️⃣ Volunteer Full-Stack Developer — People In Need Inc. (Dec 2025 – Jan 2026, Remote)\n• Shipped a production-grade public website from scratch (peopleinneed.org)\n• Built a unified backend powering 4 nonprofit workflows\n• Automated the monthly newsletter pipeline end-to-end\n\n2️⃣ Software Development Intern — Archimedis Digital (Feb–Apr 2023, Chennai, On-site)\n• Owned end-to-end documentation for software modules\n• Drove defect resolution via structured testing and root-cause analysis`,
  skills: `Akila's tech stack spans the full AI/ML ecosystem:\n\n🤖 AI/LLM: LangChain, RAG, LLM, Ollama, Hugging Face, OpenAI API, Sentence Transformers, GenAI\n🧠 Deep Learning: PyTorch, TensorFlow, Keras, Scikit-learn, CNN/CRNN\n📊 Data Science: Python, NumPy, Pandas, SciPy, Matplotlib, Plotly, OpenCV, Jupyter\n⚙️ MLOps: MLflow, MetaFlow, Weights & Biases, Docker, FastAPI, Pytest\n☁️ Cloud/Infra: AWS, Google Cloud, ChromaDB, Vector DB, Git, GitHub`,
  python: `Python is Akila's primary language — she uses it across all 9 of her production ML systems, from data pipelines to model training to FastAPI serving.`,
  projects: `Akila has built 9 production-grade ML systems:\n\n1. 🎬 StreamLens — Netflix-inspired recommendation platform (nDCG@10=0.7506, +58% lift)\n2. 🤖 NeuraPilot — Agentic RAG tutor (RAGAS faithfulness=0.81, p95=4.2s)\n3. 🚗 GuardianDrive — Fleet safety platform (Kafka+K8s, sub-second inference)\n4. 🎙️ Voice RAG Assistant — Fully offline (Recall@k=1.000, $0.00/request)\n5. 👁️ OpenDriveFM — 6-camera BEV perception (ADE=2.457m, 18.4% over baseline)\n6. 🏥 Health Risk Prediction — 17 diseases, avg 87.3% accuracy\n7. 🎤 Noise-Robust KWS — Edge AI, 0.43MB, p95=2.18ms\n8. 🔐 StegoCloak — AES-256-GCM steganography, 58 tests passing\n9. 📈 Crypto Risk Bench — AAPL MAPE 3.34%, 91% latency reduction`,
  streamlens: `StreamLens is a Netflix-inspired streaming discovery and personalization platform.\n\n📊 Results: nDCG@10 = 0.7506 | +58% lift over baseline | p99 = 92ms | 1,000 concurrent users | 9 quality gates passing\n\n🔧 Pipeline: BM25 + FAISS dense retrieval → reciprocal-rank fusion → LightGBM LambdaRank reranker → 5-objective slate optimizer → CLIP multimodal cold-start → causal A/B evaluation\n\n⚙️ Stack: Python · LightGBM · FAISS · CLIP · Metaflow · Airflow · FastAPI · Kubernetes · Prometheus · Grafana · MinIO · Ollama\n\n🔗 github.com/AKilalours/streaming-canvas-search-ltr`,
  neurapilot: `NeuraPilot is a production-grade Agentic RAG tutor with LangGraph orchestration.\n\n📊 Results: RAGAS faithfulness=0.81 | p95=4.2s | $0.00024/request | 38% cache hit rate | 8 bugs postmortem-documented\n\n🔧 Pipeline: Query Classification → HyDE Rewrite → ChromaDB MMR Retrieval → BM25 Rerank → Intent-routed Generation\n\n⚙️ Stack: Python · LangGraph · ChromaDB · Ollama · FastAPI · Docker\n\n🔗 github.com/AKilalours/neurapilot`,
  guardiandrive: `GuardianDrive is a Tesla-inspired intelligent driving and fleet safety platform.\n\n📊 Results: Sub-second streaming inference | High event-detection recall | Low false-alert rates | Production safety gates\n\n🔧 Pipeline: Sensor fusion → Computer vision event detection → Gradient-boosted risk models → Explainable AI safety layers\n\n⚙️ Stack: Python · FastAPI · Kafka · Airflow · Metaflow · Docker · Kubernetes\n\n🔗 github.com/AKilalours/guardian-drive`,
  voicerag: `The Local Offline Voice RAG Assistant is a fully offline speech-to-speech translator and document-grounded RAG system.\n\n📊 Results: Recall@k = 1.000 (13/13) | Security refusal = 1.000 (6/6 blocked) | $0.00/request | RBAC enforcement = 1.000\n\n🔧 Pipeline: Faster-Whisper ASR → RBAC-filtered FAISS retrieval → Cross-Encoder rerank → Ollama/Mistral → Coqui TTS\n\n⚙️ Stack: Python · Faster-Whisper · FAISS · Ollama/Mistral · Coqui TTS · FastAPI\n\n🔗 github.com/AKilalours/local-offline-voice-translator-rag-assistant`,
  opendrivefm: `OpenDriveFM is an end-to-end trust-aware multi-camera BEV perception system for autonomous driving.\n\n📊 Results: ADE = 2.457m | FDE = 5.486m | 18.4% better than constant-velocity baseline | No pretrained weights used\n\n🔧 Architecture: 6-camera CNN stem → Temporal Transformer → CameraTrustScorer → BEV occupancy head + trajectory head\n\n⚙️ Stack: PyTorch Lightning · nuScenes-mini · Temporal Transformer\n\n🔗 github.com/AKilalours/opendrivefm`,
  health: `The AI Health Risk Prediction system covers 17 chronic and genetic diseases from a single pipeline.\n\n📊 Results: Average accuracy 87.3% | HIV 98.94% | Heart Disease 98.54% | CKD 97.56% | TB 96.90% | Cancer 96.49%\n\n🔧 Approach: Random Forest for 15 tabular diseases + EfficientNetB0 for Pneumonia + Custom CNN for TB + SHAP interpretability\n\n⚙️ Stack: Python · scikit-learn · TensorFlow · EfficientNetB0 · SHAP · Plotly\n\n🔗 github.com/AKilalours/AI-Powered-Health-Risk-Prediction-System-for-Multi-Disease-Diagnosis`,
  kws: `The Noise-Robust KWS & Distress Detection system targets safety-critical keyword spotting at the edge.\n\n📊 Results: Clean accuracy 88.37% | 0dB SNR accuracy 77.02% | Model size 0.43 MB | p95 latency 2.18ms\n\n🔧 Approach: Log-Mel/MFCC features + noise augmentation (0/5/10/20dB) → CNN/CRNN KWS head + binary distress classifier\n\n⚙️ Stack: PyTorch · MFCC · Log-Mel · CNN/CRNN\n\n🔗 github.com/AKilalours/noise-robust-kws-distress-detection`,
  stegocloak: `StegoCloak is a military-grade cryptographic steganography system.\n\n📊 Results: 58 tests passing | Zero plaintext markers | Wrong-password rejection | PSNR visual similarity verified\n\n🔧 Approach: AES-256-GCM encryption → scrypt KDF (N=2¹⁶) → password-keyed CSPRNG for LSB sampling → zlib compression → GCM auth tag + CRC-32\n\n⚙️ Stack: Python · AES-256-GCM · scrypt · ResNet-18 · PyTorch · Ollama\n\n🔗 github.com/AKilalours/StegoCloak`,
  crypto: `Crypto Risk Bench is a walk-forward financial risk analytics platform.\n\n📊 Results: AAPL MAPE 3.34% | BTC-USD MAPE 3.37% | TTL cache reduced p95 latency from 2.1s → 0.18s (91% reduction)\n\n🔧 Approach: yfinance ingestion → TTL cache → feature engineering → risk metrics (Sharpe, VaR/CVaR, Calmar) → walk-forward backtesting → Plotly dashboards\n\n⚙️ Stack: Python · Pandas · NumPy · Plotly · FastAPI · Docker\n\n🔗 github.com/AKilalours/Crypto-Risk-Bench`,
  achievements: `Akila's key achievements:\n\n📄 Publication (First Author) — "Cryptocurrency Price Prediction", AIP Conference Proceedings 2025 | DOI: doi.org/10.1063/5.0256861\n\n🎤 Conference Presentation — Sign Language Recognition using CNN+LSTM, IMPULSE 2K23, Panimalar Engineering College\n\n🏆 IDEATHON 2K22 — 3rd Place, Panimalar Engineering College\n\n🎓 School Pupil Leader — Highest student leadership position in her school`,
  publication: `Akila published a peer-reviewed ML paper as First Author:\n\n📄 Title: "Cryptocurrency Price Prediction"\n📚 Journal: AIP Conference Proceedings, 3175(1), 020004 — ICONIC 2K23 (2025)\n🔗 DOI: doi.org/10.1063/5.0256861\n\nThe paper applies LASSO regression to Bitcoin price prediction — attacking the time complexity problem in Bitcoin forecasting by combining LASSO feature selection with ML-driven pattern recognition. Every stage from research conception through publication was driven by Akila.`,
  certificates: `Akila holds 4 verified certificates:\n\n1. ✅ Google AI Essentials (ID: JZ2SOP0FBS0Z) — Jan 2026\n2. ✅ Intro to AI & ML on Google Cloud (ID: WASIBCDCZCKV) — Feb 2026\n3. ✅ JP Morgan Quantitative Research Simulation (ID: wDKTcXjRnSF3qr7nq) — Jan 2026\n4. ✅ JP Morgan Software Engineering Simulation (ID: iGjmHfdXyX8ywt3og) — Jan 2026`,
  hire: `Akila is actively open to AI Engineer, ML Engineer, and Data Scientist roles.\n\nShe operates at FAANG production standards — 9 systems shipped with SLOs, latency benchmarks, eval harnesses, and postmortems.\n\n📧 akilalourdes@gmail.com\n💼 linkedin.com/in/akila-lourdes-miriyala-francis-5b047019a\n📞 +1 (347) 278-2942`,
  resume: `You can view Akila's resume here:\n🔗 docs.google.com/document/d/1YeRQO2AWUyxtsBTYlKBoEwAwObtD8usSJHuZhZjOawQ/edit`,
  github: `Akila's GitHub: github.com/AKilalours\n\nShe has 9 production-grade open-source projects covering recommendation systems, RAG, autonomous driving, healthcare AI, cryptography, edge speech AI, and financial ML.`,
  fallback: [
    `That's a great question! I don't have specific info on that, but you can reach Akila directly at akilalourdes@gmail.com and she'll be happy to answer. 😊`,
    `I'm not sure about that one! Feel free to connect with Akila on LinkedIn or email her at akilalourdes@gmail.com for more details.`,
    `Hmm, that's outside what I know about Akila! Try asking about her projects, skills, education, or experience — or reach out to her directly at akilalourdes@gmail.com.`,
  ],
};

// ─── Intent matching ──────────────────────────────────────────────────────────
function getResponse(input: string): string {
  const q = input.toLowerCase();

  // Greetings
  if (/^(hi|hello|hey|howdy|sup|hiya|good\s*(morning|afternoon|evening))/i.test(q.trim()))
    return KB.greeting[Math.floor(Math.random() * KB.greeting.length)];

  // Who / about / intro
  if (/who\s+is|about\s+akila|introduce|tell\s+me\s+about\s+(her|akila)|what\s+does\s+she\s+do|background/i.test(q))
    return KB.who;

  // Hire / available / looking / job / work
  if (/hire|available|open\s+to|looking\s+for|job|opportunity|recruit|position|role/i.test(q))
    return KB.hire;

  // Resume / CV
  if (/resume|cv\b/i.test(q)) return KB.resume;

  // Contact / email / phone / reach / linkedin
  if (/contact|email|phone|reach|linkedin|social|number/i.test(q)) return KB.contact;

  // Location / where / based
  if (/where|location|based|live|city|country/i.test(q)) return KB.location;

  // Education / degree / university / college / gpa / cgpa
  if (/education|degree|university|college|study|studied|gpa|cgpa|liu|panimalar|ms\b|bachelor|master/i.test(q))
    return KB.education;

  // Experience / work / internship / job history
  if (/experience|work(ed)?|intern|job\s+history|career|archimedis|people\s+in\s+need/i.test(q))
    return KB.experience;

  // Skills / tech stack / tools / languages
  if (/skill|tech\s*stack|tool|language|framework|what\s+can\s+she|proficient|expertise/i.test(q))
    return KB.skills;

  // Python specifically
  if (/python/i.test(q)) return KB.python;

  // Projects (general)
  if (/project(s)?|built|build|system(s)?|portfolio|work\s+sample/i.test(q) &&
      !/streamlens|neurapilot|guardian|voice|opendrive|health|kws|stego|crypto/i.test(q))
    return KB.projects;

  // Specific projects
  if (/streamlens|stream\s*lens|netflix|recommendation|ranking|ltr|lightgbm/i.test(q)) return KB.streamlens;
  if (/neurapilot|neura\s*pilot|rag\s+tutor|langgraph|agentic/i.test(q)) return KB.neurapilot;
  if (/guardian\s*drive|fleet|driving|tesla|telemetry|kafka/i.test(q)) return KB.guardiandrive;
  if (/voice\s*rag|offline\s+voice|whisper|coqui|local\s+rag|translator/i.test(q)) return KB.voicerag;
  if (/opendrive|bev|bird.?s.?eye|autonomous|camera|perception|nuscenes/i.test(q)) return KB.opendrivefm;
  if (/health|disease|medical|diagnosis|prediction.*disease|17\s+disease/i.test(q)) return KB.health;
  if (/kws|keyword\s*spot|distress|noise\s*robust|speech\s*detection|edge\s*ai/i.test(q)) return KB.kws;
  if (/stego|steganograph|crypto(?:graphic)?|aes|encrypt/i.test(q)) return KB.stegocloak;
  if (/crypto\s*risk|bitcoin|btc|aapl|financial\s*risk|walk.?forward/i.test(q)) return KB.crypto;

  // Achievements / awards / publication / conference
  if (/achievement|award|accomplish|honor|prize/i.test(q)) return KB.achievements;
  if (/publication|paper|publish|aip|journal|research\s+paper|lasso|conference\s+paper/i.test(q))
    return KB.publication;
  if (/certificate|certification|google|jp\s*morgan|coursera|credential/i.test(q))
    return KB.certificates;

  // GitHub
  if (/github|repo|open\s*source|code/i.test(q)) return KB.github;

  // Fallback
  return KB.fallback[Math.floor(Math.random() * KB.fallback.length)];
}

// ─── Types ────────────────────────────────────────────────────────────────────
type Message = { role: "user" | "assistant"; content: string };

const SUGGESTED = [
  "Who is Akila?",
  "Show me her projects",
  "What skills does she have?",
  "Is she available to hire?",
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function AkilaChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! 👋 I'm Akila's personal AI assistant. Ask me about her projects, skills, education, experience, or how to get in touch!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [muted, setMuted] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const voicesLoadedRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      synthRef.current = window.speechSynthesis;
      // Pre-load voices
      const load = () => { window.speechSynthesis.getVoices(); voicesLoadedRef.current = true; };
      window.speechSynthesis.onvoiceschanged = load;
      load();
    }
    return () => { synthRef.current?.cancel(); };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const speak = (text: string) => {
    if (muted || !synthRef.current) return;
    synthRef.current.cancel();
    const clean = text
      .replace(/[*_`#>\[\]]/g, "")
      .replace(/\p{Emoji}/gu, "")
      .replace(/https?:\/\/\S+/g, "")
      .replace(/\n+/g, ". ")
      .replace(/\s+/g, " ")
      .trim();

    const utter = new SpeechSynthesisUtterance(clean);
    utter.rate = 1.0;
    utter.pitch = 1.05;
    utter.volume = 1;

    const voices = synthRef.current.getVoices();
    const preferred = [
      "Samantha", "Karen", "Moira", "Fiona", "Victoria",
      "Google US English", "Google UK English Female",
      "Microsoft Zira", "Microsoft Aria",
    ];
    const pick =
      voices.find(v => preferred.some(p => v.name.includes(p))) ??
      voices.find(v => v.lang.startsWith("en") && v.name.toLowerCase().includes("female")) ??
      voices.find(v => v.lang.startsWith("en"));
    if (pick) utter.voice = pick;

    utter.onstart = () => setSpeaking(true);
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    synthRef.current.speak(utter);
  };

  const stopSpeaking = () => { synthRef.current?.cancel(); setSpeaking(false); };

  const sendMessage = (text?: string) => {
    const userText = (text ?? input).trim();
    if (!userText || loading) return;
    setInput("");
    const userMsg: Message = { role: "user", content: userText };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    // Simulate slight delay for natural feel
    setTimeout(() => {
      const reply = getResponse(userText);
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
      setLoading(false);
      speak(reply);
    }, 400 + Math.random() * 300);
  };

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        onClick={() => setOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-[9999]",
          "w-14 h-14 rounded-full shadow-2xl",
          "bg-foreground text-background",
          "flex items-center justify-center",
          "hover:scale-110 active:scale-95 transition-transform duration-200",
          open && "hidden"
        )}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        aria-label="Open Akila's AI Assistant"
      >
        <MessageCircle size={24} />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-background animate-pulse" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className={cn(
              "fixed bottom-6 right-6 z-[9999]",
              "w-[92vw] max-w-[400px]",
              "h-[600px] max-h-[85vh]",
              "rounded-2xl border border-border shadow-2xl",
              "bg-background/95 backdrop-blur-xl",
              "flex flex-col overflow-hidden"
            )}
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-foreground/5 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                    A
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-background" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm leading-tight">Akila's Assistant</p>
                  <p className="font-mono text-[10px] text-emerald-500 flex items-center gap-1">
                    {speaking
                      ? <><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" /> Speaking...</>
                      : <><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" /> Online · Ask me anything</>
                    }
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost" size="sm"
                  className="w-8 h-8 p-0 rounded-full"
                  onClick={() => { setMuted(m => !m); if (!muted) stopSpeaking(); }}
                  title={muted ? "Unmute voice" : "Mute voice"}
                >
                  {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </Button>
                <Button
                  variant="ghost" size="sm"
                  className="w-8 h-8 p-0 rounded-full"
                  onClick={() => { setOpen(false); stopSpeaking(); }}
                >
                  <X size={15} />
                </Button>
              </div>
            </div>

            {/* ── Messages ── */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn("flex items-end gap-2", msg.role === "user" ? "justify-end" : "justify-start")}
                >
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 mb-0.5">
                      A
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm font-mono leading-relaxed whitespace-pre-line",
                      msg.role === "user"
                        ? "bg-foreground text-background rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    )}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-end gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">A</div>
                  <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                    {[0, 1, 2].map(j => (
                      <span key={j} className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: `${j * 0.15}s` }} />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* ── Suggested questions ── */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5 flex-shrink-0">
                {SUGGESTED.map(q => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="font-mono text-[11px] px-3 py-1.5 rounded-full border border-border bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* ── Input ── */}
            <div className="px-4 pb-4 pt-2 border-t border-border flex-shrink-0">
              <div className="flex items-center gap-2 rounded-xl border border-border bg-muted/30 px-3 py-2 focus-within:border-foreground/40 transition-colors duration-200">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
                  placeholder="Ask me about Akila..."
                  className="flex-1 bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground outline-none min-w-0"
                  disabled={loading}
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || loading}
                  className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200",
                    input.trim() && !loading
                      ? "bg-foreground text-background hover:opacity-80"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  )}
                >
                  {loading ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                </button>
              </div>
              <p className="font-mono text-[10px] text-muted-foreground text-center mt-2 opacity-60">
                No API key needed · Knows everything about Akila 🚀
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
