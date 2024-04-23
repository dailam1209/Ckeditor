"use client"
import { useEffect, useState } from "react";
import MyEditor from "../Edit";

interface InputTextAreaProps {
    name: string;
    value: string;
    handleChange: (e: any, type: string) => void;
    dataCustom: (e: any) => void;
    isAgain: boolean;
    handleUrlDelete: (e: string) => void;
  }

export const Input_textarea = ({
    name,
    value,
    handleChange,
    dataCustom,
    isAgain,
    handleUrlDelete
  }: InputTextAreaProps) => {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState(value);
  
    useEffect(() => {
      setEditorLoaded(true);
    }, []);
    return (
      <div className={``}>
        <MyEditor
          name={name}
          onChange={(data: React.SetStateAction<string>) => {
            setData(data);
          }}
          editorLoaded={editorLoaded}
          value={value}
          dataEdit={(e, type) => {
            {
              handleChange(e, type);
            }
          }}
          isAgain={isAgain}
          valueUrlEdit={(e) => handleUrlDelete(e)}
        />
      </div>
    );
  };