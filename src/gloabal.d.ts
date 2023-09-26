import "little-state-machine";

declare module "little-state-machine" {
  interface GlobalState {
    data: {
      firstName: string;
      lastName: string;
      email: string;
      hasPhoneNumber: boolean;
      phoneNumber: string;
      files: FileList;
    };
  }
}
