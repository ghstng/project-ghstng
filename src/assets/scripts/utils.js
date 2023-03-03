// Slugify
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

// UnCamel
export function split(string) {
  return string
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, function(str){ return str.toUpperCase(); })
}
// Get slug
export function getSlug(url) {
 let parts = url.split('/');
 return parts.pop() || parts.pop();
}

// Capitalize
export function capitalize(w) {
  return w.charAt(0).toUpperCase() + w.slice(1);
}

// Format date
export function formatDate(date) {
  return new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short', 
    day: '2-digit', 
    year: 'numeric'
  })
}

// Image exists
export function imageExists(url) {
   var img = new Image();
   img.src = url;
   img.height != 0 ? true : false;
}

export function formatBlogPosts(posts, {
  filterOutDrafts = true,
  filterOutFuturePosts = true,
  sortByDate = true,
  limit = undefined,
} = {}) {

  const filteredPosts = posts.reduce((acc, post) => {
    const { date, draft } = post.data;
    // filterOutDrafts if true
    if (filterOutDrafts && draft) return acc;

    // filterOutFuturePosts if true
    if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

    // add post to acc
    acc.push(post)

    return acc;
  }, [])

  // sortByDate or randomize
  if (sortByDate) {
    filteredPosts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
  } else {
    filteredPosts.sort(() => Math.random() - 0.5)
  }

  // limit if number is passed
  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }
  return filteredPosts;

}