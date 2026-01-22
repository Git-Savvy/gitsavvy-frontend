export const getFirstSlug = (items) => {
  if (!items || items.length === 0) return null;
  //!items: This checks for "nothingness" (like null or undefined)
  //items.length === 0: This checks for an empty list []
  for (const item of items) {
    if (item.type === "page" && item.slug) {
      return item.slug;
    }
    if (item.children && item.children.length > 0) {
      const childSlug = getFirstSlug(item.children);
      if (childSlug) return childSlug;
    }
  }
  return null;
};
