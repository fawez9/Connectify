import { FileIcon, X } from "lucide-react";
import Image from "next/image";
import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";
import { useState } from "react";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  const [fileUrl, setFileUrl] = useState<string | undefined>(value);
  const [fileType, setFileType] = useState<string | undefined>();

  const handleUploadComplete = (res: { url: string; type: string }[]) => {
    onChange(res?.[0]?.url);
    setFileUrl(res[0].url);
    setFileType(res[0].type);
  };

  const handleUploadError = (error: Error) => {
    console.log(error);
  };

  const removeFile = () => {
    onChange("");
    setFileUrl(undefined);
    setFileType(undefined);
  };

  return (
    <>
      {fileUrl && (fileType === "image/png" || fileType === "image/jpeg") ? (
        <div className="relative h-20 w-20">
          <Image src={fileUrl} alt="Upload" className="rounded-full" layout="fill" objectFit="cover" />
          <button onClick={removeFile} className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm">
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : fileUrl && fileType === "application/pdf" ? (
        <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
          <FileIcon className="h-10 w-10 fill-indigo-200 stroke-indigo-400 " />
          <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline">
            {fileUrl}
          </a>
          <button onClick={removeFile} className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm">
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <UploadDropzone endpoint={endpoint} onClientUploadComplete={handleUploadComplete} onUploadError={handleUploadError} />
      )}
    </>
  );
};
