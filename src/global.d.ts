import "little-state-machine";
import { POSITION, SKILLS } from "./constants";

declare module "little-state-machine" {
  interface GlobalState {
    data: {
      firstName: string;
      lastName: string;
      bsn: string;
      email: string;
      hasPhoneNumber: boolean;
      phoneNumber: string;
      files: FileList | undefined;
      position: (typeof POSITION)[number];
      skills: (typeof SKILLS)[number];
    };
  }
}
