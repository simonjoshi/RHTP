import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { motion } from "motion/react";
import { Heart, CheckCircle2, UserCheck, FileText } from "lucide-react";

interface LocationState {
  userName: string;
}

export default function AccountCreation() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  useEffect(() => {
    // Transition to portal after 7 seconds
    const timer = setTimeout(() => {
      navigate("/portal", {
        state: {
          userName: state?.userName
        },
        replace: true // Replace history so back button doesn't go to loading page
      });
    }, 7000);

    return () => clearTimeout(timer);
  }, [navigate, state]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center px-5">
      <div className="max-w-md w-full">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="w-12 h-12 bg-purple-700 rounded-lg flex items-center justify-center">
            <Heart className="h-7 w-7 text-white fill-white" />
          </div>
          <span className="text-2xl font-bold text-purple-700">CareMatch</span>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 text-center"
        >
          {/* Animated Icon Container */}
          <div className="mb-6 relative h-32 flex items-center justify-center">
            {/* Outer Ring */}
            <motion.div
              className="absolute w-32 h-32 border-4 border-purple-200 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Middle Ring */}
            <motion.div
              className="absolute w-24 h-24 border-4 border-purple-400 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Center Icon */}
            <motion.div
              className="relative z-10 w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="h-8 w-8 text-white fill-white" />
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Creating Your Account
            </h1>
            <p className="text-gray-600 mb-6">
              Please hold for a few seconds while we set up your personalized care portal...
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-3"
            >
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">Account verified</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-3"
            >
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">Care coordinator assigned</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7 }}
              className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-3"
            >
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">Portal customizing for you</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2 }}
              className="flex items-center gap-3 bg-purple-50 border border-purple-200 rounded-lg p-3"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <div className="h-5 w-5 border-2 border-purple-700 border-t-transparent rounded-full" />
              </motion.div>
              <span className="text-sm text-gray-700">Finalizing setup...</span>
            </motion.div>
          </div>

          {/* Loading Dots */}
          <motion.div
            className="flex justify-center gap-2 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-purple-700 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-sm text-gray-600 mt-6"
        >
          🎉 Welcome to CareMatch! Your journey to better health starts now.
        </motion.p>
      </div>
    </div>
  );
}