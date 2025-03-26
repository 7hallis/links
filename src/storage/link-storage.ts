import AsyncStorage from "@react-native-async-storage/async-storage";

const LINKS_STORAGE_KEY = "links-storage";
type LinkStorage = {
  id: string;
  name: string;
  url: string;
  category: string;
};
async function getLinks(): Promise<LinkStorage[]> {
  const storage = await AsyncStorage.getItem(LINKS_STORAGE_KEY);
  const response = storage ? JSON.parse(storage) : [];
  return response;
}

async function save(newLink: LinkStorage): Promise<void> {
  try {
    const storage = await getLinks();
    const updated = JSON.stringify([...storage, newLink]);
    await AsyncStorage.setItem(LINKS_STORAGE_KEY, updated);
  } catch (error) {
    throw error;
  }
}

export const LinkStorage = { getLinks, save };
