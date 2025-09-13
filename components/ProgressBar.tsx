import { motion } from 'framer-motion';

// Progress Bar Component
export const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => {
  const percentage = ((current + 1) / total) * 100;
  
  return (
    <div className="w-24 md:w-32 h-2 bg-green-100 rounded-full overflow-hidden">
      <motion.div 
        className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
};