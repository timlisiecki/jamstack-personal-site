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
export async function fetchEntries({content_type, select, params}) {
  const entryArgs = {};

  if (content_type) {
    entryArgs.content_type = content_type;
  }

  if (select) {
    entryArgs.select = select;
  }

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      entryArgs[key] = value;
    }
  }

  const entries = await client.getEntries(entryArgs);

  if (entries.items) return entries.items;

  console.log(`Error getting entries for ${contentType.name}.`);
}
