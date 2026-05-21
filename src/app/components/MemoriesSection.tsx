import { motion } from 'motion/react';
import { Heart, BookHeart, ImageIcon, Utensils } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MemoriesSectionProps {
  onWishClick: () => void;
  onGalleryClick: () => void;
  onDinnerClick: () => void;
}

export function MemoriesSection({ onWishClick, onGalleryClick, onDinnerClick }: MemoriesSectionProps) {
  const memories = [
    {
      src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3ZlJTIwbGV0dGVyJTIwaGVhcnR8ZW58MHx8fHwxNzA5NzMxMjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Love letter and hearts",
      caption: "My Heartfelt Wishes",
      subtitle: "A special message for you",
      icon: BookHeart,
      color: "from-pink-400 to-rose-500",
      onClick: onWishClick
    },
    {
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjByb21hbnRpYyUyMG1lbW9yaWVzfGVufDB8fHx8MTcwOTczMTIwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Romantic memories",
      caption: "Our Love Story Gallery",
      subtitle: "Beautiful moments together",
      icon: ImageIcon,
      color: "from-rose-400 to-pink-500",
      onClick: onGalleryClick
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMHJlc3RhdXJhbnR8ZW58MHx8fHwxNzA5NzMxMjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Romantic dinner",
      caption: "Birthday Dinner Date",
      subtitle: "Join me for a special evening",
      icon: Utensils,
      color: "from-purple-400 to-pink-500",
      onClick: onDinnerClick
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-rose-100 to-pink-200">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6">
            Beautiful Memories
          </h2>
          <p className="text-xl text-pink-700 max-w-2xl mx-auto">
            Every moment with you becomes a treasured memory. Here's to creating many more together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {memories.map((memory, index) => {
            const IconComponent = memory.icon;
            return (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0, y: 50 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <Card
                  className="aspect-[3/4] border-pink-300 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white cursor-pointer"
                  onClick={memory.onClick}
                >
                  <div className="relative h-full">
                    <ImageWithFallback
                      src={memory.src}
                      alt={memory.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${memory.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Icon at top */}
                    <motion.div
                      className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent size={32} className="text-pink-500" />
                    </motion.div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="text-2xl font-bold text-center drop-shadow-lg mb-2">
                          {memory.caption}
                        </h3>
                        <p className="text-sm text-center text-pink-100 drop-shadow-lg">
                          {memory.subtitle}
                        </p>
                        <div className="flex justify-center mt-3">
                          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium">
                            Click to explore ✨
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Floating hearts on hover */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Heart
                        size={40}
                        fill="white"
                        className="text-white drop-shadow-2xl"
                      />
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 text-pink-600">
            <Heart size={24} fill="currentColor" />
            <span className="text-xl font-medium">Made with love for Nadine</span>
            <Heart size={24} fill="currentColor" />
          </div>
          <motion.p
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-pink-500 mt-4 text-lg italic"
          >
            Three special surprises waiting for you, my love 💕
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}