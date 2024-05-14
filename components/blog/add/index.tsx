import React, { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import s from "./style.module.css";
import style from './style.module.css'
import { Input, Radio, Select } from "antd";
import axios from "axios";
import { Input_textarea } from "../../InputEdit";
import { createLinkTilte, getValueLocalStorage} from "@/funtions/function";
import { usePathname, useRouter, useParams } from 'next/navigation'
import Cookies from "js-cookie";
const { TextArea } = Input;

type LoginFormInputs = {
  new_category_id: number;
  new_title: string;
  new_title_rewrite: string;
  new_order: number;
  new_picture: string;
  new_tt: string;
  new_des: string;
  new_keyword: string;
  key_lq: string;
  new_new: boolean;
  new_teaser: any;
  new_active: boolean;
  new_hot: boolean;
  new_description: string;
};

const AdminBlogAdd = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<LoginFormInputs>();
  const [ token, setToken ] = useState<any>();
  const router = useRouter();
  const [isFetching, setIsFetching] = useState(false);
  const [dataEditOne, setDataEditOne] = useState<any>();
  const [dataEditTwo, setDataEditTwo] = useState<any>();
  const [picture, setPicture] = useState<any>("");
  const [ imgUrl, setImgUrl ] = useState<any>();
  const [flowAfterUpdate, setFlowAfterUpdate] = useState<number>(0);
  const [detailBlog, setDetailBlog] = useState<any>();
  const [ blogCategory, setBlogCategory ] = useState<any>([]);
  const [ listUrlDelete, setListUrlDelete ] = useState<any>([]);
  const [ active, setActive ] = useState<any>(true);
  const [ news, setNews ] = useState<any>(false);
  const [ hot, setHot ] = useState<any>(false);
  const [ titleLength, setTitleLength ] = useState<number>(0);
  const [ titleDesLength, setTitleDesLength ] = useState<number>(0);
  const [ url, setUrl ] = useState<string>('');


  const onSubmit: SubmitHandler<LoginFormInputs> = async (data: any) => {
    setIsFetching(true);
    const formData = new FormData();
    console.log('data form', data);
    formData.append("new_category_id", data?.new_category_id || "");
    formData.append("new_title", data?.new_title || "");
    formData.append("new_title_rewrite", url.split(' ').join('-') || "");
    formData.append("new_order", data?.new_order || "");
    formData.append("new_tt", url.split('-').join(' ') || "");
    formData.append("new_des", data?.new_des || "");
    formData.append("new_keyword", data?.new_keyword || "");
    formData.append("key_lq", data?.key_lq || "");
    formData.append("new_teaser", dataEditOne || "");
    formData.append("new_active", active  ? '1' : '0');
    formData.append("new_new", news  ? '1' : '0');
    formData.append("new_hot",hot ? '1' : '0');
    formData.append("new_description", dataEditTwo || "");

    if (picture) {
      formData.append("new_picture", picture);
    }

    const newDataPost = formData;

    try {
      const post = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL_API_ADMIN}/admin/CreateBlog`,
        newDataPost,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (post?.data.data.result) {
        router.push('blog')
      }
    } catch (error: any) {
      alert(error);
    }
  };

  const handleCKEChangeOne = async (e: any, type: string) => {
    setDataEditOne(e);
  };

  const handleCKEChangeTwo = (e: any, type: string) => {
    setDataEditTwo(e);
  };


  const getAllBlogCate = async (token: string) => {
    try {
      const post  = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_API_ADMIN}/admin/allBlogCate`, {},  {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })
      if(post?.data.data.result) {
        setBlogCategory(post.data.data.data)
      }
    } catch (err) {
      
    }
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setPicture(file);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImgUrl(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const resetFields = () => {
    const listKey = [
      "new_id",
      "new_category_id",
      "new_title",
      "new_title_rewrite",
      "new_order",
      "new_picture",
      "new_tt",
      "new_des",
      "new_keyword",
      "key_lq",
      "new_teaser",
      "new_active",
      "new_new",
      "new_hot",
      "new_description"
    ];

    listKey.map((key: any) => {
      setValue(key, detailBlog?.key?.trim());
    });
    setValue("new_description", detailBlog?.usc_company_info?.trim());
  };

  useEffect(() => {
    const newtoken = Cookies.get('work247_token_admin_blog');
    if(newtoken) {
      setToken(newtoken)
      getAllBlogCate(newtoken);
      setDetailBlog([]);
    }
  }, [token]);

  return (
    <div style={{
      position: 'relative'
    }}>
      {" "}
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px 0"
        }}
      >
        <span>Những trường có dấu (*) là bắt buộc phải nhập.</span>
        {
          blogCategory.length > 0 &&
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="new_category_id"
              control={control}
              rules={{
                required: "Vui lÃ²ng nháº­p email cÃ´ng ty"
              }}
              render={({ field }) => (
                <div className={s.input}>
                  <p className={style.input_form}>
                    <span>*</span>Chọn danh mục :
                  </p>
                  <Select
                    {...field}
                    className={``}
                    placeholder="Please select"
                    onChange={(selectedOptions) => {
                      field.onChange(selectedOptions);
                    }}
                    style={{ width: "100%" }}
                    options={
                      
                      blogCategory
                    .map((category: any) => (
                      {
                        'value': category.cat_id,
                        'label': category.cat_name
                      }
                    ))}
                    size="middle"
                  />
                </div>
              )}
            />
            <Controller
              name="new_title"
              control={control}
              defaultValue={detailBlog?.new_title}
              rules={{
                required: "Vui lÃ²ng nháº­p tiÃªu Ä‘á» tin"
              }}
              render={({ field }) => (
                <div className={s.input}>
                  <p className={style.input_form}>
                    <span>*</span>Tiêu đề tin :
                  </p>
                  <TextArea style={{
                    height: '50px'
                  }} placeholder="" {...field} />
                </div>
              )}
            />
            <Controller
              name="new_title_rewrite"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div className={s.input}>
                 <p><span>*</span>URL :</p>
                 <textarea style={{
                  width: '100%',
                  height: '50px',
                  borderRadius: '5px',
                  padding: '4px 11px',
                  border: '1px solid #d9d9d9'
                 }}  value={url} onChange={(e) => {
                  let length = e.target.value.split('-').join('').length;
                  if (length <= 70) {
                  setUrl(e.target.value)
                  }
                 }}></textarea>
                </div>
              )}
            />
            <Controller
              name="new_order"
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <div className={s.input}>
                  <p className={style.input_form}>Thứ tự :</p>
                  <Input type="text" {...field} />
                </div>
              )}
            />
            <Controller
              name="new_picture"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div style={{
                  display: 'flex'
                }}>
                <div style={{
                  width: '100%'
                }} className={s.input}>
                  <p
                    style={{
                      width: "50%"
                    }}
                    className={style.input_form}
                  >
                    Chọn ảnh :
                  </p>
                  <div style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row-reverse",
                        gap: "20px",
                        alignItems: "flex-start",
                        justifyContent: "flex-end",

                  }}>

                    <input
                      style={{
                        width: "50%",
                        border: "1px solid #d9d9d9",
                        padding: "8px",
                        borderRadius: "6px",
                        visibility: detailBlog?.new_id ? "hidden" : "visible",
                        order: detailBlog?.new_id ? 2 : 1
                      }}
                      type="file"
                      id="fileInput"
                      placeholder={detailBlog?.new_picture}
                      onChange={(e: any) => {
                        setPicture(e.target.files[0]);
                        handleFileChange(e)
                        field.onChange(e);
                      }}
                    />
                    <img src={imgUrl} alt="" style={{
                      width: '100px',
                      height: '100px'
                    }}/>
                  </div>
                </div>
                </div>
              )}
            />
            <Controller
              name="new_tt"
              control={control}
              defaultValue=''
              render={({ field }) => (
                <div className={s.input}>
                  <p><span>*</span>Title ((60-70 ký tự) {titleLength}/70 ký tự) :</p>
                  <TextArea  placeholder="" {...field} 
                  onChange={(e) => {
                    const length = e.target.value.length;
                    if (length <= 70) {
                      setTitleLength(length)
                      field.onChange(e); 
                    }}}/>
                </div>
              )}
            />

            <Controller
              name="new_des"
              control={control}
              rules={{
                required: true
              }}
              defaultValue=""
              render={({ field }) => (
                <div className={s.input}>
                  <p className={style.input_form}>
                    <span>*</span>Description ({titleDesLength}/250 ký tự) :
                  </p>
                  <TextArea  placeholder="" {...field} 
                  onChange={(e) => {
                    const length = e.target.value.length;
                    if (length <= 250) {
                      setTitleDesLength(length)
                      field.onChange(e); 
                    }}}/>
                </div>
              )}
            />

            <Controller
              name="new_keyword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div className={s.input}>
                  <p className={style.input_form}>Keywords :</p>
                  <textarea value={url.split('-').join(' ')}   style={{
                        width: "100%",
                        border: "1px solid #d9d9d9",
                        padding: "8px",
                        borderRadius: "6px",
                        display: "flex",
                        justifyContent: "flex-start",
                        outline: 'none',
                      }} onChange={(e) => {
                        const length = e.target.value.split(' ').join('').length;
                        const newUrl = createLinkTilte(e.target.value)
                        if (length <= 70) {
                          setUrl(newUrl)
                        }
                      }}></textarea>
                </div>
              )}
            />

            <Controller
              name="key_lq"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <div className={s.input}>
                  <p className={style.input_form}>Key việc làm gợi ý :</p>
                  <TextArea placeholder="" {...field} />
                </div>
              )}
            />

            <Controller
              name="new_teaser"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div
                  className={s.input}
                  style={{
                    display: "block"
                  }}
                >
                  <p
                    style={{
                      marginBottom: "20px"
                    }}
                    
                  >
                    Tóm tắt :
                  </p>
                  <div 
                  >
                    <Input_textarea
                      value={detailBlog?.new_teaser}
                      name="img"
                      handleChange={handleCKEChangeOne}
                      dataCustom={(e: any) => {}} isAgain={false} handleUrlDelete={(e: string) => setListUrlDelete([...listUrlDelete, e])} 
                      />
                  </div>
                </div>
              )}
            />
            <div
              style={{
                display: "flex"
              }}
            >
              <Controller
                name="new_active"
                control={control}
                render={({ field }) => (
                  <div className={s.input}>
                    <p
                      style={{
                        marginRight: "10px"
                      }}
                    >
                      Kích hoạt :
                    </p>
                    <input style={{
                      marginRight: '30px'
                    }} checked={active}  type="checkbox" onChange={() => setActive(!active)}></input>
                  </div>
                )}
              />
              <Controller
                name="new_new"
                control={control}
                render={({ field }) => (
                  <div className={s.input}>
                    <p
                      style={{
                        marginRight: "10px"
                      }}
                    >
                      Tin mới :
                    </p>
                    <input style={{
                      marginRight: '30px'
                    }} checked={news}  type="checkbox" onChange={() => setNews(!news)}></input>
                  </div>
                )}
              />
              <Controller
                name="new_hot"
                control={control}
                render={({ field }) => (
                  <div className={s.input}>
                    <p
                      style={{
                        marginRight: "10px"
                      }}
                    >
                      Tin hot :
                    </p>
                    <input style={{
                      marginRight: '30px'
                    }} checked={hot}  type="checkbox" onChange={() => setHot(!hot)}></input>
                  </div>
                )}
              />
            </div>
            <Controller
              name="new_description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div
                  className={s.input}
                  style={{
                    display: "block"
                  }}
                >
                  <p
                    style={{
                      marginBottom: "20px"
                    }}
                  >
                    Mô tả công ty :
                  </p>
                  <Input_textarea
                    value={detailBlog?.new_description}
                    name="img"
                    handleChange={handleCKEChangeTwo}
                    dataCustom={function (e: any): void {
                      throw new Error("Function not implemented.");
                    } } isAgain={false} handleUrlDelete={(e: string) => setListUrlDelete([...listUrlDelete, e])}                  />
                </div>
              )}
            />
            <div className={s.btns_add}>
              <button type="submit" className={`${s.update}`}>
                Cập nhật
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  resetFields();
                }}
              >
                Làm lại
              </button>
            </div>
          </form>
        }
      </div>
    </div>
  );
};

export default AdminBlogAdd;


