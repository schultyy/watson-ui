export function fetchFiles() {
  return fetch("/api/files")
  .then((response) => {
    return response.json()
  });
}

export function fetchFile(fileId) {
  return fetch(`/api/file/${fileId}`)
  .then((response) => {
    return response.json()
  });
}