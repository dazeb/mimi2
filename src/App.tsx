import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Heart, Star, Users, Lightbulb, Shield, Home, ChevronRight, Cat, Sparkles } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  adventure: string;
  lesson: string;
  ageRange: string;
  icon: React.ReactNode;
  color: string;
  preview: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "Mimi and the Missing Smile",
    adventure: "When their elderly neighbor Mrs. Chen seems unusually sad and stops tending to her beautiful garden, Mimi notices something is wrong and leads Ashlie on a mission to discover what's bothering her. Through careful observation and small acts of kindness, they learn that Mrs. Chen is lonely since her grandchildren moved away.",
    lesson: "Kindness and community - showing how small gestures can make a big difference in someone's day.",
    ageRange: "4-6 years",
    icon: <Heart className="w-6 h-6" />,
    color: "bg-pink-100 border-pink-300 text-pink-800",
    preview: "\"Mimi's whiskers twitched as she watched Mrs. Chen through the window. Something wasn't right. Where were the colorful flowers? Where was Mrs. Chen's happy humming?\""
  },
  {
    id: 2,
    title: "The Great Backyard Treasure Hunt",
    adventure: "When Ashlie loses her favorite stuffed elephant somewhere in their large backyard, she feels devastated and wants to give up searching. Mimi refuses to let her sister stay sad and uses her keen cat senses to turn the search into an exciting treasure hunt.",
    lesson: "Perseverance and problem-solving - never giving up when something is important to you.",
    ageRange: "5-7 years",
    icon: <Star className="w-6 h-6" />,
    color: "bg-yellow-100 border-yellow-300 text-yellow-800",
    preview: "\"Don't worry, Ashlie,\" Mimi seemed to say with her encouraging purr. \"Every great detective needs a partner, and I have the best nose in the neighborhood!\""
  },
  {
    id: 3,
    title: "Mimi's Rainy Day Rescue",
    adventure: "During a week of stormy weather that keeps them indoors, both Mimi and Ashlie start feeling restless and grumpy with each other. When they hear tiny meowing sounds coming from their garage, they discover a scared kitten who got separated from its family during the storm.",
    lesson: "Empathy and sibling cooperation - learning to work through disagreements and care for others.",
    ageRange: "5-8 years",
    icon: <Shield className="w-6 h-6" />,
    color: "bg-blue-100 border-blue-300 text-blue-800",
    preview: "\"Listen!\" whispered Ashlie, forgetting all about their earlier argument. \"Do you hear that, Mimi? Someone needs our help!\""
  },
  {
    id: 4,
    title: "The New Friend Next Door",
    adventure: "When a new family moves in next door with a shy little boy named Sam who speaks a different language, Ashlie wants to be friends but doesn't know how to communicate with him. Mimi observes that Sam looks lonely and devises clever ways to bring the children together through play.",
    lesson: "Friendship and inclusion - celebrating differences and finding common ground with others.",
    ageRange: "6-8 years",
    icon: <Users className="w-6 h-6" />,
    color: "bg-green-100 border-green-300 text-green-800",
    preview: "\"Maybe friendship doesn't need words,\" thought Ashlie as she watched Mimi gently place her favorite toy mouse at Sam's feet, making him smile for the first time.\""
  },
  {
    id: 5,
    title: "Mimi and the Courage to Try",
    adventure: "When Ashlie gets invited to try out for the school's young performers group but feels too scared to audition, Mimi senses her fear and creates a series of confidence-building 'practice performances' around their house and neighborhood.",
    lesson: "Courage and self-confidence - understanding that everyone feels nervous sometimes, and that's okay.",
    ageRange: "6-8 years",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "bg-purple-100 border-purple-300 text-purple-800",
    preview: "\"Being brave doesn't mean you're not scared,\" Ashlie realized as Mimi purred encouragingly. \"It means you try anyway, especially when you have someone who believes in you.\""
  }
];

