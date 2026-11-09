const multiplyValue = (value: number, multiplier?: number): number => {
  return value * (multiplier ?? 2);
};

const processInput = (value: string | number | boolean): string | number => {
  return typeof value === "string"
    ? value.trim().toLowerCase()
    : typeof value === "number"
      ? value * 10
      : value
        ? "Active"
        : "Inactive";
};

const formatCoordinate = (
  coordinate: readonly [number, number, string],
): string => {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.reduce((result, currentArray) => {
    return result.concat(currentArray);
  }, [] as T[]);
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course: Course) =>
      course.isPublished === true && course.students >= minStudents,
  );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item: T) => item[key]);
};

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return "Access Granted";
};
