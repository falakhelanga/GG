import { useEffect } from "react";
import useEventListener from "./useEventListener";

export default function useClickOutside(ref: any, cb: any) {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEventListener(
      "click",
      (e: any) => {
        if (ref.current == null || ref.current.contains(e.target)) return;
        cb(e);
      },
      document as any
    );
  }
}
