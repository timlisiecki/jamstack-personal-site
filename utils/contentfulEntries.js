const space = process.env.NEXT_PUBLIC_CONTENTFUL_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN;

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
});

// Fetch all entries
export async function fetchEntries() {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;

  console.log(`Error getting entries for ${contentType.name}.`);
}

// Fetch single entry
export async function fetchEntry(entryId) {
  const entry = await client.getEntry(entryId);
  if (entry.fields) return entry;

  console.log(`Error getting entry for Entry# ${entryId}.`)
}

// Fetch only projects entries
export async function fetchProjects() {
  const entries = await client.getEntries({
    content_type: 'project'
  });
  if (entries.items) return entries.items;

  console.log(`Error getting entries for ${contentType.name}.`);
}

// Fetch only blogs entries
export async function fetchBlogs() {
  const entries = await client.getEntries({
    content_type: 'blog'
  });
  if (entries.items) return entries.items;

  console.log(`Error getting entries for ${contentType.name}.`);
}

// Fetch all resource entries (resources, courses, and blogs)
export async function fetchResources() {
  const entries = await client.getEntries();
  const resourceTypes = ['book', 'course'];

  if (entries.items) {
    return entries.items.filter(item => {
      if (resourceTypes.indexOf(item.sys.contentType.sys.id) !== -1) return item;
    })
  }

  console.log(`Error getting entries for resources.`);
}

export default { fetchBlogs, fetchEntries, fetchEntry, fetchProjects, fetchResources };
