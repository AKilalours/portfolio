import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots/akila";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={live}>
        <Button variant={"default"} size={"sm"}>
          Visit
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={repo}>
          <Button variant={"default"} size={"sm"}>
            GitHub
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const TAG = (label: string) => <span className="text-[11px] font-mono">{label}</span>;

const T = {
  python:        { title: "Python",               bg: "black", fg: "white", icon: TAG("Python") },
  pyspark:       { title: "PySpark",               bg: "#E25A1C", fg: "white", icon: TAG("PySpark") },
  lightgbm:      { title: "LightGBM",             bg: "black", fg: "white", icon: TAG("LightGBM") },
  faiss:         { title: "FAISS",                 bg: "black", fg: "white", icon: TAG("FAISS") },
  clip:          { title: "CLIP",                  bg: "black", fg: "white", icon: TAG("CLIP") },
  metaflow:      { title: "Metaflow",              bg: "black", fg: "white", icon: TAG("Metaflow") },
  airflow:       { title: "Airflow",               bg: "black", fg: "white", icon: TAG("Airflow") },
  fastapi:       { title: "FastAPI",               bg: "black", fg: "white", icon: TAG("FastAPI") },
  kubernetes:    { title: "Kubernetes",            bg: "black", fg: "white", icon: TAG("K8s") },
  prometheus:    { title: "Prometheus",            bg: "black", fg: "white", icon: TAG("Prometheus") },
  grafana:       { title: "Grafana",               bg: "black", fg: "white", icon: TAG("Grafana") },
  minio:         { title: "MinIO",                 bg: "black", fg: "white", icon: TAG("MinIO") },
  ollama:        { title: "Ollama",                bg: "black", fg: "white", icon: TAG("Ollama") },
  langgraph:     { title: "LangGraph",             bg: "black", fg: "white", icon: TAG("LangGraph") },
  chromadb:      { title: "ChromaDB",              bg: "black", fg: "white", icon: TAG("ChromaDB") },
  streamlit:     { title: "Streamlit",             bg: "black", fg: "white", icon: TAG("Streamlit") },
  docker:        { title: "Docker",                bg: "black", fg: "white", icon: TAG("Docker") },
  ragas:         { title: "RAGAS",                 bg: "black", fg: "white", icon: TAG("RAGAS") },
  kafka:         { title: "Kafka",                 bg: "black", fg: "white", icon: TAG("Kafka") },
  pytorch:       { title: "PyTorch",               bg: "black", fg: "white", icon: TAG("PyTorch") },
  pytorchlightn: { title: "PyTorch Lightning",     bg: "black", fg: "white", icon: TAG("PT Lightning") },
  sklearn:       { title: "scikit-learn",           bg: "black", fg: "white", icon: TAG("sklearn") },
  tensorflow:    { title: "TensorFlow",            bg: "black", fg: "white", icon: TAG("TF") },
  efficientnet:  { title: "EfficientNetB0",        bg: "black", fg: "white", icon: TAG("EfficientNet") },
  shap:          { title: "SHAP",                  bg: "black", fg: "white", icon: TAG("SHAP") },
  plotly:        { title: "Plotly",                bg: "black", fg: "white", icon: TAG("Plotly") },
  cnn:           { title: "CNN/CRNN",              bg: "black", fg: "white", icon: TAG("CNN") },
  mfcc:          { title: "MFCC",                  bg: "black", fg: "white", icon: TAG("MFCC") },
  aes256:        { title: "AES-256-GCM",           bg: "black", fg: "white", icon: TAG("AES-256") },
  resnet:        { title: "ResNet-18",             bg: "black", fg: "white", icon: TAG("ResNet") },
  pandas:        { title: "Pandas",                bg: "black", fg: "white", icon: TAG("Pandas") },
  numpy:         { title: "NumPy",                 bg: "black", fg: "white", icon: TAG("NumPy") },
  yfinance:      { title: "yfinance",              bg: "black", fg: "white", icon: TAG("yfinance") },
  whisper:       { title: "Faster-Whisper",        bg: "black", fg: "white", icon: TAG("Whisper") },
  transformer:   { title: "Transformer",           bg: "black", fg: "white", icon: TAG("Transformer") },
  openai:        { title: "OpenAI API",            bg: "black", fg: "white", icon: TAG("OpenAI") },
  rag:           { title: "RAG",                   bg: "black", fg: "white", icon: TAG("RAG") },
  cv:            { title: "Computer Vision",       bg: "black", fg: "white", icon: TAG("CV") },
  githubactions: { title: "GitHub Actions",        bg: "black", fg: "white", icon: TAG("CI/CD") },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  // ─── 1. StreamLens ───────────────────────────────────────────────────────────
  {
    id: "streamlens",
    category: "ML Platform · Recommendation System",
    title: "StreamLens — Netflix-Inspired Streaming Discovery Platform",
    src: `${BASE_PATH}/streamlens.png`,
    screenshots: ["streamlens.png"],
    skills: {
      frontend: [T.python, T.pyspark, T.lightgbm, T.faiss, T.clip, T.openai],
      backend:  [T.metaflow, T.airflow, T.fastapi, T.kubernetes, T.prometheus, T.grafana, T.minio, T.ollama],
    },
    live:   "https://github.com/AKilalours/streaming-canvas-search-ltr",
    github: "https://github.com/AKilalours/streaming-canvas-search-ltr",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Four-stage retrieval + neural reranking · nDCG@10 = 0.7506 · +58% lift over baseline
          </TypographyP>
          <TypographyP className="font-mono">
            A production-grade streaming discovery and personalization platform covering the full ML
            stack — candidate retrieval, neural reranking, multimodal enrichment, causal evaluation,
            and real-time infrastructure — designed around Netflix ML Platform architecture patterns.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Pipeline Architecture</TypographyH3>
          <ul className="list-disc ml-6 space-y-1">
            <li className="font-mono">BM25 + FAISS dense retrieval (all-MiniLM-L6-v2, 384-dim) merged via reciprocal-rank hybrid fusion → 1,000-candidate pool (Recall@100 = 0.881).</li>
            <li className="font-mono">LightGBM LambdaRank reranker on 15 engineered features — nDCG@10 = 0.7506, +0.277 absolute lift (+58% relative) over hybrid baseline.</li>
            <li className="font-mono">Session-aware personalization with 14-day temporal decay and epsilon-greedy bandit (ε=0.15).</li>
            <li className="font-mono">5-objective slate optimizer: relevance (45%), satisfaction (25%), diversity (15%), exploration (10%), business value (5%) → +22% diversity, only 1.8% relevance loss.</li>
            <li className="font-mono">CLIP ViT-B/32 multimodal cold-start across 17 categories (avg_mm_boost = 0.096).</li>
            <li className="font-mono">Doubly-robust IPW off-policy causal evaluation with Welch's t-test A/B inference.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Production Infrastructure</TypographyH3>
          <ul className="list-disc ml-6 space-y-1">
            <li className="font-mono">FastAPI (106 endpoints) · Airflow 2.9 (8-task ML pipeline DAG) · Metaflow (7-step multimodal pipeline with full artifact lineage).</li>
            <li className="font-mono">MinIO S3-compatible artifact storage (70 versioned eval runs) · Prometheus + Grafana live observability.</li>
            <li className="font-mono">Kubernetes with HPA (2–10 replicas) · p99 = 92ms warm cache, 142ms cold, 178ms at 1,000 concurrent users (Locust).</li>
            <li className="font-mono">Netflix-style demo UI: 44 languages · GPT-4o-mini · OpenAI TTS · Whisper · CLIP · LLaVA via Ollama.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Quality Gates</TypographyH3>
          <ul className="list-disc ml-6 space-y-1">
            <li className="font-mono">9 reproducible quality gates (all passing).</li>
            <li className="font-mono">Two independent benchmarks: MovieLens nDCG@10 = 0.7506 · BEIR NFCorpus nDCG@10 = 0.2777.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Preview</TypographyH3>
          <SlideShow images={[`${BASE_PATH}/streamlens.png`]} />
        </div>
      );
    },
  },

  // ─── 2. NeuraPilot ───────────────────────────────────────────────────────────
  {
    id: "neurapilot",
    category: "Agentic RAG · LLM Application",
    title: "NeuraPilot — Production-Grade Agentic RAG Tutor",
    src: `${BASE_PATH}/neurapilot.png`,
    screenshots: ["neurapilot.png"],
    skills: {
      frontend: [T.python, T.langgraph, T.chromadb, T.ollama, T.openai],
      backend:  [T.fastapi, T.streamlit, T.docker, T.ragas],
    },
    live:   "https://github.com/AKilalours/neurapilot",
    github: "https://github.com/AKilalours/neurapilot",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            5-stage LangGraph DAG · 9 SLOs met · 38% cache hit rate · p95 latency 4.2s
          </TypographyP>
          <TypographyP className="font-mono">
            A compound AI pipeline for intelligent tutoring with LangGraph orchestration, semantic
            caching, real-time observability, and multi-modal understanding — all SLOs met on MacBook
            M2 with llama3.1:8b via Ollama.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Pipeline Architecture</TypographyH3>
          <ul className="list-disc ml-6 space-y-1">
            <li className="font-mono">Query Classification (keyword regex + LLM fallback) → HyDE Rewrite → ChromaDB MMR Retrieval → BM25 Rerank → Intent-routed Generation.</li>
            <li className="font-mono">SQLite cosine similarity semantic cache (threshold 0.92) — 38% hit rate, 42% average latency reduction, cache hits served in ~120ms.</li>
            <li className="font-mono">Intent routing: ask / quiz / flashcards / summarize / plan.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Measured SLOs (All Met)</TypographyH3>
          <ul className="list-disc ml-6 space-y-1">
            <li className="font-mono">p50 latency 1.8s · p95 4.2s · p99 7.1s.</li>
            <li className="font-mono">Cost per request $0.00024 (gpt-4o-mini) · RAGAS faithfulness 0.81 · answer relevance 0.78 · hit@10 proxy 0.83.</li>
            <li className="font-mono">8 bugs found, root-caused, and fixed — full postmortem log documented.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Preview</TypographyH3>
          <SlideShow images={[`${BASE_PATH}/neurapilot.png`]} />
        </div>
      );
    },
  },

  // ─── 3. GuardianDrive ────────────────────────────────────────────────────────
  {
    id: "guardiandrive",
    category: "Real-Time ML · Fleet Safety",
    title: "GuardianDrive — Tesla-Inspired Intelligent Driving & Fleet Safety Platform",
    src: `${BASE_PATH}/guardiandrive.png`,
    screenshots: ["guardiandrive.png"],
    skills: {
      frontend: [T.python, T.fastapi, T.kafka, T.cv],
      backend:  [T.airflow, T.metaflow, T.minio, T.prometheus, T.grafana, T.docker, T.kubernetes],
    },
    live:   "https://github.com/AKilalours/guardian-drive",
    github: "https://github.com/AKilalours/guardian-drive",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Real-time telemetry streaming · Computer vision event detection · Explainable AI safety
          </TypographyP>
          <TypographyP className="font-mono">
            A real-time driving intelligence and fleet safety platform combining driver monitoring,
            risk prediction, event detection, route intelligence, and explainable decision support
            in one unified system.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Under the Hood</TypographyH3>
          <ul className="list-disc ml-6 space-y-1">
            <li className="font-mono">Sensor fusion across vehicle telemetry streams and trajectory forecasting.</li>
            <li className="font-mono">Computer vision event detection + gradient-boosted risk models.</li>
            <li className="font-mono">Grounded AI layers: incident explanation, unsafe-driving reasoning, alert summarization, context-aware route recommendations.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Production Infrastructure</TypographyH3>
          <ul className="list-disc ml-6 space-y-1">
            <li className="font-mono">FastAPI serving · Kafka real-time telemetry streaming · Airflow pipeline orchestration · Metaflow ML artifact lineage.</li>
            <li className="font-mono">MinIO model storage · Prometheus/Grafana live observability · Docker + Kubernetes deployment.</li>
            <li className="font-mono">Real-time dashboard: vehicle health, trip replay, driver risk analytics, fleet-level monitoring.</li>
            <li className="font-mono">High event-detection recall, low false-alert rates, sub-second streaming inference.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Preview</TypographyH3>
          <SlideShow images={[`${BASE_PATH}/guardiandrive.png`]} />
        </div>
      );
    },
  },

  // ─── 4. Local Offline Voice RAG ──────────────────────────────────────────────
  {
    id: "local-offline-voice-rag",
    category: "LLM · RAG · Speech AI",
    title: "Local Offline Voice Translator & RAG Assistant",
    src: `${BASE_PATH}/local-rag.png`,
    screenshots: ["local-rag.png"],
    skills: {
      frontend: [T.python, T.whisper, T.faiss, T.ollama, T.rag],
      backend:  [T.fastapi, T.docker, T.githubactions],
    },
    live:   "https://github.com/AKilalours/local-offline-voice-translator-rag-assistant",
    github: "https://github.com/AKilalours/local-offline-voice-translator-rag-assistant",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Fully offline · Recall@k = 1.000 · Zero API spend · Security refusal rate 1.000
          </TypographyP>
          <TypographyP className="font-mono">
            A production-grade, fully offline speech-to-speech translator and document-grounded RAG
            assistant — end-to-end ML system engineering with retrieval quality, latency SLOs,
            security hardening, RBAC enforcement, and CI/CD.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Pipeline</TypographyH3>
          <ul className="list-disc ml-6 space-y-1">
            <li className="font-mono">Faster-Whisper ASR → RBAC-filtered FAISS dense retrieval → Cross-Encoder rerank → Ollama/Mistral LLM → citation integrity check → Coqui TTS output.</li>
            <li className="font-mono">RBAC enforced at retrieval time (not prompt level) — confidential chunks never enter LLM context regardless of prompt injection attempts.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">All SLOs Met</TypographyH3>
          <ul className="list-disc ml-6 space-y-1">
            <li className="font-mono">Retrieval p95 ~50ms (dense + rerank) · RAG LLM p95 ~4.5s.</li>
            <li className="font-mono">Recall@k = 1.000 (13/13 questions) · Security refusal rate 1.000 (6/6 vectors blocked) · RBAC enforcement 1.000 (4/4).</li>
            <li className="font-mono">Cost per request $0.00 — fully local, zero API spend.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Preview</TypographyH3>
          <SlideShow images={[`${BASE_PATH}/local-rag.png`]} />
        </div>
      );
    },
  },

  // ─── 5. OpenDriveFM ──────────────────────────────────────────────────────────
  {
    id: "opendrivefm",
    category: "Autonomous Driving · Computer Vision",
    title: "OpenDriveFM — Trust-Aware Multi-Camera BEV Perception",
    src: `${BASE_PATH}/opendrivefm.png`,
    screenshots: ["opendrivefm.png"],
    skills: {
      frontend: [T.pytorchlightn, T.transformer, T.cv],
      backend:  [T.python],
    },
    live:   "https://github.com/AKilalours/opendrivefm",
    github: "https://github.com/AKilalours/opendrivefm",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            6-camera BEV occupancy mapping · ADE 2.457m · 18.4% better than constant-velocity baseline
          </TypographyP>
          <TypographyP className="font-mono">
            An end-to-end trust-aware multi-camera Bird's Eye View occupancy mapping and trajectory
            prediction system for autonomous driving — trained entirely on nuScenes-mini with no
            external pretrained weights.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Architecture</TypographyH3>
          <ul className="list-disc ml-6 space-y-1">
            <li className="font-mono">Shared-weight 3-layer CNN stem across 6 surround-view cameras → Temporal Transformer → physics-gated CameraTrustScorer → trust-weighted fusion → BEV occupancy head + trajectory head.</li>
            <li className="font-mono">4 progressive upgrades: LiDAR depth supervision · 128×128 BEV resolution · T=4 temporal accumulation with ego-motion-aligned BEV warping.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Results</TypographyH3>
          <ul className="list-disc ml-6 space-y-1">
            <li className="font-mono">v11: ADE 2.457m · FDE 5.486m — beats constant-velocity baseline (ADE 3.012m) by 18.4%.</li>
            <li className="font-mono">CameraTrustScorer: faulted cameras (trust 0.30) vs clean cameras (trust 0.45) — correctly distinguished across 6 fault types + 1–3 simultaneous camera dropout.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Preview</TypographyH3>
          <SlideShow images={[`${BASE_PATH}/opendrivefm.png`]} />
        </div>
      );
    },
  },

  // ─── 6. AI Health Risk ───────────────────────────────────────────────────────
  {
    id: "health-risk-prediction",
    category: "ML · Healthcare AI",
    title: "AI-Powered Health Risk Prediction — 17 Diseases",
    src: `${BASE_PATH}/health-risk.png`,
    screenshots: ["health-risk.png"],
    skills: {
      frontend: [T.python, T.sklearn, T.tensorflow, T.efficientnet],
      backend:  [T.shap, T.plotly],
    },
    live:   "https://github.com/AKilalours/AI-Powered-Health-Risk-Prediction-System-for-Multi-Disease-Diagnosis",
    github: "https://github.com/AKilalours/AI-Powered-Health-Risk-Prediction-System-for-Multi-Disease-Diagnosis",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            17 diseases · avg accuracy 87.3% · HIV 98.94% · Heart Disease 98.54%
          </TypographyP>
          <TypographyP className="font-mono">
            A multi-disease health risk screening system covering 17 chronic and genetic conditions
            from a single pipeline — combining tabular clinical data with chest X-ray imaging —
            generating an interpretable, clinician-style risk report.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Under the Hood</TypographyH3>
          <ul className="list-disc ml-6 space-y-1">
            <li className="font-mono">Random Forest (n_estimators=200, stratified 80/20) for 15 tabular diseases.</li>
            <li className="font-mono">EfficientNetB0 transfer learning for Pneumonia · Custom 3-layer CNN for Tuberculosis X-ray.</li>
            <li className="font-mono">SHAP feature attribution for full prediction interpretability.</li>
            <li className="font-mono">Clinician-style output: diagnosis → 3–5 year progression → comorbidity chain → recommendations → radar chart.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Headline Results</TypographyH3>
          <ul className="list-disc ml-6 space-y-1">
            <li className="font-mono">HIV 98.94% · Heart Disease 98.54% · CKD 97.56% · TB CNN 96.90% · Cancer 96.49% · Alzheimer's 94.42%.</li>
            <li className="font-mono">TB inference p95 ~1.2s/image · pipeline inference-only mode &lt;1s per patient.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Preview</TypographyH3>
          <SlideShow images={[`${BASE_PATH}/health-risk.png`]} />
        </div>
      );
    },
  },

  // ─── 7. Noise-Robust KWS ─────────────────────────────────────────────────────
  {
    id: "noise-robust-kws",
    category: "Speech AI · Edge ML",
    title: "Noise-Robust KWS & Distress Detection",
    src: `${BASE_PATH}/noise-kws.png`,
    screenshots: ["noise-kws.png"],
    skills: {
      frontend: [T.pytorch, T.mfcc, T.cnn],
      backend:  [T.python],
    },
    live:   "https://github.com/AKilalours/noise-robust-kws-distress-detection",
    github: "https://github.com/AKilalours/noise-robust-kws-distress-detection",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Edge-deployable · 0.43 MB · p95 latency 2.18ms · clean accuracy 88.37%
          </TypographyP>
          <TypographyP className="font-mono">
            An edge-deployable keyword spotting and distress detection system targeting
            safety-critical false-negative failure modes — detecting "help", "call police",
            "emergency" in real-world noisy audio.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Under the Hood</TypographyH3>
          <ul className="list-disc ml-6 space-y-1">
            <li className="font-mono">Log-Mel / MFCC feature extraction with SNR-level noise augmentation (0/5/10/20dB) → CNN/CRNN KWS head (11-class) + binary distress classifier.</li>
            <li className="font-mono">Full ablation across 4 variants trained on 84,843 samples.</li>
            <li className="font-mono">Best model (MFCC-NOISE): clean 88.37%, 0dB SNR 77.02%, 0.43 MB, p95 2.18ms — all SLOs met.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Preview</TypographyH3>
          <SlideShow images={[`${BASE_PATH}/noise-kws.png`]} />
        </div>
      );
    },
  },

  // ─── 8. StegoCloak ───────────────────────────────────────────────────────────
  {
    id: "stegocloak",
    category: "Cryptography · Security",
    title: "StegoCloak — Military-Grade Cryptographic Steganography",
    src: `${BASE_PATH}/stegocloak.png`,
    screenshots: ["stegocloak.png"],
    skills: {
      frontend: [T.python, T.aes256, T.resnet, T.pytorch],
      backend:  [T.ollama],
    },
    live:   "https://github.com/AKilalours/StegoCloak",
    github: "https://github.com/AKilalours/StegoCloak",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AES-256-GCM · scrypt KDF · Zero plaintext markers · 58 tests passing
          </TypographyP>
          <TypographyP className="font-mono">
            A password-keyed steganographic system that hides AES-256-GCM authenticated encrypted
            messages invisibly inside images — zero plaintext markers, password-derived header
            positioning, optional CNN steganalysis.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Under the Hood</TypographyH3>
          <ul className="list-disc ml-6 space-y-1">
            <li className="font-mono">AES-256-GCM authenticated encryption → scrypt KDF (N=2¹⁶) → password-keyed CSPRNG for LSB position sampling → zlib compression → GCM auth tag + CRC-32 integrity.</li>
            <li className="font-mono">Password-derived header offset — even the location of hidden data is unknown without the key.</li>
            <li className="font-mono">Optional ResNet-18 CNN steganalysis · LLM transforms via local Ollama · ECC repetition for corruption resilience.</li>
            <li className="font-mono">KDF profiles: interactive ~0.1s · sensitive ~1.0s · 32× stronger variant.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Test Coverage</TypographyH3>
          <ul className="list-disc ml-6 space-y-1">
            <li className="font-mono">58 tests passing: roundtrips across all ECC levels, wrong-password rejection, zero plaintext magic bytes, PSNR visual similarity, tampered ciphertext detection, nonce uniqueness, full end-to-end pipeline validation.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Preview</TypographyH3>
          <SlideShow images={[`${BASE_PATH}/stegocloak.png`]} />
        </div>
      );
    },
  },

  // ─── 9. Crypto Risk Bench ────────────────────────────────────────────────────
  {
    id: "crypto-risk-bench",
    category: "Quant Finance · Risk Analytics",
    title: "Crypto Risk Bench — Walk-Forward Financial Risk Analytics",
    src: `${BASE_PATH}/crypto-risk.png`,
    screenshots: ["crypto-risk.png"],
    skills: {
      frontend: [T.python, T.pandas, T.numpy, T.plotly, T.yfinance],
      backend:  [T.fastapi, T.docker, T.githubactions],
    },
    live:   "https://github.com/AKilalours/Crypto-Risk-Bench",
    github: "https://github.com/AKilalours/Crypto-Risk-Bench",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Walk-forward backtesting · TTL caching 91% latency reduction · AAPL MAPE 3.34%
          </TypographyP>
          <TypographyP className="font-mono">
            A financial ML analytics platform covering market risk metrics, walk-forward backtesting,
            TTL caching, and HTML dashboard generation — with Docker, CI/CD, and documented
            postmortems that most student forecasting repos skip entirely.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Pipeline</TypographyH3>
          <ul className="list-disc ml-6 space-y-1">
            <li className="font-mono">yfinance OHLCV ingestion → TTL file cache (1hr, 85% hit rate) → feature engineering (log returns, rolling vol, EWMA, drawdown).</li>
            <li className="font-mono">Risk analytics: CAGR, Sharpe, Sortino, VaR/CVaR, Max Drawdown, Calmar.</li>
            <li className="font-mono">Walk-forward backtesting: naive, ma7, ewma_ret, GBM → Plotly HTML dashboards + CSV/JSON reports → FastAPI serving.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Results</TypographyH3>
          <ul className="list-disc ml-6 space-y-1">
            <li className="font-mono">AAPL best baseline (ma7) MAPE 3.34% · BTC-USD best baseline (naive) MAPE 3.37%.</li>
            <li className="font-mono">TTL caching reduced p95 latency from 2.1s → 0.18s (91% reduction).</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Preview</TypographyH3>
          <SlideShow images={[`${BASE_PATH}/crypto-risk.png`]} />
        </div>
      );
    },
  },
];

export default projects;
