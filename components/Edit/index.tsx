import { getValueLocalStorage } from "@/funtions/function";
import React, { useContext, useEffect, useRef, useState } from "react";

interface MyEditorProps {
    onChange: (e: any) => void,
    editorLoaded: any,
    name: any,
    value: any,
    dataEdit: (e: any, type: string) => void,
    isAgain: boolean,
    valueUrlEdit: (e: string) => void
}

function MyEditor({ onChange, editorLoaded, name, value, dataEdit, isAgain, valueUrlEdit }: MyEditorProps) {
  const editorRef = useRef<any>();
  const { CKEditor, Editor } = editorRef.current || {};
  const [image, setImage ] = useState<string>();
  const [ listImg, setListImg ] = useState<any>([]);
  const [ urlDelete, setUrlDelete ] = useState<string>('');
  const [ lengthData, setLengthData ] = useState<any>(); 


  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      Editor: require("@/ckeditor5/build/ckeditor"),
    };
  }, []);
  const handleEditorChange = async (event: any, editor: any) => {
    const data = editor.getData();
    const getAllImg = Array.from(new DOMParser().parseFromString(data, 'text/html')
        .querySelectorAll('img'))
        .map(img => img.getAttribute('src'));
        // if(lengthData  > data.length + 7 && getAllImg.length <= listImg.length) {
        //   const differentNumbers = await listImg.filter((num: any )=> !getAllImg.includes(num))
        //   .concat(getAllImg.filter(num => !listImg.includes(num)));
        //   setUrlDelete(differentNumbers[0])
          // if(differentNumbers[0]?.length > 10) {
            // handleRemoveImage(differentNumbers[0]);
          // }
        // }
        setListImg(getAllImg)
      dataEdit(data, 'delete');
    setLengthData(data.length)
  };

  const token = getValueLocalStorage('work247_token_admin_blog');

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("new_picture", file);


    try {
      const response = await fetch("https://timviechay.vn/api/work247/admin/UploadInnerBlogImg", {
        method: "POST",
        body: formData,
        headers: {
            'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      if(data?.data.result) {
        setImage(data.data.data.new_picture);
        return data.data.data.new_picture
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };



  const handleRemoveImage = async (url: any) => {

    try {
      const response = await fetch("https://timviechay.vn/api/work247/admin/DeleteInnerBlogImg", {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ partial_link: url })
      });

      const data = await response.json();
      if (data.success) {
        console.log("Image deleted successfully");
      } else {
        console.error("Error deleting image");
      }
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  useEffect(() => {
    if(urlDelete) {
      valueUrlEdit(urlDelete)
      // handleRemoveImage(urlDelete)
    }
  }, [urlDelete])



  return (
    <div style={{
    }}>
      {editorLoaded ? (
        <CKEditor
          type="img"
          name={name}
          editor={Editor}
          data={value}
          value={value}
          onChange={handleEditorChange}
          onReady={(editor: any) => {
            editor.plugins.get("FileRepository").createUploadAdapter = function (loader: any) {
              return {
                upload: async () => {
                  const data = await loader.file;
                  const img  = await uploadImage(data);
                  return { default: img };
                }
              };
            };
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
}
export default MyEditor;