import { DistributorsEnum } from './distributor.model';
import { ProjectImage } from './project-image.model';

export interface Project {
  id: number;
  featured: boolean;
  inProgress: boolean;
  name: string;
  location: string;
  projectManager: string;
  icon: string;
  thumbnail: string;
  images: ProjectImage[];
  description: string;
  series: 'speed' | 'power' | 'agility';
  tags: number[];
  distributor: DistributorsEnum;
  quotes?: string[];
}
