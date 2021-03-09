const space = process.env.NEXT_PUBLIC_CONTENTFUL_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN;

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
});

// Fetch single entry
export async function fetchEntry(entryId) {
  const entry = await client.getEntry(entryId);
  if (entry.fields) return entry;

  console.log(`Error getting entry for Entry# ${entryId}.`)
}

// Fetch all entries
export async function fetchEntries(type) {
  const entries = await client.getEntries({
    content_type: type
  });
  if (entries.items) return entries.items;

  console.log(`Error getting entries for ${contentType.name}.`);
}

// Fetch all resource entries (resources, courses, and blogs)
export async function fetchResources() {
  const entries = await client.getEntries({
    'sys.contentType.sys.id[in]': 'book,course'
  });
  if (entries.items) return entries.items;

  console.log(`Error getting entries for ${contentType.name}.`);
}

export default { fetchEntries, fetchEntry, fetchResources };
