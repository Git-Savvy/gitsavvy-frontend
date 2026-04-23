import { useMutation } from "@tanstack/react-query";
import { submitRepoRating } from "../api/rating";

export const useSubmitRating = (repoId) => {
  return useMutation({
    mutationFn: (rating) => submitRepoRating(repoId, rating),
    onSuccess: (data) => {
      console.log("Rating updated on server:", data);
    },
    onError: (error) => {
      console.error("Failed to sync rating with server:", error);
    },
  });
};