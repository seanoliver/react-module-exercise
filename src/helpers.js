// returns a randomly selected item from array of items
function choice(items) {
  const rand = Math.floor(Math.random() * items.length);
  return items[rand];
}

// removes the first matching item from items, if item exists, and returns it.
// Otherwise returns undefined.
function remove(items, item) {
  const idx = items.findIndex(i => i === item);
  return (idx > 0) ? items.splice(idx, 1) : undefined;
}

export { choice, remove };