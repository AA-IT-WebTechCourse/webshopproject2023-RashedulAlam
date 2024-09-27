import { format } from "date-fns";

export const formateDate = (date: string) => format(date, "MMM d, yyyy, h:mm a");
