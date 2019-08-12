/**
 * @param {File} file
 *
 */
export function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onabort = reject;
    reader.readAsDataURL(file);
  });
}