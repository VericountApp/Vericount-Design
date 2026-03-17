import { useState, useMemo } from "react";
import {
  Search, Home, Settings, User, Mail, Bell, Calendar, Heart,
  Star, ChevronRight, ChevronDown, Plus, Minus, X, Check,
  ArrowRight, ArrowLeft, ArrowUp, ArrowDown, Eye, EyeOff,
  Lock, Unlock, Trash, Edit, Copy, Download, Upload, Share,
  Filter, SortAsc, BarChart, PieChart, TrendingUp, Folder,
  File, Image, Link, ExternalLink, Globe, Phone, MapPin,
  Clock, Zap, Shield, AlertTriangle, Info, HelpCircle,
  RefreshCw, LogOut, LogIn, Menu, MoreHorizontal, Bookmark,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const iconList = [
  { name: "Search", Icon: Search }, { name: "Home", Icon: Home }, { name: "Settings", Icon: Settings },
  { name: "User", Icon: User }, { name: "Mail", Icon: Mail }, { name: "Bell", Icon: Bell },
  { name: "Calendar", Icon: Calendar }, { name: "Heart", Icon: Heart }, { name: "Star", Icon: Star },
  { name: "ChevronRight", Icon: ChevronRight }, { name: "ChevronDown", Icon: ChevronDown },
  { name: "Plus", Icon: Plus }, { name: "Minus", Icon: Minus }, { name: "X", Icon: X },
  { name: "Check", Icon: Check }, { name: "ArrowRight", Icon: ArrowRight },
  { name: "ArrowLeft", Icon: ArrowLeft }, { name: "ArrowUp", Icon: ArrowUp },
  { name: "ArrowDown", Icon: ArrowDown }, { name: "Eye", Icon: Eye }, { name: "EyeOff", Icon: EyeOff },
  { name: "Lock", Icon: Lock }, { name: "Unlock", Icon: Unlock }, { name: "Trash", Icon: Trash },
  { name: "Edit", Icon: Edit }, { name: "Copy", Icon: Copy }, { name: "Download", Icon: Download },
  { name: "Upload", Icon: Upload }, { name: "Share", Icon: Share }, { name: "Filter", Icon: Filter },
  { name: "SortAsc", Icon: SortAsc }, { name: "BarChart", Icon: BarChart },
  { name: "PieChart", Icon: PieChart }, { name: "TrendingUp", Icon: TrendingUp },
  { name: "Folder", Icon: Folder }, { name: "File", Icon: File }, { name: "Image", Icon: Image },
  { name: "Link", Icon: Link }, { name: "ExternalLink", Icon: ExternalLink },
  { name: "Globe", Icon: Globe }, { name: "Phone", Icon: Phone }, { name: "MapPin", Icon: MapPin },
  { name: "Clock", Icon: Clock }, { name: "Zap", Icon: Zap }, { name: "Shield", Icon: Shield },
  { name: "AlertTriangle", Icon: AlertTriangle }, { name: "Info", Icon: Info },
  { name: "HelpCircle", Icon: HelpCircle }, { name: "RefreshCw", Icon: RefreshCw },
  { name: "LogOut", Icon: LogOut }, { name: "LogIn", Icon: LogIn }, { name: "Menu", Icon: Menu },
  { name: "MoreHorizontal", Icon: MoreHorizontal }, { name: "Bookmark", Icon: Bookmark },
];

export function IconsSection() {
  const [search, setSearch] = useState("");
  const filtered = useMemo(
    () => iconList.filter((i) => i.name.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  return (
    <section id="icons" className="py-24 md:py-32 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Ikoner</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Lucide-ikoner</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl leading-relaxed">
          Vi använder Lucide, ett konsekvent och öppet ikonbibliotek med 2px stroke.
        </p>

        <div className="flex flex-wrap gap-4 mb-8 items-center">
          <div className="relative max-w-sm flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input
              placeholder="Sök ikoner..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            {[16, 20, 24].map((s) => (
              <div key={s} className="flex items-center gap-1.5">
                <Star size={s} className="text-primary" />
                <span>{s}px</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
          {filtered.map(({ name, Icon }) => (
            <button
              key={name}
              onClick={() => {
                navigator.clipboard.writeText(`<${name} />`);
              }}
              className="glass rounded-xl p-3 flex flex-col items-center gap-2 hover:bg-muted/50 hover:shadow-sm transition-all group"
              title={name}
            >
              <Icon size={20} className="text-foreground group-hover:text-primary transition-colors" />
              <span className="text-[10px] text-muted-foreground truncate w-full text-center">
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
