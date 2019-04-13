export class Course {
  _id?: string;
  provider: string;
  title: string;
  courseUrl: string;
  product: string[];
  courseType: string[];
  skill: number[];
  audience: string[];
  bok: string[];
  imageUrl: string;
  description: string;
  isActive: boolean;
  KUESkillSet: number[];
  isBookmark = false;
  isAdminCourse = false;
  isRoleChecked: boolean[];
}