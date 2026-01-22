export const findPageBySlug = (items, slug) => {
  for (const item of items) {
    if (item.slug === slug) return item;
    if (item.children) {
      const found = findPageBySlug(item.children, slug);
      if (found) return found;
    }
  }
  return null;
};
