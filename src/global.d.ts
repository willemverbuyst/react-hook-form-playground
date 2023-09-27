import "little-state-machine";
import { SKILLS } from "./constants";

declare module "little-state-machine" {
  interface GlobalState {
    data: {
      firstName: string;
      lastName: string;
      email: string;
      hasPhoneNumber: boolean;
      phoneNumber: string;
      files: FileList | undefined;
      position: "front-end" | "back-end" | "full-stack";
      skills: keyof typeof SKILLS | null;
    };
  }
}
