export const handleFileChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setFile: React.Dispatch<React.SetStateAction<File | null>>,
  setImageUrl: React.Dispatch<React.SetStateAction<string | null>>,
) => {
  const fileList = event.target.files;
  if (fileList && fileList.length > 0) {
    const selectedFile = fileList[0];
    if (selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setImageUrl(reader.result as string);
        } else {
          setImageUrl(null); // 타입 안전성을 위해 null로 설정
        }
      };
      reader.readAsDataURL(selectedFile);
    } else {
      alert("Please select an image file.");
    }
  }
};
