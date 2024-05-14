import React, { useContext, useEffect, useState } from "react";
import { Input_textarea } from "../../InputEdit";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { createLinkTilte, getValueLocalStorage } from "@/funtions/function";
import s from "@/components/blog/add/style.module.css";
import { Button, Input, Radio, Select } from "antd";
import axios from "axios";
import { usePathname, useRouter, useParams } from 'next/navigation'
import Cookies from "js-cookie";
import Link from "next/link";
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

const AdminBlogDetail = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<LoginFormInputs>();
  const [ token, setToken ] = useState<any>();
  
  const pathName = usePathname();
  const param = useParams();
  const router = useRouter();
  const [dataEditOne, setDataEditOne] = useState<any>();
  const [dataEditTwo, setDataEditTwo] = useState<any>();
  const [picture, setPicture] = useState<any>("");
  const [ apiPicture, setApiPicture ] = useState<string>();
  const [flowAfterUpdate, setFlowAfterUpdate] = useState<number>(0);
  const [detailBlog, setDetailBlog] = useState<any>(null);
  const [ blogCategory, setBlogCategory ] = useState<any>(null);
  const [ listUrlDelete, setListUrlDelete ] = useState<any>([]);
  const [ active, setActive ] = useState<any>(false);
  const [ news, setNews ] = useState<any>(false);
  const [ hot, setHot ] = useState<any>(false);
  const [ titleLength, setTitleLength ] = useState<number>(0);
  const [ desLength, setDesLength ] = useState<number>(0);
  const [ url, setUrl ] = useState<string>('');




  const getDetailBlog = async (token: string) => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL_API_ADMIN}/admin/detailBlog`,
      {
        new_id: pathName.split('/')[2]
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );

    if (res.data.data.result) {
      setDetailBlog(res.data.data.data);
      setActive(res.data.data.data.new_active  == 1 ? true : false);
      setNews(res.data.data.data.new_new  == 1 ? true : false);
      setHot(res.data.data.data.new_hot  == 1 ? true : false)
      setPicture(res.data.data.data?.new_picture)
      setFlowAfterUpdate(1);
      setDesLength(res.data.data.data.new_des.length)
    }
  };

  

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data: any) => {
    
    const formData = new FormData();

    formData.append("new_category_id", data?.new_category_id || "");
    formData.append("new_title", data?.new_title || "");
    formData.append("new_title_rewrite", data?.new_title_rewrite || "");
    formData.append("new_order", data?.new_order || "");
    formData.append("new_tt", data?.new_tt || "");
    formData.append("new_des", data?.new_des || "");
    formData.append("new_keyword", data?.new_keyword || "");
    formData.append("key_lq", data?.key_lq || "");
    formData.append("new_teaser", dataEditOne ? dataEditOne :  detailBlog.new_teaser);
    formData.append("new_active", active ? "1" : "0");
    formData.append("new_new", news  ? '1' : '0');
    formData.append("new_hot",hot ? '1' : '0');
    formData.append("new_description", dataEditTwo ? dataEditTwo : detailBlog.new_description);

    if (apiPicture) {
      formData.append("new_picture", apiPicture);
    }

    const newDataPost = formData;
    try {
      formData.append("new_id", detailBlog.new_id);
      const post = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL_API_ADMIN}/admin/UpdateBlog`,
        newDataPost,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      if (post?.data.data.result) {
        router.push('blog')
    }} catch (error: any) {
      alert(error);
    }
  };

  const handleCKEChangeOne = async (e: any, type: string) => {
    setDataEditOne(e);
  };

  const handleCKEChangeTwo = (e: any, type: string) => {
    setDataEditTwo(e);
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
    setApiPicture(file);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPicture(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const newtoken = Cookies.get('work247_token_admin_blog');
    if(pathName.split('/')[2] && newtoken) {
      setToken(newtoken)
      getAllBlogCate(newtoken);
      getDetailBlog(newtoken)
    }
  }, []);

  return (
    <div>
      <Button onClick={() => router.push('/blog')} style={{
        margin: '30px',
        position:'absolute',
        color: '#fff',
        background:' #1677ff',
      }}>
        Trở lại
      </Button>
      {
        detailBlog  && blogCategory &&
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
        <span>Những ô dấu sao (*) là bắt buộc phải nhập.</span>

        {detailBlog && (
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="new_category_id"
              control={control}
              defaultValue={
                Number(detailBlog?.new_category_id)
               }
              rules={{
                required: "Vui lòng nhập email công ty"
              }}
              render={({ field }) => (
                <div className={s.input}>
                  <p>
                    <span>*</span>Chọn danh mục :
                  </p>
                  <Select
                    {...field}
                    className={``}
                    defaultValue={
                        Number(detailBlog?.new_category_id)
                       }
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
                required: "Vui lòng nhập tiêu đề tin"
              }}
              render={({ field }) => (
                <div className={s.input}>
                  <p>
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
              defaultValue={detailBlog?.new_title_rewrite}
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
              defaultValue={
                Number(detailBlog?.new_order)
                  ? Number(detailBlog?.new_order)
                  : 0
              }
              render={({ field }) => (
                <div className={s.input}>
                  <p>Thứ tự :</p>
                  <Input type="text" {...field} />
                </div>
              )}
            />
             <Controller
              name="new_picture"
              control={control}
              render={({ field }) => (
                <div className={s.input}>
                  <p
                    style={
                      {
                        // width: "100%"
                      }
                    }
                  >
                    Ảnh minh họa :
                  </p>
                  <div style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                        alignItems: "flex-start",
                  }}>
                    
                    <input
                      style={{
                        width: "50%",
                        border: "1px solid #d9d9d9",
                        padding: "8px",
                        borderRadius: "6px",
                        display: "flex",
                        justifyContent: "flex-start",
                        outline: 'none'
                      }}
                      type="file"
                      placeholder={picture ? picture : ''}
                      onChange={(e: any) => {
                        setPicture(e.target.files[0]);
                        handleFileChange(e)
                        field.onChange(e);
                      }}
                    />
                    <img style={{
                        width: '100px',
                        height: '100px'
                      }} src={`${picture}`} alt="" />
                  </div>
                </div>
              )}
            />
            <Controller
              name="new_tt"
              control={control}
              defaultValue={detailBlog.new_tt}
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
              defaultValue={detailBlog?.new_des}
              render={({ field }) => (
                <div className={s.input}>
                  <p>
                    <span></span>Description ({desLength}/250 ký tự) :
                  </p>
                  <TextArea style={{
                    height: '100px'
                  }} placeholder="" {...field}  onChange={(e) => {
                    const length = e.target.value.length;
                    if (length <= 250) {
                      setDesLength(length)}
                      field.onChange(e); 
                    }}/>
                </div>
              )}
            />

            <Controller
              name="new_keyword"
              control={control}
              defaultValue={detailBlog?.new_keyword}
              render={({ field }) => (
                <div className={s.input}>
                  <p>Keywords :</p>
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
                          // setTitleLength(length);
                        }
                      }}></textarea>
                </div>
              )}
            />

            <Controller
              name="key_lq"
              defaultValue={detailBlog?.key_lq}
              control={control}
              render={({ field }) => (
                <div className={s.input}>
                  <p>Key việc làm gợi ý :</p>
                  <TextArea placeholder="" {...field} />
                </div>
              )}
            />

            <Controller
              name="new_teaser"
              control={control}
              defaultValue={detailBlog?.new_teaser}
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
                  <Input_textarea
                    value={detailBlog?.new_teaser}
                    name="img"
                    handleChange={handleCKEChangeOne}
                    dataCustom={(e) => console.log("blog", e)}
                    isAgain={false}
                    handleUrlDelete={(e: string) => { console.log('url delete nay', e) , setListUrlDelete([...listUrlDelete, e])}}
                  />
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
                    <input checked={active}  type="checkbox" onChange={() => setActive(!active)}></input>
                    {/* <Checkbox
                      defaultChecked={
                        detailBlog?.new_active == 1 ? true : false
                      }
                      {...field}
                    /> */}
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
              defaultValue={detailBlog?.new_description}
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
                    Nội dung :
                  </p>
                  <Input_textarea
                    value={detailBlog?.new_description}
                    name="img"
                    handleChange={handleCKEChangeTwo}
                    dataCustom={function (e: any): void {
                      throw new Error("Function not implemented.");
                    }}
                    isAgain={false}
                    handleUrlDelete={(e: string) => setListUrlDelete([...listUrlDelete, e])}
                  />
                </div>
              )}
            />
            {/* <div
              style={{
                display: "flex"
              }}
            >
              <p
                style={{
                  marginRight: "20px"
                }}
              >
                Sau khi lưu dữ liệu :
              </p>
              <Radio.Group
                defaultValue={flowAfterUpdate}
                onChange={(e) => setFlowAfterUpdate(e.target.value)}
              >
                <Radio value={0}>Thêm mới </Radio>
                <Radio value={1}>Quay về danh sách</Radio>
                <Radio value={2}>Sửa bản ghi</Radio>
              </Radio.Group>
            </div> */}
            <div className={s.btns_add}>
              <button type="submit" className={`${s.update}`}>
                Cập nhật
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  resetFields()
                }}
              >
                Làm lại
              </button>
            </div>
          </form>
        )}
      </div>
      }
    </div>
  );
};

export default AdminBlogDetail;
