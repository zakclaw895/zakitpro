// Reading time utility
export function calculateReadingTime(content) {
  // Strip MDX/HTML tags
  const text = content
    .replace(/<[^>]*>/g, '')
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .trim();
  
  const words = text.split(/\s+/).filter(word => word.length > 0).length;
  const minutes = Math.ceil(words / 200);
  
  if (minutes < 1) {
    return '< 1 min read';
  }
  
  return `${minutes} min read`;
}

// Format date utility
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Get related articles
export function getRelatedArticles(currentArticle, allArticles, limit = 3) {
  const { pillar, tags, slug } = currentArticle;
  
  // Same pillar, excluding current
  const samePillar = allArticles.filter(
    a => a.pillar === pillar && a.slug !== slug && !a.draft
  );
  
  // Score by tag overlap
  const scored = samePillar.map(article => {
    const tagOverlap = article.tags?.filter(tag => tags?.includes(tag)).length || 0;
    return { ...article, score: tagOverlap };
  });
  
  // Sort by score, then date
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });
  
  // Fill from other pillars if needed
  const results = scored.slice(0, limit);
  
  if (results.length < limit) {
    const otherPillar = allArticles
      .filter(a => a.slug !== slug && !a.draft && a.pillar !== pillar)
      .map(article => {
        const tagOverlap = article.tags?.filter(tag => tags?.includes(tag)).length || 0;
        return { ...article, score: tagOverlap };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, limit - results.length);
    
    results.push(...otherPillar);
  }
  
  return results.slice(0, limit);
}
