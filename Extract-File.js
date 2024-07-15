function extractFileInfo(filePath) {
  // Find the last occurrence of the path separator
  const lastSlashIndex = filePath.lastIndexOf("\\");

  // Extract the file name with extension
  const fileNameWithExtension = filePath.substring(lastSlashIndex + 1);

  // Find the last occurrence of the dot
  const lastDotIndex = fileNameWithExtension.lastIndexOf(".");

  // Extract the file name and extension
  const fileName = fileNameWithExtension.substring(0, lastDotIndex);
  const fileExtension = fileNameWithExtension.substring(lastDotIndex + 1);

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${fileExtension}`);
}

// Example usage
extractFileInfo("C:\\Internal\\training-internal\\Template.pptx");
extractFileInfo("C:\\Projects\\Data-Structures\\LinkedList.cs");
