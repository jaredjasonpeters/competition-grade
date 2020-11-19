export enum DistributorsEnum {
  'Wilbur Ellis',
  'Walker Supply',
  'Tom Irwin',
  'BWI',
}

export interface Distributor {
  companyName: DistributorsEnum;
  websiteUrl: string;
  imagePath: string;
  partnerLevel?: 'Premium' | 'Standard';
  placement?: number;
}
