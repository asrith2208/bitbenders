import React from "react";
import { Link, useParams } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { BookOpen, BarChart3, CheckCircle2, Star, FileText, Lock, ArrowLeft } from "lucide-react";

const stats = [
  { icon: <BookOpen size={28} />, title: "15 Modules", subtitle: "Complete learning journey" },
  { icon: <FileText size={28} />, title: "90 Lessons", subtitle: "Comprehensive content" },
  { icon: <CheckCircle2 size={28} />, title: "15 Tests", subtitle: "Assess your progress" },
  { icon: <Star size={28} />, title: "30 Free Lessons", subtitle: "Get started for free" },
  { icon: <BarChart3 size={28} />, title: "60 Pro Lessons", subtitle: "Advanced content" },
];

const modules = [
  {
    title: "Python Fundamentals for AI/ML",
    desc: "Master Python programming basics — the essential language for AI and Machine Learning.",
    lessons: [
      "Introduction to Python for AI/ML",
      "Variables, Data Types and Basic Operations",
      "🟡 Lists, Tuples, and Dictionaries Pro",
      "🟡 Control Flow: If-Else and Loops Pro",
      "🟡 Functions and Modules Pro",
      "🟡 File Handling and Exception Handling Pro",
      "Module Test: Python Fundamentals",
    ],
  },
  {
    title: "Mathematics for Machine Learning",
    desc: "Learn essential mathematical concepts needed for understanding ML algorithms.",
    lessons: [
      "Introduction to Linear Algebra",
      "Vectors and Matrices",
      "🟡 Statistics and Probability Basics Pro",
      "🟡 Mean, Median, Mode and Standard Deviation Pro",
      "🟡 Probability Distributions Pro",
      "🟡 Introduction to Calculus for ML Pro",
      "Module Test: Mathematics for ML",
    ],
  },
  {
    title: "Scikit-learn Basics",
    desc: "Get started with the most popular ML library for beginners.",
    lessons: [
      "Introduction to Scikit-learn",
      "Loading and Exploring Datasets",
      "🟡 Data Preprocessing and Scaling Pro",
      "🟡 Train-Test Split Pro",
      "🟡 Building Your First ML Model Pro",
      "🟡 Model Evaluation Metrics Pro",
      "Module Test: Scikit-learn Basics",
    ],
  },
  {
    title: "Supervised Learning - Regression",
    desc: "Learn regression algorithms to predict continuous values.",
    lessons: [
      "Introduction to Regression",
      "Linear Regression",
      "🟡 Multiple Linear Regression Pro",
      "🟡 Polynomial Regression Pro",
      "🟡 Evaluating Regression Models Pro",
      "🟡 Regression Project: House Price Prediction Pro",
      "Module Test: Regression Algorithms",
    ],
  },
  {
    title: "Supervised Learning - Classification",
    desc: "Learn classification algorithms to predict categories.",
    lessons: [
      "Introduction to Classification",
      "Logistic Regression",
      "🟡 Decision Trees Pro",
      "🟡 Random Forests Pro",
      "🟡 K-Nearest Neighbors (KNN) Pro",
      "🟡 Classification Metrics: Accuracy, Precision, Recall Pro",
      "Module Test: Classification Algorithms",
    ],
  },
  {
    title: "Feature Engineering",
    desc: "Learn to create and select features that improve model performance.",
    lessons: [
      "What is Feature Engineering?",
      "Handling Missing Data",
      "🟡 Encoding Categorical Variables Pro",
      "🟡 Feature Scaling and Normalization Pro",
      "🟡 Creating New Features Pro",
      "🟡 Feature Selection Techniques Pro",
      "Module Test: Feature Engineering",
    ],
  },
  {
    title: "Model Evaluation and Validation",
    desc: "Master techniques to evaluate and improve your ML models.",
    lessons: [
      "Cross-Validation Techniques",
      "🟡 Confusion Matrix and Classification Report Pro",
      "🟡 ROC Curves and AUC Score Pro",
      "🟡 Hyperparameter Tuning Pro",
      "🟡 Grid Search and Random Search Pro",
      "🟡 Bias-Variance Tradeoff Pro",
      "Module Test: Model Evaluation",
    ],
  },
  {
    title: "Introduction to Deep Learning",
    desc: "Get started with neural networks and deep learning fundamentals.",
    lessons: [
      "What is Deep Learning?",
      "Neural Networks Basics",
      "🟡 Activation Functions Pro",
      "🟡 Forward and Backward Propagation Pro",
      "🟡 Introduction to TensorFlow Pro",
      "🟡 Building Your First Neural Network Pro",
      "Module Test: Deep Learning Basics",
    ],
  },
  {
    title: "Git and Version Control",
    desc: "Learn to manage code and collaborate using Git and GitHub.",
    lessons: [
      "Introduction to Version Control",
      "Git Basics: Clone, Commit, Push",
      "🟡 Branching and Merging Pro",
      "🟡 Working with GitHub Pro",
      "🟡 Collaborating on Projects Pro",
      "🟡 Best Practices for ML Projects Pro",
      "Module Test: Git and Version Control",
    ],
  },
  {
    title: "ML Project Workflow",
    desc: "Learn the complete workflow for ML projects from start to finish.",
    lessons: [
      "Understanding the Problem",
      "Data Collection and Exploration",
      "🟡 Data Preprocessing Pipeline Pro",
      "🟡 Model Selection and Training Pro",
      "🟡 Model Deployment Basics Pro",
      "🟡 Documenting Your ML Project Pro",
      "Module Test: ML Project Workflow",
    ],
  },
  {
    title: "Capstone Project",
    desc: "Apply everything you learned in a real-world AI/ML project.",
    lessons: [
      "Project Overview and Requirements",
      "Dataset Selection and Exploration",
      "🟡 Data Preprocessing and Feature Engineering Pro",
      "🟡 Model Training and Evaluation Pro",
      "🟡 Model Optimization and Tuning Pro",
      "🟡 Final Project Presentation Pro",
      "Final Assessment: Beginner Path Complete",
    ],
  },
];

