import React from "react";
import { Link, useParams } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { BookOpen, BarChart3, CheckCircle2, Star, FileText, Lock, ArrowLeft, Trophy, Target, Calendar } from "lucide-react";

const stats = [
  { icon: <Calendar size={28} />, title: "4-6 Weeks", subtitle: "Self-paced modular" },
  { icon: <BookOpen size={28} />, title: "4 Modules", subtitle: "Weekly breakdown" },
  { icon: <CheckCircle2 size={28} />, title: "Assessments", subtitle: "Quiz + Project" },
  { icon: <Trophy size={28} />, title: "Beginner AI Badge", subtitle: "Upon completion" },
];

const learningOutcomes = [
  "Understand what AI / ML is and where it's used",
  "Able to write simple Python scripts and use Jupyter notebooks",
  "Visualize data and understand basic statistics",
  "Build a simple supervised model (linear regression/classifier)"
];

const modules = [
  {
    title: "Week 1 — What is AI?",
    desc: "Foundational concepts and real-world understanding.",
    lessons: [
      "Lesson: AI vs ML vs DL vs Data Science (Animated Video)",
      "Activity: Find 5 real-world examples in your school/home",
      "Quiz: Basic AI Concepts"
    ],
  },
  {
    title: "Week 2 — Python basics for AI",
    desc: "Essential programming skills for Machine Learning.",
    lessons: [
      "Concepts: Variables, Lists, Functions, Loops",
      "Lab: Jupyter Notebook Setup",
      "Lab: 10 Mini Python Exercises",
      "Quiz: Python for Data Science"
    ],
  },
  {
    title: "Week 3 — Data and visualization",
    desc: "Understanding data through statistics and plots.",
    lessons: [
      "Stats: Mean, Median, Mode, Variance, Distributions",
      "Tools: Matplotlib & Pandas Basics",
      "Lab: Plot Class Attendance vs Marks (Sample Dataset)",
      "Quiz: Data Visualization"
    ],
  },
  {
    title: "Week 4 — First ML model",
    desc: "Building your first predictive models.",
    lessons: [
      "Concept: Supervised vs Unsupervised Learning",
      "Model: Linear Regression & Simple Classifier (k-NN)",
      "Project: Predict Simple Numeric Outcome",
      "Final Assessment: Beginner Path Complete"
    ],
  },
];

const AImlBeginnerPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50/50 dark:bg-[#111] pb-20">
      {/* Hero Section */}
      <div className="relative bg-white dark:bg-[#1A1E26] border-b border-gray-200 dark:border-gray-800 pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16A085]/10 text-[#16A085] font-medium text-sm mb-6">
              <Star size={16} />
              <span>Level 1 — Beginner</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Foundations of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A085] to-[#1ABC9C]">AI & Machine Learning</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              A 4-6 week self-paced journey to build foundational intuition, write basic code, and create your first ML model.
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
                    <BarChart3 size={120} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3">Predict Student Quiz Scores</h3>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      Create a machine learning model to predict student quiz scores based on the number of hours studied. You'll use linear regression to find the relationship between study time and performance.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Python</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Pandas</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Scikit-Learn</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Linear Regression</span>
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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Beginner AI Badge</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                  Earn this official badge by completing all modules, quizzes, and the final project.
                </p>
                <button className="w-full py-3 bg-[#16A085] hover:bg-[#1ABC9C] text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Start Learning Now
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Weekly Breakdown</h2>
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
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{mod.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">{mod.desc}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {mod.lessons.map((lesson, idx) => {
                    const isQuiz = lesson.startsWith("Quiz:") || lesson.startsWith("Final Assessment:");
                    const isProject = lesson.startsWith("Project:") || lesson.startsWith("Activity:") || lesson.startsWith("Lab:");

                    return (
                      <Link key={idx} to={`/roadmaps/ai-ml/beginner/modules/${i}/lessons/${idx}`} className="block">
                        <li className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-[#242B38] hover:bg-white dark:hover:bg-[#2D3748] border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-200 cursor-pointer group">
                          <div className="flex items-center gap-4">
                            {isQuiz ? (
                              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                <CheckCircle2 size={16} />
                              </div>
                            ) : isProject ? (
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
                            {isQuiz ? "Assessment" : isProject ? "Practical" : "Lesson"}
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

export default AImlBeginnerPage;

// ===================================================================
// == NEW COMPONENT: LessonPage placeholder ==
// ===================================================================
export const LessonPage: React.FC = () => {
  const { moduleId, lessonId } = useParams();

  const lessonTitle = "Lesson Content";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#1A1E26] text-gray-800 dark:text-gray-200 p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#16A085]">{lessonTitle}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Module: {Number(moduleId) + 1}, Lesson: {Number(lessonId) + 1}
        </p>
        <div className="bg-[#16A085]/10 border-l-4 border-[#16A085] text-[#16A085] p-4 rounded-md max-w-md mx-auto">
          <p className="font-bold">Coming Soon!</p>
          <p>This lesson is currently under construction. Please check back later.</p>
        </div>
        <Link
          to="/roadmaps/ai-ml/beginner"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#16A085] text-white font-semibold rounded-lg shadow-md hover:bg-[#1ABC9C] transition-all duration-300"
        >
          <ArrowLeft size={18} />
          Back to Roadmap
        </Link>
      </div>
    </div>
  );
};