function App() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'characters' | 'books'>('overview');

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50"
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50"
    >
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      
      {/* Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white shadow-lg border-b-4 border-orange-200"
      >
        <div className="max-w-6xl mx-auto px-6 py-8">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center space-x-4 mb-4"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-orange-100 p-3 rounded-full"
            >
              <Cat className="w-8 h-8 text-orange-600" />
            </motion.div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-4xl font-bold text-gray-800 text-center"
            >
              The Mimi & Ashlie Adventure Series
            </motion.h1>
            <motion.div 
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="bg-yellow-100 p-3 rounded-full"
            >
              <Star className="w-8 h-8 text-yellow-600" />
            </motion.div>
          </motion.div>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed"
          >
            Heartwarming adventures of a clever cat and her loving human sister as they discover 
            that the biggest adventures can happen right in their own backyard.
          </motion.p>
        </div>
      </motion.header>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="bg-white border-b-2 border-gray-100 sticky top-0 z-10"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center space-x-8">
            {[
              { id: 'overview', label: 'Series Overview', icon: <Home className="w-5 h-5" /> },
              { id: 'characters', label: 'Meet the Characters', icon: <Heart className="w-5 h-5" /> },
              { id: 'books', label: 'Book Collection', icon: <BookOpen className="w-5 h-5" /> }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.2 + (tab.id === 'overview' ? 0 : tab.id === 'characters' ? 0.1 : 0.2) }}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-6 py-4 border-b-3 transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'border-orange-400 text-orange-600 bg-orange-50'
                    : 'border-transparent text-gray-600 hover:text-orange-500 hover:bg-orange-25'
                }`}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="max-w-6xl mx-auto px-6 py-8"
      >
        {/* Series Overview Tab */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div 
              key="overview"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg p-8 border-2 border-orange-100"
              >
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <BookOpen className="w-8 h-8 text-orange-600 mr-3" />
                About the Series
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Mimi & Ashlie Adventure Series follows the heartwarming escapades of a clever cat 
                  named Mimi and her loving seven-year-old human sister Ashlie as they discover that the biggest 
                  adventures can happen right in their own backyard. Through their special bond and Mimi's unique 
                  ability to understand human emotions, the duo learns important life lessons while exploring their 
                  world with curiosity and kindness.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Each book celebrates the magic of friendship, family, and finding wonder in everyday moments, 
                  making them perfect for children aged 4-8 and the parents who read with them.
                </p>
              </div>
              </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-6 border-2 border-pink-100"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Star className="w-6 h-6 text-pink-600 mr-2" />
                  Key Themes
                </h3>
                <ul className="space-y-3">
                  {['Friendship & Family Bonds', 'Problem-Solving Skills', 'Kindness & Empathy', 'Courage & Confidence', 'Community & Inclusion'].map((theme, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      {theme}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-6 border-2 border-purple-100"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Lightbulb className="w-6 h-6 text-purple-600 mr-2" />
                  Interactive Features
                </h3>
                <ul className="space-y-3">
                  {['Questions for young readers', 'Sound effects and actions', 'Problem-solving activities', 'Emotional learning moments', 'Family discussion prompts'].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            </motion.div>
          )}

        {/* Characters Tab */}
          {activeTab === 'characters' && (
            <motion.div 
              key="characters"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mimi Character Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-orange-100"
              >
                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6">
                  <div className="flex items-center justify-center mb-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="bg-white p-4 rounded-full shadow-lg"
                    >
                      <img 
                        src="/cat.png" 
                        alt="Mimi the cat" 
                        className="w-12 h-12 object-contain"
                      />
                    </motion.div>
                  </div>
                  <h3 className="text-3xl font-bold text-center text-gray-800">Mimi</h3>
                  <p className="text-center text-gray-600 font-medium">The Clever Cat</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Appearance</h4>
                      <p className="text-gray-700 text-sm">
                        A spirited cat with patches of black and white fur, and bright green eyes 
                        that seem to sparkle with mischief.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Special Abilities</h4>
                      <p className="text-gray-700 text-sm">
                        Extraordinary gift for sensing when Ashlie or others need help, incredibly resourceful 
                        at finding creative solutions to problems.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Personality</h4>
                      <p className="text-gray-700 text-sm">
                        Brave but thoughtful, always leading with her heart while using natural cat instincts 
                        to navigate tricky situations.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Ashlie Character Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-pink-100"
              >
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6">
                  <div className="flex items-center justify-center mb-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="bg-white p-4 rounded-full shadow-lg"
                    >
                      <img 
                        src="/girl.png" 
                        alt="Ashlie the girl" 
                        className="w-12 h-12 object-contain"
                      />
                    </motion.div>
                  </div>
                  <h3 className="text-3xl font-bold text-center text-gray-800">Ashlie</h3>
                  <p className="text-center text-gray-600 font-medium">The Curious Nine-Year-Old</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Appearance</h4>
                      <p className="text-gray-700 text-sm">
                        Flowing brown hair often tied in colorful hair ties and warm brown eyes full of wonder.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Special Bond</h4>
                      <p className="text-gray-700 text-sm">
                        Has a special connection with Mimi that goes beyond typical pet ownership - she truly 
                        sees Mimi as her sister and best friend.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Personality</h4>
                      <p className="text-gray-700 text-sm">
                        Naturally empathetic and loves asking questions about everything around her. Gentle but 
                        determined, with a talent for noticing when others might be feeling left out or sad.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-2 border-green-100"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Users className="w-6 h-6 text-green-600 mr-2" />
                Their Special Relationship
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mimi and Ashlie share an extraordinary bond that forms the heart of every adventure. Mimi communicates 
                through expressive meows, purrs, and body language that Ashlie has learned to understand perfectly. 
                Together, they demonstrate that the strongest friendships are built on trust, understanding, and 
                unconditional love. Their relationship shows young readers the beauty of interspecies friendship 
                and the importance of listening with both our ears and our hearts.
              </p>
            </motion.div>
            </motion.div>
          )}

        {/* Books Tab */}
          {activeTab === 'books' && (
            <motion.div 
              key="books"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
            {selectedBook ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedBook(null)}
                  className="flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 rotate-180 mr-2" />
                  Back to Book Collection
                </motion.button>
                
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 ${selectedBook.color}`}>
                  {selectedBook.icon}
                  <span className="ml-2">Book {selectedBook.id}</span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedBook.title}</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Target Age</h4>
                    <p className="text-gray-700">{selectedBook.ageRange}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Key Theme</h4>
                    <p className="text-gray-700">{selectedBook.lesson.split(' - ')[0]}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Series Position</h4>
                    <p className="text-gray-700">Book {selectedBook.id} of 5</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Adventure Summary</h3>
                    <div className="text-gray-700 leading-relaxed space-y-4">
                      <p>{selectedBook.adventure}</p>
                      <p>
                        The story unfolds over several days as Ashlie wrestles with her fears about performing in front of others. 
                        She practices her favorite song in her bedroom but freezes up whenever she imagines an audience watching her. 
                        Mimi observes her distress and begins orchestrating small "performances" - first encouraging Ashlie to sing 
                        to her stuffed animals, then to the family goldfish, and eventually to their neighbor's friendly dog through the fence.
                      </p>
                      <p>
                        The turning point comes when Ashlie's parents notice her anxiety and gently ask about the audition flyer. 
                        Through their conversation, Ashlie learns that even grown-ups feel nervous about new challenges. Her mom shares 
                        a story about her own childhood fear of speaking in class, while her dad reveals how he still gets butterflies 
                        before important work presentations. This family moment helps Ashlie understand that nervousness is a normal 
                        human experience, not a sign of weakness.
                      </p>
                      <p>
                        Meanwhile, Mimi continues her confidence-building campaign with increasingly creative approaches. She "performs" 
                        her own little shows - stretching dramatically in sunbeams, chasing her tail with theatrical flair, and even 
                        "singing" along with Ashlie's practice sessions through melodic meows. These playful demonstrations show Ashlie 
                        that performing can be joyful and natural, not just scary and formal.
                      </p>
                      <p>
                        The story reaches its emotional peak when Ashlie decides to practice her song one more time in the backyard. 
                        As she sings, she notices that birds seem to pause and listen, a butterfly lands nearby, and even the neighbor's 
                        cat appears at the fence. Mimi sits proudly beside her, purring in harmony. In this magical moment, Ashlie 
                        realizes that her voice has the power to bring beauty into the world - and that's worth sharing, regardless 
                        of whether she's perfect.
                      </p>
                      <p>
                        Each mini-performance builds Ashlie's confidence as Mimi provides enthusiastic "applause" through purrs and gentle 
                        head bumps. The climax comes when Ashlie realizes that performing isn't about being perfect - it's about sharing 
                        something you love with others who want to listen. With Mimi by her side as her "good luck charm," Ashlie finds 
                        the courage to audition and discovers that her nervousness transforms into excitement when she focuses on the joy of singing.
                      </p>
                      <p>
                        The resolution shows Ashlie at the audition, still nervous but now equipped with coping strategies and a deeper 
                        understanding of courage. She carries a small photo of Mimi in her pocket as a reminder of their practice sessions 
                        and the unconditional support that helped her grow. Whether she gets selected for the group becomes secondary to 
                        the personal victory of facing her fears and discovering her own inner strength. The story ends with Ashlie and 
                        Mimi celebrating at home - not necessarily the audition results, but the journey they took together and the 
                        confidence Ashlie has gained for future challenges.
                      </p>
                      <p>
                        Throughout the week leading up to the audition, Mimi becomes increasingly inventive in her encouragement methods. 
                        She starts leaving small "gifts" on Ashlie's pillow - a favorite hair tie, a smooth pebble from the garden, 
                        even her own cherished catnip mouse - as if creating a collection of good luck charms. When Ashlie practices, 
                        Mimi positions herself as the perfect audience: attentive but not judgmental, responsive but not overwhelming.
                      </p>
                      <p>
                        The story also explores the ripple effects of courage within the family. Ashlie's younger cousin visits during 
                        this time and admits she's been afraid to join her school's art club. Watching Ashlie work through her own fears 
                        inspires the cousin to take her own brave step. This subplot reinforces how acts of courage can inspire others 
                        and create positive change beyond just ourselves.
                      </p>
                      <p>
                        On the morning of the audition, Ashlie wakes up with familiar butterflies, but this time they feel different - 
                        more like excitement than pure fear. Mimi seems to sense this shift and greets her with an especially loud, 
                        confident purr. As Ashlie gets ready, she practices the breathing techniques her mom taught her, remembers her 
                        dad's words about butterflies being normal, and feels the small photo of Mimi in her pocket like a warm reminder 
                        of all the love supporting her.
                      </p>
                      <p>
                        The audition scene itself is handled with sensitivity, showing Ashlie's nervousness as natural and valid while 
                        also demonstrating her growth. She doesn't magically become fearless, but she has learned to work with her 
                        nervousness rather than being paralyzed by it. The other children auditioning are also nervous, which helps 
                        Ashlie realize she's not alone in her feelings. When it's her turn to sing, she closes her eyes for a moment, 
                        thinks of Mimi's encouraging purrs, and begins.
                      </p>
                      <p>
                        The book's final pages show Ashlie returning home, regardless of the audition outcome, with a new sense of 
                        accomplishment. Mimi greets her at the door as if she already knows something wonderful has happened. They spend 
                        the evening together in their favorite spot by the window, with Ashlie telling Mimi all about her experience. 
                        The story concludes with Ashlie realizing that the real victory wasn't about getting into the group - it was 
                        about discovering that she could face her fears and that having someone believe in you makes all the difference.
                      </p>
                      <p>
                        The week begins with Ashlie discovering the audition flyer crumpled at the bottom of her backpack, where she'd 
                        hastily shoved it after her teacher handed it out. The colorful paper seems to mock her with its cheerful fonts 
                        and exclamation points. She smooths it out on her desk, reading the requirements again: "Prepare one song of 
                        your choice. Auditions will be held in the school auditorium." The word "auditorium" makes her stomach flip - 
                        that huge space with its rows of empty seats that seem to stare back at performers.
                      </p>
                      <p>
                        Mimi notices the change in Ashlie's demeanor immediately. Where usually Ashlie would greet her with enthusiastic 
                        pets and chatter about her day, now she sits quietly at her desk, staring at the paper. Mimi approaches cautiously, 
                        her whiskers twitching as she senses her human's distress. She jumps onto the desk and deliberately sits on the 
                        flyer, as if to say, "This thing is bothering you, so I'll make it go away." But when Ashlie gently moves her aside 
                        and sighs, Mimi knows this problem requires a more sophisticated solution.
                      </p>
                      <p>
                        The first "practice performance" happens almost by accident. Ashlie is humming while organizing her stuffed animals, 
                        and Mimi notices how naturally the melody flows when Ashlie isn't thinking about it. Mimi strategically positions 
                        herself among the stuffed animals, sitting perfectly still like an audience member. When Ashlie notices, she laughs 
                        despite her worries. "Are you my audience, Mimi?" she asks, and something about the cat's attentive posture makes 
                        her feel safe enough to sing a few lines. Mimi responds with a gentle purr of approval, and Ashlie feels a tiny 
                        spark of confidence.
                      </p>
                      <p>
                        As the days progress, Mimi's "audience expansion plan" becomes more elaborate. She leads Ashlie to the family goldfish, 
                        sitting beside the tank with such focused attention that Ashlie can't help but giggle and sing to their aquatic 
                        audience. The goldfish seem to swim in rhythm with her voice, creating a magical moment that makes Ashlie forget 
                        her fears entirely. Next, Mimi guides her to the back door, where the neighbor's golden retriever, Max, often 
                        lounges by the fence. When Ashlie sings, Max's tail wags enthusiastically, and Mimi purrs so loudly it's almost 
                        like harmony.
                      </p>
                      <p>
                        The breakthrough moment comes during a family dinner when Ashlie's parents notice her picking at her food and 
                        staring off into space. Her mother gently asks about the audition flyer she'd seen on Ashlie's desk. What follows 
                        is a heartfelt family conversation where both parents share their own stories of childhood fears. Her mother reveals 
                        how she used to hide in the bathroom during oral report days, while her father admits he still practices important 
                        presentations in front of their bedroom mirror. These revelations help Ashlie understand that courage isn't about 
                        not being scared - it's about doing something important to you despite the fear.
                      </p>
                      <p>
                        Inspired by her parents' honesty, Ashlie decides to practice more seriously. She chooses her favorite song - one 
                        her grandmother used to sing to her - and begins working on it in earnest. Mimi becomes her dedicated practice 
                        partner, positioning herself in different spots around the room to simulate various audience perspectives. Sometimes 
                        she sits directly in front of Ashlie, maintaining encouraging eye contact. Other times she lounges casually nearby, 
                        showing Ashlie that audiences can be relaxed and friendly rather than intimidating and judgmental.
                      </p>
                      <p>
                        The magical backyard moment occurs on Thursday evening, three days before the audition. Ashlie has been practicing 
                        for an hour, and frustration is building because she keeps stumbling over the same verse. Mimi leads her outside, 
                        where the setting sun creates a natural spotlight through the oak tree's branches. As Ashlie begins to sing in 
                        this serene setting, something shifts. Her voice finds its natural rhythm, and she notices the world responding: 
                        birds pause their evening chatter, a butterfly dances near her shoulder, and even the neighbor's usually aloof 
                        cat appears at the fence, listening intently. Mimi sits beside her, purring in perfect harmony, and Ashlie realizes 
                        that her voice has the power to create beauty and connection.
                      </p>
                      <p>
                        The final practice session takes place in Ashlie's bedroom on Saturday night. She's laid out her audition outfit 
                        and prepared everything for Monday morning, but sleep seems impossible. Mimi curls up on the bed, and Ashlie begins 
                        singing softly, more for comfort than practice. As she sings, she notices how Mimi's breathing synchronizes with 
                        the melody, how the cat's purr provides a gentle bass note to her soprano. In this quiet moment, Ashlie understands 
                        that performing isn't about impressing strangers - it's about sharing something beautiful with others who want to 
                        receive it.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Learning Objective</h3>
                    <div className="text-gray-700 leading-relaxed space-y-4">
                      <p>{selectedBook.lesson}</p>
                      <p>
                        This story specifically addresses performance anxiety, which many children experience in various situations - 
                        from school presentations to sports tryouts to social interactions. Through Ashlie's journey, young readers 
                        learn practical strategies for managing nervousness, including gradual exposure, positive self-talk, and 
                        focusing on the joy of the activity rather than fear of judgment.
                      </p>
                      <p>
                        The book also emphasizes the importance of supportive relationships in building confidence. Mimi's unwavering 
                        belief in Ashlie demonstrates how encouragement from loved ones can help us see our own potential. Additionally, 
                        the story teaches that courage isn't the absence of fear, but taking action despite feeling scared - a valuable 
                        lesson that applies to many childhood challenges beyond performing.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-l-4 border-blue-400">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Story Preview</h3>
                    <div className="text-gray-700 italic leading-relaxed space-y-4">
                      <p>{selectedBook.preview}</p>
                      <p>
                        "The audition flyer sat on Ashlie's desk like a colorful butterfly that had landed there by mistake. 'Young Performers Wanted!' 
                        it announced in cheerful letters, but all Ashlie could think about were the butterflies dancing nervously in her stomach. 
                        What if she forgot the words? What if her voice cracked? What if everyone stared at her?"
                      </p>
                      <p>
                        "Mimi seemed to sense her worry and jumped onto the desk, sitting directly on top of the flyer. She looked up at Ashlie 
                        with those knowing green eyes and began to purr - not just any purr, but the special rumbling sound she made when she 
                        had an idea. 'What are you thinking, Mimi?' Ashlie whispered, and somehow, she knew her clever cat was already planning 
                        something wonderful."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="grid gap-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-8"
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Complete Book Collection</h2>
                  <div className="mb-6">
                    <motion.img 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                      src="/2.jpeg" 
                      alt="Mimi & Ashlie Adventure Series Book Cover" 
                      className="mx-auto rounded-2xl shadow-lg border-4 border-orange-200 max-w-sm w-full"
                    />
                  </div>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Explore all five books in the Mimi & Ashlie Adventure Series. Click on any book to learn more 
                    about the adventure and lessons it contains.
                  </p>
                </motion.div>
                
                {books.map((book) => (
                  <motion.div
                    key={book.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * book.id }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedBook(book)}
                    className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-200 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <motion.div 
                            whileHover={{ scale: 1.1 }}
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${book.color}`}
                          >
                            {book.icon}
                            <span className="ml-2">Book {book.id}</span>
                          </motion.div>
                          <span className="ml-4 text-sm text-gray-500">Ages {book.ageRange}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                          {book.title}
                        </h3>
                        
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {book.adventure.substring(0, 200)}...
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">
                            <strong>Focus:</strong> {book.lesson.split(' - ')[0]}
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="bg-white border-t-2 border-gray-100 mt-16"
      >
        {/* Additional Series Development */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                <div className="inline-block mr-3">
                  <Cat className="w-8 h-8 text-orange-600" />
                </div>
                Series Extensions & Future Adventures
                <div className="inline-block ml-3">
                  <Star className="w-8 h-8 text-yellow-500" />
                </div>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The Mimi & Ashlie universe continues to grow with additional books, interactive elements, and educational resources coming soon.
              </p>
            </div>

            {/* Expanded Book Concepts */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Future Book Concepts (Books 6-10)</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Mimi's Magic Garden",
                    summary: "When the community garden needs help after a storm, Mimi and Ashlie organize their neighbors to restore it together.",
                    theme: "Teamwork & Environmental Care",
                    color: "bg-green-100 border-green-300 text-green-800"
                  },
                  {
                    title: "The Mystery of the Midnight Sounds",
                    summary: "Strange noises at night worry Ashlie, but Mimi's detective skills help them discover it's just a family of raccoons.",
                    theme: "Facing Fears & Understanding Wildlife",
                    color: "bg-indigo-100 border-indigo-300 text-indigo-800"
                  },
                  {
                    title: "Ashlie's Big Helper Day",
                    summary: "When Mom gets sick, Ashlie wants to take care of everything but feels overwhelmed until Mimi shows her that asking for help is brave.",
                    theme: "Asking for Help & Family Support",
                    color: "bg-red-100 border-red-300 text-red-800"
                  },
                  {
                    title: "Mimi and the School Visit",
                    summary: "Ashlie brings Mimi to school for pet day, but when another child is afraid of cats, they work together to help everyone feel comfortable.",
                    theme: "Inclusion & Understanding Differences",
                    color: "bg-teal-100 border-teal-300 text-teal-800"
                  },
                  {
                    title: "The Best Birthday Surprise",
                    summary: "Planning a surprise party for Dad teaches Mimi and Ashlie about patience, planning, and the joy of giving.",
                    theme: "Planning & The Joy of Giving",
                    color: "bg-amber-100 border-amber-300 text-amber-800"
                  }
                ].map((book, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-3 ${book.color}`}>
                      Book {index + 6}
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{book.title}</h4>
                    <p className="text-gray-700 text-sm mb-3 leading-relaxed">{book.summary}</p>
                    <div className="text-xs text-gray-600">
                      <strong>Theme:</strong> {book.theme}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Elements */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Sparkles className="w-6 h-6 text-blue-600 mr-2" />
                  Interactive Elements
                </h3>
                <div className="space-y-3">
                  {[
                    { category: "Sound Effects", example: "\"Can you purr like Mimi?\" or \"What sound does the rain make?\"" },
                    { category: "Action Prompts", example: "\"Help Ashlie look under the bush!\" or \"Point to where the kitten might be hiding!\"" },
                    { category: "Discussion Questions", example: "\"How do you think Mrs. Chen felt?\" or \"What would you do if you were scared?\"" },
                    { category: "Emotional Learning", example: "Feeling identification charts and empathy-building exercises" }
                  ].map((element, index) => (
                    <div key={index} className="border-l-4 border-blue-300 pl-4">
                      <h4 className="font-semibold text-gray-800 text-sm">{element.category}</h4>
                      <p className="text-gray-600 text-xs italic">{element.example}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Star className="w-6 h-6 text-purple-600 mr-2" />
                  Series Extensions (coming soon)
                </h3>
                <div className="space-y-3">
                  {[
                    "Plush Mimi and Ashlie dolls",
                    "Activity books with puzzles and coloring pages",
                    "Audio versions with different character voices",
                    "Parent discussion guides for each book's themes",
                    "Classroom reading guides for teachers",
                    "Digital interactive story apps",
                    "Educational worksheets and activities",
                    "Character-themed learning games"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Educational Value */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-orange-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
                <Lightbulb className="w-7 h-7 text-orange-600 mr-3" />
                Educational Impact & Learning Outcomes
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-orange-600" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Emotional Intelligence</h4>
                  <p className="text-gray-600 text-sm">
                    Children learn to identify, understand, and express emotions while developing empathy for others.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Social Skills</h4>
                  <p className="text-gray-600 text-sm">
                    Stories promote friendship, cooperation, inclusion, and effective communication with peers and adults.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Problem-Solving</h4>
                  <p className="text-gray-600 text-sm">
                    Each adventure presents age-appropriate challenges that encourage critical thinking and creative solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

              <Cat className="w-6 h-6 text-orange-600" />
              <span className="text-lg font-bold text-gray-800">The Mimi & Ashlie Adventure Series</span>
              <Heart className="w-6 h-6 text-pink-600" />
            </div>
            <p className="text-gray-600">
              Creating magical moments and meaningful lessons for young readers and their families.
            </p>
          </div>
        </div>
        </motion.footer>
      </motion.footer>
    </div>
  );
}

export default App;