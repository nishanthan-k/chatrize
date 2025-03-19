import { removeTokens } from "@/lib/storage/tokenStorage";

export function logoutUser() {
  removeTokens();
  window.location.href = "/auth";
}
