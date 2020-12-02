export enum DistributorsEnum {
  'Wilbur Ellis' = 'Wilbur Ellis',
  'Walker Supply' = 'Walker Supply',
  'Tom Irwin' = 'Tom Irwin',
  'BWI' = 'BWI',
}

export interface Distributor {
  companyName: DistributorsEnum;
  websiteUrl: string;
  imagePath: string;
  formUrl?: string;
  partnerLevel?: 'Premium' | 'Standard';
  placement?: number;
}
