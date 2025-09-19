import ProjectCard from "@/components/ProjectCard"

const projects = [
  {
    title: "AI KC IoT",
    description: "Research and build AI models to detect cyber attacks on IoT devices, bao gồm các loại tấn công như brute-force (attach password), Port scanning(nmap), DDos (Botnet), 76 loại dữ liệu trong một dòng bao gồm 4 nhãn trong đó có Benign(là bình thường), Còn một loại tấn công nữa thông qua phát hiện địa chỉ ip mạng bất thường bằng cây quyết định",
    tags: ["Data cleaning","Correlation Matrix","Cân bằng dữ liệu (smote và RandomUnderSampler)", 'RNN', "LSTM"],
    href: "#",
  },
  {
    title: "AI Resume Parser",
    description:
      "LLM-powered parser that extracts structured data from PDFs and ranks candidates.",
    tags: ["LangChain", "MultiQueryRetriever", "RAG", "FastAPI"],
    href: "#",
  },
  {
    title: "AI Chatbot for Customer Support",
    description:
      "Retrieval-augmented chatbot with tools, escalation to human, and analytics.",
    tags: ["RAG", "LangChain", "FastAPI", "MongoDB", "LangGraph", "FAISS"],
    href: "https://chatbot.physcode.com",
  },
  {
    title: "AI eKYC for Banking",
    description:
      "AI-powered eKYC for banking customers.",
    tags: ["OpenCV", "FastAPI", "Face Recognition", "Face Detection", "OCR", "PyTorch", "Docker"],
    href: "#",
  },
  {
    title: "Mosyne - AI for photoshop in marketing",
    description:
      "AI-powered photoshop assistant for marketing.",
    tags: ["OpenCV", "PyTorch", "Docker", "Runpod", "Stable Diffusion", "ComfyUI"],
    href: "#",
  },
  {
    title: "Eduprompt - AI for education",
    description:
      "AI-powered education assistant.",
    tags: ["OpenAI", "FastAPI", "LangChain", "MongoDB", "LangGraph", "FAISS"],
    href: "#",
  },
  {
    title: "AI for marketing",
    description:
      "AI-powered marketing assistant.",
    tags: ["Stable Diffusion", "ComfyUI", "Runpod", "Docker", "OpenCV", "PyTorch","CLIP", "Cosine Similarity"],
    href: "#",
  }
]

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-4xl mx-auto scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Projects</h2>
      <p className="mt-2 text-sm sm:text-base text-[--foreground]/80">
        A few highlights from recent work.
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}

