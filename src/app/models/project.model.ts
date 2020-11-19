import { DistributorsEnum } from './distributor.model';
import { ProjectImage } from './project-image.model';

export interface Project {
  id: number;
  name: string;
  location: string;
  icon: string;
  images: ProjectImage[];
  description: string;
  quotes: string[];
  series: 'speed' | 'power' | 'agility';
  distributor: DistributorsEnum;
  projectManager: string;
}
