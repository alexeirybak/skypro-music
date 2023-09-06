export async function getAllTracks() {
  const response = await fetch('https://painassasin.online/catalog/track/all/');
  const tracks = await response.json();
  if (!response.ok) {
    throw new Error('Ошибка сервера');
  }
  return tracks;
}
