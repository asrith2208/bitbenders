import React from "react";
import { Link, useParams } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { BookOpen, BarChart3, CheckCircle2, Star, FileText, Lock, ArrowLeft, Trophy, Target, Calendar, Database, GitBranch, Settings, LayoutDashboard, Server, Brain, Rocket } from "lucide-react";

const stats = [
  { icon: <Calendar size={28} />, title: "8-10 Weeks", subtitle: "Deep Dive" },
  { icon: <Brain size={28} />, title: "6 Modules", subtitle: "Advanced Concepts" },
  { icon: <Rocket size={28} />, title: "Deployment", subtitle: "Production Ready" },
  { icon: <Trophy size={28} />, title: "Advanced ML Builder", subtitle: "Official Badge" },
];

const learningOutcomes = [
  "Understand and apply feature selection, cross-validation, hyperparameter tuning",
  "Build pipelines & production-aware models",
  "Intro to neural networks and basics of deep learning (image or text)",
  "Deploy a small model as a simple web app"
];

const modules = [
  {
    title: "Module 1 — Model Selection & CV",
    desc: "Rigorous evaluation techniques.",
    icon: <BarChart3 className="text-blue-500" />,
    lessons: [
      "K-Fold Cross-Validation",
      "Stratified Sampling Techniques",
      "Bias-Variance Tradeoff Deep Dive",
      "Lab: Implementing Custom CV Loop"
    ],
  },
  {
    title: "Module 2 — Hyperparameter Tuning",
    desc: "Optimizing model performance.",
    icon: <Settings className="text-green-500" />,
    lessons: [
      "Grid Search vs Randomized Search",
      "Bayesian Optimization Concepts",
      "Automated Machine Learning (AutoML) Intro",
      "Lab: Tuning a Random Forest"
    ],
  },
  {
    title: "Module 3 — Ensembling & Boosting",
    desc: "Combining models for better results.",
    icon: <GitBranch className="text-purple-500" />,
    lessons: [
      "Bagging vs Boosting",
      "Random Forests Deep Dive",
      "XGBoost & LightGBM Architecture",
      "Lab: Stacking Models for Kaggle"
    ],
  },
  {
    title: "Module 4 — Intro to Neural Networks",
    desc: "Foundations of Deep Learning.",
    icon: <Brain className="text-orange-500" />,
    lessons: [
      "Perceptron & Multi-Layer Perceptron (MLP)",
      "Activation Functions & Backpropagation",
      "Intro to CNNs (Convolutional Neural Networks)",
      "Lab: Building a Digit Recognizer (MNIST)"
    ],
  },
  {
    title: "Module 5 — MLOps Basics",
    desc: "Moving from notebook to production.",
    icon: <Server className="text-red-500" />,
    lessons: [
      "Model Saving & Serialization (Pickle/Joblib)",
      "Experiment Tracking (MLflow basics)",
      "Introduction to Docker for ML",
      "Lab: Containerizing a Script"
    ],
  },
  {
    title: "Module 6 — Deployment Lab",
    desc: "Sharing your model with the world.",
    icon: <Rocket className="text-indigo-500" />,
    lessons: [
      "Building an API with Flask/FastAPI",
      "Frontend with Streamlit",
      "Deploying to Cloud (Heroku/Render/Vercel)",
      "Final Project Submission"
    ],
  },
];

const AImlAdvancedPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50/50 dark:bg-[#111] pb-20">
      {/* Hero Section */}
      <div className="relative bg-white dark:bg-[#1A1E26] border-b border-gray-200 dark:border-gray-800 pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16A085]/10 text-[#16A085] font-medium text-sm mb-6">
              <Star size={16} />
              <span>Level 3 — Advanced</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A085] to-[#1ABC9C]">Machine Learning</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              An 8-10 week intensive program to master pipelines, deep learning foundations, and production deployment.
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
                  <FileText className="text-[#16A085]" /> Capstone Project
                </h2>
                <div className="bg-gradient-to-br from-[#16A085] to-[#1ABC9C] text-white rounded-2xl p-8 relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Rocket size={120} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3">Deploy an Image Classifier</h3>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      Build and deploy a full-stack ML application. You will train a Convolutional Neural Network (CNN) to classify images (or a Sentiment Analysis model), wrap it in a Flask API, and create a user-friendly frontend.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">TensorFlow</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Flask</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Docker</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Cloud</span>
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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Advanced ML Builder</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                  Earn this prestigious badge by deploying your model to production and passing a code review.
                </p>
                <button className="w-full py-3 bg-[#16A085] hover:bg-[#1ABC9C] text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Enroll in Level 3
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
                    const isLab = lesson.startsWith("Lab:") || lesson.startsWith("Project");

                    return (
                      <Link key={idx} to={`/roadmaps/ai-ml/advanced/modules/${i}/lessons/${idx}`} className="block">
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
                            {isLab ? "Hands-on" : "Concept"}
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

export default AImlAdvancedPage;
