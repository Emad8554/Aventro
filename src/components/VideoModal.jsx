"use client";

import React, { useEffect, useState } from 'react';
// استيراد Framer Motion
import { motion, AnimatePresence } from 'framer-motion';
// استيراد أيقونة الإغلاق
import { IoClose } from 'react-icons/io5'; 
// استيراد Spinner من Shadcn (يفترض أن الملف موجود لديك)
import { Loader2 } from 'lucide-react'; 

// محاكاة Spinner من Shadcn - إذا لم تكن تستخدم Shadcn، استبدلها بـ Spinner عادي
const Spinner = () => (
    <Loader2 className="h-8 w-8 animate-spin text-white" />
);

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  // حالة لعرض Spinner أولاً
  const [isLoading, setIsLoading] = useState(false);

  // تأثير (Effect) يبدأ التحميل عند فتح المودال
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // محاكاة تحميل لمدة ثانيتين (2000 مللي ثانية)
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); 

      // تنظيف (Cleanup) المؤقت
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // حركات Framer Motion
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const videoContainerVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { scale: 0, transition: { duration: 0.3 } },
  };

  return (
    // AnimatePresence ضرورية لإدارة حركة الخروج (Exit)
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          // الخلفية المعتمة والداكنة في البداية
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999] p-4"
          onClick={onClose} // إغلاق عند الضغط على الخلفية
        >
          <motion.div
            variants={videoContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            // لمنع الإغلاق عند النقر داخل حاوية الفيديو
            onClick={(e) => e.stopPropagation()} 
            className="relative w-full max-w-4xl max-h-[80vh]"
          >
            {/* زر الإغلاق (X) في الزاوية العلوية اليمنى */}
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 text-white text-3xl z-50 hover:text-blue-400 transition"
              aria-label="Close video modal"
            >
              <IoClose />
            </button>

            {/* محتوى الفيديو */}
            <div className="relative pt-[56.25%] bg-slate-900 rounded-lg shadow-2xl"> 
              {isLoading ? (
                // عرض Spinner أثناء التحميل
                <div className="absolute inset-0 flex items-center justify-center">
                  <Spinner />
                </div>
              ) : (
                // عرض الفيديو بعد انتهاء التحميل
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={videoUrl}
                  title="Embedded video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;