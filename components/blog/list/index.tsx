"use client"
import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import {
    Button,
  Checkbox,
  Col,
  Form,
  Row,
  Select
} from "antd";
import {
  ActionType,
  ProColumns,
  ProForm,
  ProFormText,
  ProFormSelect
} from "@ant-design/pro-components";
import { getAllCandidate, getValueLocalStorage } from "@/funtions/function";
import { format } from "date-fns";
import {  EditOutlined } from "@ant-design/icons";
import DataTable from "@/components/dataTable";


const AdminBlogList = () => {
    
    const [ token, setToken ] = useState<any>();
    const router = useRouter();
  const [isFetching, setIsFetching] = useState(true);
  const tableRef = useRef<ActionType>();
  const [currentPage, setCurrentPage] = useState<any>(1);
  const [itemsPerPage, setItemsPerPage] = useState(30);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecord, setTotalRecord] = useState(100);

  const [dataTable, setDataTable] = useState<any[]>([]);
  const [form] = Form.useForm();
  const [dataFilter, setDataFilter] = useState<any>({});

  const [dataDetail, setDataDetail] = useState<any>(null);
  const [valueDropFilter, setValueDropFilter] = useState<any>([]);
  const [ blogCategory, setBlogCategory ] = useState<any>(null);

  const columns: ProColumns<any>[] = [
    {
      title: "STT",
      render: (text: any, record: any, index: any, action: any) => {
        return <>{index + 1}</>;
      },
      hideInSearch: true
    },
    {
      title: "Ảnh",
      dataIndex: "use_image",
      render: (text: any, record: any, index: any, action: any) => {
        return (
          <div
            style={{
              width: "70px",
              height: "50px"
            }}
          >
            {
              record.new_picture.length > 2 ? <Link
              href={
                record.new_picture.length > 2
                  ? record.new_picture
                  : "https://work247.vn/pictures/news/2023/12/05/bqq1701772057.jpg"
              }
              target="_blank"
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center"
                }}
                src={
                  record.new_picture.length > 2
                    ? record.new_picture
                    : "https://work247.vn/pictures/news/2023/12/05/bqq1701772057.jpg"
                }
                alt=""
              />
            </Link> : <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center"
                }}
                src="https://work247.vn/pictures/news/2023/12/05/bqq1701772057.jpg"
                alt=""
              />
            }
            
          </div>
        );
      },
      hideInSearch: true
    },

    {
      title: "Tiêu đề",
      dataIndex: "new_title",
      hideInSearch: true
    },
    {
      title: "Danh mục",
      dataIndex: "",
      render: (text: any, record: any, index: any, action: any) => {
        return (
          <>
          {
            blogCategory &&
            <Select
                      className={``}
                      defaultValue={Number(record.new_category_id)}
                      onChange={(e) => e = record.new_category_id}
                      style={{ width: "100%" }}
                      options={
                        blogCategory.map((category: any) => (
                        {
                          'value': Number(category.cat_id),
                          'label': category.cat_name
                        }
                      ))}
                      size="middle"
                    />
          }
          </>
        );
      },
      hideInSearch: true
    },
    {
      title: "Ngày đăng",
      render: (text: any, record: any, index: any, action: any) => {
        return (
          <>
            {record.new_date
              ? format(record.new_date * 1000, `dd/MM/yyyy`)
              : record.new_date}
          </>
        );
      },
      hideInSearch: true
    },
    {
      title: "Người đăng",
      dataIndex: "adm_name",
      hideInSearch: true
    },
    {
      title: "Cập nhật",
      dataIndex: "new_edited",
      render: (text: any, record: any, index: any, action: any) => {
        return (
          <>
          
            <Checkbox
              defaultChecked={
                record.new_edited == null || record.new_edited == 0
                  ? false
                  : true
              }
              onChange={(e) => handleSelectShow(e.target.checked)}
            />
          </>
        );
      },
      hideInSearch: true
    },
    {
      title: "Hot",
      dataIndex: `new_hot`,
      render: (text: any, record: any, index: any, action: any) => {
        return (
          <>
            <input type="checkbox" checked={text == 1 ? true : false}></input>
          </>
        );
      },
      hideInSearch: true
    },
    {
      title: "Active",
      dataIndex: "new_active",
      render: (text: any, record: any, index: any, action: any) => {
        return (
          <>
            <input type="checkbox" checked={text == 1 ? true : false}></input>
          </>
        );
      },
      hideInSearch: true
    },
    {
      title: "Index",
      dataIndex: "use_phone_tk",
      render: (text: any, record: any, index: any, action: any) => {
        return (
          <>
            <Checkbox
            //   disabled={handlePermission.edit ? false : true}
              defaultChecked={record.use_show}
              onChange={(e) => handleSelectShow(e.target.checked)}
            />
          </>
        );
      },
      hideInSearch: true
    },
    {
      title: "Sửa",
      hideInSearch: true,
      width: 50,
      render: (text: any, record: any, index: any, action: any) => (
        <>
          {" "}
            <EditOutlined
              style={{
                fontSize: 20,
                color: "#ffa500"
              }}
              type=""
              onClick={() => router.push(`/blog/${record.new_id}`) }
            />
        </>
      )
    }
  ];

  const getAllBlogCate = async () => {

    try {
      const post  = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_API}/admin/allBlogCate`, {},  {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })
      if(post?.data.data.result) {
        console.log('post.data.data.data', post.data.data.data);
        setBlogCategory(post.data.data.data)
      }
    } catch (err) {
      
    }
  }

  const getTotal = (data: any) => {
    axios
      .post(process.env.NEXT_PUBLIC_BASE_URL_API + "/admin/count", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        setTotalRecord(response.data.data.total);
        setTotalPages(Math.ceil(response.data.data.total / itemsPerPage));
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleGetData = async (data: any) => {
    try {
      setIsFetching(true);
      const json = {
        module: 25,
        page: currentPage,
        pageSize: itemsPerPage,
        conditions: {
          new_title: data?.new_title?.trim(),
          admin_id: data?.admin_id
        }
      };
      const res = await getAllCandidate(json, token, "");
      if (res?.data) {
        setDataTable([...res.data]);
      }
      setIsFetching(false);
      
      getTotal(json);
    } catch (error) {
      setIsFetching(false);
    }
  };

  const handleFilter = async (
    params: any,
    sort: any,
    filter: any
  ): Promise<any> => {
    let filterValue = form.getFieldsValue();
    setDataFilter(filterValue);
    setItemsPerPage(params.pageSize);
    setCurrentPage(params.current);
    handleGetData(filterValue);
  };

  const handleSelectShow = (value: boolean) => {
    console.log(value);
  };

  const onFinish = async (values: any) => {
    setCurrentPage(1);
    setDataFilter(values);
    handleGetData(values);
  };

  useEffect(() => {
    const newtoken = getValueLocalStorage('work247_token_admin_blog');
    if(newtoken) {
        setToken(newtoken)
        getAllBlogCate();
    }
   
  }, []);


  return (
    <div style={{
        position: 'relative'
    }}>
      
        <Row>
          <Col span={24}>
            <ProForm
              form={form}
              onFinish={onFinish}
              submitter={{
                searchConfig: {
                  resetText: "Hủy",
                  submitText: <>{"Tìm kiếm"}</>
                },
                resetButtonProps: false,
                render: (_: any, dom: any) => (
                  <div style={{ marginTop: "20px" }}>{dom}</div>
                )
              }}
            >
              <Row gutter={[20, 20]}>
                <Col span={4}>
                  <ProFormText name="new_title" placeholder="Tiêu đề" />
                </Col>
                <Col span={4}>
                  <ProFormSelect
                    name="admin_id"
                    placeholder="Người đăng"
                    options={valueDropFilter.map((item: any) => ({
                      label: item.adm_name,
                      value: item.adm_id
                    }))}
                  />
                </Col>
              </Row>
            </ProForm>
          </Col>
          <Col span={24} >
            <DataTable<any>
              actionRef={tableRef}
              rowKey="id"
              loading={isFetching}
              columns={columns}
              dataSource={dataTable}
              request={handleFilter}
              scroll={{ x: true }}
              search={false}
              pagination={{
                current: currentPage,
                pageSize: itemsPerPage,
                showSizeChanger: true,
                total: totalRecord,
                showTotal: (total: any, range: any) => {
                  return (
                    <div>
                      {" "}
                      {range[0]}-{range[1]} trên {total} bản ghi
                    </div>
                  );
                }
              }}
              rowSelection={false}
            />
          </Col>
        </Row>
        <div style={{
            position: 'absolute',
            top: '90px',
            right: '150px',
        }}>
          <Button style={{
            background: '#1677ff',
            color: '#FFF'
        }} onClick={() =>  router.push('add')}>Thêm mới</Button>
        </div>
    </div>
  );
};

export default AdminBlogList;
