import React from "react";
import { Link, useParams } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { BookOpen, BarChart3, CheckCircle2, Star, FileText, Lock, ArrowLeft, Trophy, Target, Calendar, Database, GitBranch, Settings, LayoutDashboard, Server, Brain, Rocket, Microscope, ShieldCheck, Zap } from "lucide-react";

const stats = [
  { icon: <Calendar size={28} />, title: "10-14 Weeks", subtitle: "Research Focused" },
  { icon: <Microscope size={28} />, title: "5 Modules", subtitle: "Deep Tech & Ethics" },
  { icon: <Zap size={28} />, title: "Scalable AI", subtitle: "Production & GPUs" },
  { icon: <Trophy size={28} />, title: "Expert Practitioner", subtitle: "Official Certificate" },
];

const learningOutcomes = [
  "Build and optimize deep learning models (CNNs/transformers basics)",
  "End-to-end MLOps: CI/CD for model, monitoring, A/B testing basics",
  "Work with larger datasets, transfer learning, fine-tuning",
  "Ability to design experiments and measure model performance in production"
];

const modules = [
  {
    title: "Module 1 — Deep Learning in Practice",
    desc: "Advanced architectures and optimization.",
    icon: <Brain className="text-blue-500" />,
    lessons: [
      "Advanced Architectures (ResNet, EfficientNet)",
      "Transformers & Attention Mechanisms",
      "Regularization Techniques (Dropout, BatchNorm)",
      "Lab: Implementing a Transformer from Scratch"
    ],
  },
  {
    title: "Module 2 — Transfer Learning & Fine-Tuning",
    desc: "Leveraging pretrained models for efficiency.",
    icon: <GitBranch className="text-green-500" />,
    lessons: [
      "Using HuggingFace & TorchHub",
      "Fine-Tuning Strategies (Freeze vs Unfreeze)",
      "Frugal AI: Distillation & Quantization",
      "Lab: Fine-Tuning BERT for Custom NLP Task"
    ],
  },
  {
    title: "Module 3 — Scalable Training",
    desc: "Handling large datasets and compute.",
    icon: <Zap className="text-yellow-500" />,
    lessons: [
      "Efficient Data Pipelines (tf.data / torch.utils.data)",
      "GPU Basics & Mixed Precision Training",
      "Distributed Training Concepts",
      "Lab: Training on Large Datasets"
    ],
  },
  {
    title: "Module 4 — MLOps & Ethics",
    desc: "Responsible and robust AI systems.",
    icon: <ShieldCheck className="text-red-500" />,
    lessons: [
      "Model Drift Detection & Monitoring",
      "Bias, Fairness, and Explainability (XAI)",
      "Privacy Preserving AI (Federated Learning Intro)",
      "Lab: Setting up a Monitoring Dashboard"
    ],
  },
  {
    title: "Module 5 — Capstone Research Project",
    desc: "Original research and implementation.",
    icon: <Microscope className="text-purple-500" />,
    lessons: [
      "Problem Statement & Literature Review",
      "Experiment Design & Implementation",
      "Writing a Technical Report / Paper",
      "Creating a Research Poster & Presentation"
    ],
  },
];

const AImlExpertPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50/50 dark:bg-[#111] pb-20">
      {/* Hero Section */}
      <div className="relative bg-white dark:bg-[#1A1E26] border-b border-gray-200 dark:border-gray-800 pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16A085]/10 text-[#16A085] font-medium text-sm mb-6">
              <Star size={16} />
              <span>Level 4 — Expert</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A085] to-[#1ABC9C]">AI Practitioner</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              A 10-14 week research-oriented program to master deep learning, MLOps, and build scalable, frugal AI solutions.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* 📊 Stats Section */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mb-20">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="p-6 text-center bg-white dark:bg-[#1A1E26] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:border-[#16A085] dark:hover:border-[#1ABC9C] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex justify-center mb-4 text-[#16A085] dark:text-[#1ABC9C]">{stat.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{stat.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.subtitle}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* Learning Outcomes */}
          <div className="md:col-span-2">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Target className="text-[#16A085]" /> Learning Outcomes
              </h2>
              <div className="bg-white dark:bg-[#1A1E26] rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
                <ul className="space-y-4">
                  {learningOutcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#16A085] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-lg">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Project Example */}
            <ScrollReveal delay={200}>
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <FileText className="text-[#16A085]" /> Capstone Research
                </h2>
                <div className="bg-gradient-to-br from-[#16A085] to-[#1ABC9C] text-white rounded-2xl p-8 relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Microscope size={120} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3">Frugal AI for Social Impact</h3>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      Identify a local problem and solve it using Frugal AI. Example: Build an automated attendance system using low-resolution cameras or a lightweight reading-level classifier for regional languages.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Research</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Optimization</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Edge AI</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Social Impact</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar / Badges */}
          <div>
            <ScrollReveal delay={300}>
              <div className="bg-white dark:bg-[#1A1E26] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 text-center sticky top-24 shadow-sm">
                <div className="w-24 h-24 bg-gradient-to-br from-[#16A085] to-[#1ABC9C] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#16A085]/20">
                  <Trophy size={48} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Expert AI Practitioner</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                  Earn this certificate by completing your research project and presenting it in a public showcase.
                </p>
                <button className="w-full py-3 bg-[#16A085] hover:bg-[#1ABC9C] text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Apply for Level 4
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Curriculum Breakdown</h2>
        </ScrollReveal>

        {/* 📚 Modules Section */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {modules.map((mod, i) => (
            <ScrollReveal key={i}>
              <div className="bg-white dark:bg-[#1A1E26] rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 hover:border-[#16A085] dark:hover:border-[#1ABC9C] transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#16A085]/10 rounded-full font-bold text-xl text-[#16A085]">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                      {mod.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">{mod.desc}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {mod.lessons.map((lesson, idx) => {
                    const isLab = lesson.startsWith("Lab:") || lesson.startsWith("Experiment") || lesson.startsWith("Writing") || lesson.startsWith("Creating");

                    return (
                      <Link key={idx} to={`/roadmaps/ai-ml/expert/modules/${i}/lessons/${idx}`} className="block">
                        <li className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-[#242B38] hover:bg-white dark:hover:bg-[#2D3748] border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-200 cursor-pointer group">
                          <div className="flex items-center gap-4">
                            {isLab ? (
                              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <FileText size={16} />
                              </div>
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                                <BookOpen size={16} />
                              </div>
                            )}
                            <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-[#16A085] dark:group-hover:text-[#1ABC9C] transition-colors">
                              {lesson}
                            </span>
                          </div>
                          <div className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">
                            {isLab ? "Practical" : "Research"}
                          </div>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AImlExpertPage;
