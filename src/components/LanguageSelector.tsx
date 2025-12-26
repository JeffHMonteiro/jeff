import { useLanguage } from '@/contexts/LanguageContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    {
      code: 'pt',
      name: 'Português',
      flag: '🇧🇷',
    },
    {
      code: 'en',
      name: 'English',
      flag: '🇺🇸',
    },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="w-4 h-4" />
          <span className="text-lg">{currentLanguage?.flag}</span>
          <span className="hidden sm:inline">{currentLanguage?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background border border-border">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code as 'pt' | 'en')}
            className="gap-2 cursor-pointer hover:bg-accent"
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;