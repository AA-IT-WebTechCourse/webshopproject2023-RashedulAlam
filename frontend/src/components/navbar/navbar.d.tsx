import { IUser } from "@/contexts/contexts.d";

export interface ICartInfoProps {
  count: number;
  onIconClick: () => void;
}

export interface IUserMenuProps {
  user?: IUser | null;
  logoutHandler: () => void;
  accountSettingHandler: () => void;
}
