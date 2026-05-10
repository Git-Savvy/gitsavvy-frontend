import { useMutation } from "@tanstack/react-query";
import { submitRepoRating } from "../api/rating";
import { useToast } from "../context/ToastContext";
export const useSubmitRating = (repoId) => {
  const { showToast } = useToast();
  return useMutation({
    mutationFn: (rating) => submitRepoRating(repoId, rating),
    onSuccess: (data) => {
      console.log("Rating updated on server:", data);
      showToast({
        message: "Rating updated on server.",
        type: "success",
        duration: 3000,
      });
    },
    onError: (error) => {
      console.error("Failed to sync rating with server:", error);
      showToast({
        message: "Failed to sync rating with server.",
        type: "error",
        duration: 3000,
      });
    },
  });
};
