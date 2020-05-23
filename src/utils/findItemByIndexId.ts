interface Item {
  id: string;
}

function findItemByIndexId<T extends Item>(items: T[], id: string) {
  return items.findIndex((item: T) => item.id === id);
}

export default findItemByIndexId;
