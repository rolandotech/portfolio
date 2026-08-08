import {
  Layout,
  Server,
  Database,
  Globe,
  Wrench,
  Code2,
  Smartphone,
  ShoppingBag,
  Palette,
  Rocket,
  Plug,
  Layers,
  Zap,
  Code,
} from "lucide-react";

export const iconMap = {
  Layout,
  Server,
  Database,
  Globe,
  Wrench,
  Code2,
  Smartphone,
  ShoppingBag,
  Palette,
  Rocket,
  Plug,
  Layers,
  Zap,
  Code,
};

export function getIcon(name) {
  return iconMap[name] || Code;
}