const AImlBeginnerPage: React.FC = () => {
  return (
    <main className="container mx-auto px-6 py-20">
      <ScrollReveal>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#F4B400]">
          Beginner Roadmap — AI/ML Foundations
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-12">
          Start your AI/ML journey with Python, math, data handling, and machine learning — all structured for beginners.
        </p>
      </ScrollReveal>

      {/* 📊 Stats Section */}
      <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-6 mb-20">
        {stats.map((stat, i) => (
          <ScrollReveal key={i}>
            <div className="p-6 text-center bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700/50 transition-all duration-300 hover:border-[#F4B400]">
              <div className="flex justify-center mb-3 text-[#F4B400]">{stat.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{stat.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.subtitle}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <h2 className="text-3xl font-bold mb-8 text-center text-[#F4B400]">Module Structure</h2>
      </ScrollReveal>

      {/* 📚 Modules Section */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {modules.map((mod, i) => (
          <ScrollReveal key={i}>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-transparent hover:border-[#F4B400]/70 transition-all duration-300">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-900 rounded-full font-bold text-xl text-gray-400 dark:text-gray-500">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{mod.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{mod.desc}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {mod.lessons.map((lesson, idx) => {
                  const isPro = lesson.includes("Pro");
                  const isTest = lesson.startsWith("Module Test:") || lesson.startsWith("Final Assessment:");
                  const cleanTitle = lesson.replace("🟡", "").replace("Pro", "").trim();

                  return (
                    <Link key={idx} to={`/modules/${i}/lessons/${idx}`} className="block">
                      <li className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-200/60 dark:hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer">
                        <div className="flex items-center gap-4">
                          {isPro ? (
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#F4B400]/20">
                              <Lock className="w-4 h-4 text-[#F4B400]" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                          )}
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            {cleanTitle}
                          </span>
                          {isPro && (
                            <span className="text-xs font-bold bg-[#F4B400]/20 text-[#F4B400] px-2 py-0.5 rounded-md">
                              PRO
                            </span>
                          )}
                        </div>
                        <div className="text-xs font-medium bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-md">
                          {isTest ? "Test" : "Lesson"}
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

      {/* 🎯 Career Section */}
      <ScrollReveal>
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#F4B400]">🎯 Career Opportunities</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            This Beginner Path prepares you for all 15 entry-level AI/ML roles:
          </p>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            {[
              "Junior Data Scientist",
              "Data Analyst (ML)",
              "ML Intern",
              "AI Trainee",
              "Junior ML Engineer",
              "Data Labeling Specialist",
              "AI Research Assistant",
              "AI/ML Engineer",
            ].map((role, i) => (
              <div
                key={i}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-900/40 rounded-xl border border-gray-200 dark:border-gray-800/50 hover:border-[#F4B400] transition-all duration-300"
              >
                {role}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </main>
  );
};

export default AImlBeginnerPage;

// ===================================================================
// == NEW COMPONENT: LessonPage placeholder ==
// ===================================================================
export const LessonPage: React.FC = () => {
  const { moduleId, lessonId } = useParams();

  const lessonTitle = "Lesson Content";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#F4B400]">{lessonTitle}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Module: {Number(moduleId) + 1}, Lesson: {Number(lessonId) + 1}
        </p>
        <div className="bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-[#F4B400] text-yellow-800 dark:text-yellow-300 p-4 rounded-md">
          <p className="font-bold">Coming Soon!</p>
          <p>This lesson is currently under construction. Please check back later.</p>
        </div>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#F4B400] text-black font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
        >
          <ArrowLeft size={18} />
          Back to Roadmap
        </Link>
      </div>
    </div>
  );
};
