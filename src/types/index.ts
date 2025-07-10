export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: 'government' | 'law-enforcement' | 'industry' | 'transparency';
  tags: string[];
  sources: Source[];
  publishedAt: Date;
  updatedAt: Date;
  verificationLevel: 'verified' | 'pending' | 'disputed';
  author: string;
  slug: string;
}

export interface Document {
  id: string;
  title: string;
  description?: string;
  url: string;
  tags: string[]
  accessDate: Date;
  archived: boolean;
  archiveUrl?:string;
}


export interface Source {
  id: string;
  title: string;
  url: string;
  type: 'official-document' | 'foia-request' | 'public-record' | 'court-filing' | 'news-report' | 'database';
  reliability: 'primary' | 'secondary' | 'tertiary';
  accessDate: Date;
  archived: boolean;
  archiveUrl?: string;
}

export interface FOIARequest {
  id: string;
  title: string;
  description: string;
  agency: string;
  status: 'submitted' | 'pending' | 'fulfilled' | 'denied' | 'appealed';
  submittedAt: Date;
  responseDate?: Date;
  documents?: Document[];
  requestText: string;
}

export interface SecurityConfig {
  encryptSensitiveData: boolean;
  useVPN: boolean;
  anonymizeContributors: boolean;
  secure2FA: boolean;
}