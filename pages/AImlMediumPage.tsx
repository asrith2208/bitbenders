import React from "react";
import { Link, useParams } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { BookOpen, BarChart3, CheckCircle2, Star, FileText, Lock, ArrowLeft, Trophy, Target, Calendar, Database, GitBranch, Settings, LayoutDashboard } from "lucide-react";

const stats = [
  { icon: <Calendar size={28} />, title: "6-8 Weeks", subtitle: "Structured Learning" },
  { icon: <Database size={28} />, title: "5 Modules", subtitle: "Applied ML Skills" },
  { icon: <CheckCircle2 size={28} />, title: "Peer Review", subtitle: "Graded Capstone" },
  { icon: <Trophy size={28} />, title: "Applied ML Badge", subtitle: "Upon completion" },
];

const learningOutcomes = [
  "Be comfortable with Python libraries: numpy, pandas, scikit-learn",
  "Train and evaluate classification and regression models",
  "Understand model evaluation metrics (Precision, Recall, F1)",
  "Begin simple feature engineering and data preprocessing"
];

const modules = [
  {
    title: "Module 1 — Data Cleaning & EDA",
    desc: "Master the art of preparing data for machine learning.",
    icon: <Database className="text-blue-500" />,
    lessons: [
      "Handling Missing Values (Imputation techniques)",
      "Dealing with Categorical Data (One-Hot, Label Encoding)",
      "Exploratory Data Analysis (EDA) with Pandas & Seaborn",
      "Lab: Cleaning the Titanic Dataset"
    ],
  },
  {
    title: "Module 2 — Feature Engineering & Pipelines",
    desc: "Transform raw data into meaningful features.",
    icon: <Settings className="text-green-500" />,
    lessons: [
      "Feature Scaling (Standardization vs Normalization)",
      "Feature Selection Techniques",
      "Building Scikit-Learn Pipelines",
      "Lab: Building a Preprocessing Pipeline"
    ],
  },
  {
    title: "Module 3 — Model Toolkit",
    desc: "Deep dive into essential ML algorithms.",
    icon: <GitBranch className="text-purple-500" />,
    lessons: [
      "Logistic Regression (Math & Implementation)",
      "Decision Trees & Random Forests",
      "K-Nearest Neighbors (k-NN)",
      "Naive Bayes Classifier",
      "Lab: Comparing Model Performance"
    ],
  },
  {
    title: "Module 4 — Evaluation Metrics",
    desc: "Learn how to truly measure model performance.",
    icon: <BarChart3 className="text-orange-500" />,
    lessons: [
      "Confusion Matrix Analysis",
      "Precision, Recall, and F1-Score",
      "ROC Curves and AUC Score",
      "Cross-Validation Strategies",
      "Quiz: Evaluation Metrics Master"
    ],
  },
  {
    title: "Module 5 — Mini Capstone",
    desc: "End-to-end project implementation.",
    icon: <LayoutDashboard className="text-red-500" />,
    lessons: [
      "Project Scoping & Dataset Selection",
      "End-to-End Implementation (Data → Model)",
      "Building a Simple Web Dashboard (Streamlit/Gradio)",
      "Final Project Submission & Peer Review"
    ],
  },
];

const AImlMediumPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50/50 dark:bg-[#111] pb-20">
      {/* Hero Section */}
      <div className="relative bg-white dark:bg-[#1A1E26] border-b border-gray-200 dark:border-gray-800 pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16A085]/10 text-[#16A085] font-medium text-sm mb-6">
              <Star size={16} />
              <span>Level 2 — Medium</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Applied <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A085] to-[#1ABC9C]">Machine Learning</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              A 6-8 week program to strengthen coding skills, master core algorithms, and build end-to-end ML applications.
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
                    <LayoutDashboard size={120} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3">Spam Classifier with Dashboard</h3>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      Build a complete end-to-end machine learning application. You will collect data, train a Naive Bayes classifier to detect spam emails, and deploy it using a simple Streamlit dashboard for real-time predictions.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Scikit-Learn</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">NLP Basics</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Streamlit</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Deployment</span>
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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Applied ML Badge</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                  Earn this official badge by completing the capstone project and passing the peer review.
                </p>
                <button className="w-full py-3 bg-[#16A085] hover:bg-[#1ABC9C] text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Enroll in Level 2
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
                    const isQuiz = lesson.startsWith("Quiz:");

                    return (
                      <Link key={idx} to={`/roadmaps/ai-ml/medium/modules/${i}/lessons/${idx}`} className="block">
                        <li className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-[#242B38] hover:bg-white dark:hover:bg-[#2D3748] border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-200 cursor-pointer group">
                          <div className="flex items-center gap-4">
                            {isLab ? (
                              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <FileText size={16} />
                              </div>
                            ) : isQuiz ? (
                              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                <CheckCircle2 size={16} />
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
                            {isLab ? "Hands-on" : isQuiz ? "Assessment" : "Concept"}
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

export default AImlMediumPage;
