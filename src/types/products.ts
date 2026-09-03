export interface ProductFeature {
  id: string;
  title: string;
  description: string;
  badge?: string;
  apiIntegration?: string;
}

export interface ProductArchitecture {
  technology: string[];
  storageStrategy: string;
  networkLayer: string;
  memoryManagement: string;
  keyBenefits: string[];
}

export interface CoreProduct {
  id: string;
  slug: string;
  subdomain: string;
  title: string;
  tagline: string;
  category: string;
  status: 'In Development' | 'Prototype Ready' | 'Architecture Finalized' | 'Upcoming';
  corePurpose: string;
  iconName: 'MessageSquare' | 'Share2' | 'Music' | 'Film';
  accentColor: string;
  gradient: string;
  features: ProductFeature[];
  architecture: ProductArchitecture;
  subdomainTarget: string;
}

export interface SubdomainItem {
  id: string;
  name: string;
  subdomain: string;
  category: 'Core Flagship' | 'Media & Streaming' | 'Utilities' | 'Infrastructure' | 'Future Expansion';
  status: 'Active Dev' | 'Prototype' | 'Architecture' | 'Planned Subdomain';
  description: string;
  portOrRoute: string;
}
