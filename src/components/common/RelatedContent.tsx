import React from 'react';
import { 
  FileText, 
  Map, 
  Trees, 
  FileSignature, 
  Sprout,
  BadgeEuro,
  Coins,
  Tractor,
  Tag,
  PieChart,
  ArrowRight
} from 'lucide-react';

interface RelatedTopic {
  title: string;
  path: string; // Full absolute URL
  localPath: string; // For filtering current page
  icon: React.ElementType;
}

const ALL_TOPICS: RelatedTopic[] = [
  { title: "Metsateatis", path: "https://metsamaakler.ee/metsateatis/", localPath: "/metsateatis/", icon: FileText },
  { title: "Metsakava", path: "https://metsamaakler.ee/metsamajandamiskava/", localPath: "/metsamajandamiskava/", icon: Map },
  { title: "Hooldusraied", path: "https://metsamaakler.ee/hooldusraied/", localPath: "/hooldusraied/", icon: Trees },
  { title: "Raieõiguse müük", path: "https://metsamaakler.ee/raieoiguse-muuk/", localPath: "/raieoiguse-muuk/", icon: FileSignature },
  { title: "Metsa istutamine", path: "https://metsamaakler.ee/metsa-istutamine/", localPath: "/metsa-istutamine/", icon: Sprout },
  { title: "Metsa hind", path: "https://metsamaakler.ee/metsa-hind/", localPath: "/metsa-hind/", icon: BadgeEuro },
  { title: "Raieõiguse hind", path: "https://metsamaakler.ee/raieoiguse-hind/", localPath: "/raieoiguse-hind/", icon: Coins },
  { title: "Põllumaa hind", path: "https://metsamaakler.ee/pollumaa-hind/", localPath: "/pollumaa-hind/", icon: Tractor },
  { title: "Istikute hind", path: "https://metsamaakler.ee/istikute-hind/", localPath: "/istikute-hind/", icon: Tag },
  { title: "Metsamajandus", path: "https://metsamaakler.ee/metsamajandus/", localPath: "/metsamajandus/", icon: PieChart },
];

interface RelatedContentProps {
  currentPath: string;
}

export const RelatedContent: React.FC<RelatedContentProps> = ({ currentPath }) => {
  // Filter out the current page based on localPath
  const availableTopics = ALL_TOPICS.filter(topic => topic.localPath !== currentPath);
  
  // Simple shuffle to get random topics
  const shuffled = [...availableTopics].sort(() => 0.5 - Math.random());
  const selectedTopics = shuffled.slice(0, 3);

  return (
    <div className="mt-16 pt-12 border-t border-gray-100 not-prose">
      <h3 className="text-2xl font-bold text-[#163823] mb-8">Vaadake ka:</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {selectedTopics.map((topic) => (
          <a 
            key={topic.path} 
            href={topic.path}
            className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#347D4E]/30 transition-all duration-300 flex flex-col items-start"
          >
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-4 text-[#347D4E] group-hover:scale-110 transition-transform">
              <topic.icon size={20} />
            </div>
            <h4 className="font-bold text-[#163823] text-lg mb-2 group-hover:text-[#347D4E] transition-colors">
              {topic.title}
            </h4>
            <div className="mt-auto flex items-center text-sm font-medium text-gray-500 group-hover:text-[#347D4E]">
              Loe lähemalt <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
