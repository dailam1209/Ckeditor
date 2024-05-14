import axios from "axios";
export const getValueLocalStorage = (name: string) => {
    if( typeof window !== 'undefined') {
        const value = localStorage.getItem(name)
        return value
    }
    return null
}

export const createLinkTilte = (input: string) => {
    // eslint-disable-next-line no-useless-escape
    if (!input) return "";
    if (!input.trim()) return "";
    input = input.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "");
    let str = input.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.toLowerCase();
    str = str.replaceAll(" ", "-");
    return str;
  };


// get don alias
export const getAllCandidate = async (obj: any, token?: any, type?: string) => {
    try {
        const res = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL_API_ADMIN}/admin/list`,
            obj,
            {
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': `${type ? type : 'application/json'}`
                }
              }
        );

        const { data } = res.data;
        return data;
    } catch (error) {}
};

export const city_array = [
    {
      cit_id: 1,
      cit_name: "Hà Nội",
      cit_parent: 0,
    },
    {
      cit_id: 2,
      cit_name: "Hải Phòng",
      cit_parent: 0,
    },
    {
      cit_id: 3,
      cit_name: "Bắc Giang",
      cit_parent: 0,
    },
    {
      cit_id: 4,
      cit_name: "Bắc Kạn",
      cit_parent: 0,
    },
    {
      cit_id: 5,
      cit_name: "Bắc Ninh",
      cit_parent: 0,
    },
    {
      cit_id: 6,
      cit_name: "Cao Bằng",
      cit_parent: 0,
    },
    {
      cit_id: 7,
      cit_name: "Điện Biên",
      cit_parent: 0,
    },
    {
      cit_id: 8,
      cit_name: "Hòa Bình",
      cit_parent: 0,
    },
    {
      cit_id: 9,
      cit_name: "Hải Dương",
      cit_parent: 0,
    },
    {
      cit_id: 10,
      cit_name: "Hà Giang",
      cit_parent: 0,
    },
    {
      cit_id: 11,
      cit_name: "Hà Nam",
      cit_parent: 0,
    },
    {
      cit_id: 12,
      cit_name: "Hưng Yên",
      cit_parent: 0,
    },
    {
      cit_id: 13,
      cit_name: "Lào Cai",
      cit_parent: 0,
    },
    {
      cit_id: 14,
      cit_name: "Lai Châu",
      cit_parent: 0,
    },
    {
      cit_id: 15,
      cit_name: "Lạng Sơn",
      cit_parent: 0,
    },
    {
      cit_id: 16,
      cit_name: "Ninh Bình",
      cit_parent: 0,
    },
    {
      cit_id: 17,
      cit_name: "Nam Định",
      cit_parent: 0,
    },
    {
      cit_id: 18,
      cit_name: "Phú Thọ",
      cit_parent: 0,
    },
    {
      cit_id: 19,
      cit_name: "Quảng Ninh",
      cit_parent: 0,
    },
    {
      cit_id: 20,
      cit_name: "Sơn La",
      cit_parent: 0,
    },
    {
      cit_id: 21,
      cit_name: "Thái Bình",
      cit_parent: 0,
    },
    {
      cit_id: 22,
      cit_name: "Thái Nguyên",
      cit_parent: 0,
    },
    {
      cit_id: 23,
      cit_name: "Tuyên Quang",
      cit_parent: 0,
    },
    {
      cit_id: 24,
      cit_name: "Vĩnh Phúc",
      cit_parent: 0,
    },
    {
      cit_id: 25,
      cit_name: "Yên Bái",
      cit_parent: 0,
    },
    {
      cit_id: 26,
      cit_name: "Đà Nẵng",
      cit_parent: 0,
    },
    {
      cit_id: 27,
      cit_name: "Thừa Thiên Huế",
      cit_parent: 0,
    },
    {
      cit_id: 28,
      cit_name: "Khánh Hòa",
      cit_parent: 0,
    },
    {
      cit_id: 29,
      cit_name: "Lâm Đồng",
      cit_parent: 0,
    },
    {
      cit_id: 30,
      cit_name: "Bình Định",
      cit_parent: 0,
    },
    {
      cit_id: 31,
      cit_name: "Bình Thuận",
      cit_parent: 0,
    },
    {
      cit_id: 32,
      cit_name: "Đắk Lắk",
      cit_parent: 0,
    },
    {
      cit_id: 33,
      cit_name: "Đắk Nông",
      cit_parent: 0,
    },
    {
      cit_id: 34,
      cit_name: "Gia Lai",
      cit_parent: 0,
    },
    {
      cit_id: 35,
      cit_name: "Hà Tĩnh",
      cit_parent: 0,
    },
    {
      cit_id: 36,
      cit_name: "Kon Tum",
      cit_parent: 0,
    },
    {
      cit_id: 37,
      cit_name: "Nghệ An",
      cit_parent: 0,
    },
    {
      cit_id: 38,
      cit_name: "Ninh Thuận",
      cit_parent: 0,
    },
    {
      cit_id: 39,
      cit_name: "Phú Yên",
      cit_parent: 0,
    },
    {
      cit_id: 40,
      cit_name: "Quảng Bình",
      cit_parent: 0,
    },
    {
      cit_id: 41,
      cit_name: "Quảng Nam",
      cit_parent: 0,
    },
    {
      cit_id: 42,
      cit_name: "Quảng Ngãi",
      cit_parent: 0,
    },
    {
      cit_id: 43,
      cit_name: "Quảng Trị",
      cit_parent: 0,
    },
    {
      cit_id: 44,
      cit_name: "Thanh Hóa",
      cit_parent: 0,
    },
    {
      cit_id: 45,
      cit_name: "Hồ Chí Minh",
      cit_parent: 0,
    },
    {
      cit_id: 46,
      cit_name: "Bình Dương",
      cit_parent: 0,
    },
    {
      cit_id: 47,
      cit_name: "Bà Rịa Vũng Tàu",
      cit_parent: 0,
    },
    {
      cit_id: 48,
      cit_name: "Cần Thơ",
      cit_parent: 0,
    },
    {
      cit_id: 49,
      cit_name: "An Giang",
      cit_parent: 0,
    },
    {
      cit_id: 50,
      cit_name: "Bạc Liêu",
      cit_parent: 0,
    },
    {
      cit_id: 51,
      cit_name: "Bình Phước",
      cit_parent: 0,
    },
    {
      cit_id: 52,
      cit_name: "Bến Tre",
      cit_parent: 0,
    },
    {
      cit_id: 53,
      cit_name: "Cà Mau",
      cit_parent: 0,
    },
    {
      cit_id: 54,
      cit_name: "Đồng Tháp",
      cit_parent: 0,
    },
    {
      cit_id: 55,
      cit_name: "Đồng Nai",
      cit_parent: 0,
    },
    {
      cit_id: 56,
      cit_name: "Hậu Giang",
      cit_parent: 0,
    },
    {
      cit_id: 57,
      cit_name: "Kiên Giang",
      cit_parent: 0,
    },
    {
      cit_id: 58,
      cit_name: "Long An",
      cit_parent: 0,
    },
    {
      cit_id: 59,
      cit_name: "Sóc Trăng",
      cit_parent: 0,
    },
    {
      cit_id: 60,
      cit_name: "Tiền Giang",
      cit_parent: 0,
    },
    {
      cit_id: 61,
      cit_name: "Tây Ninh",
      cit_parent: 0,
    },
    {
      cit_id: 62,
      cit_name: "Trà Vinh",
      cit_parent: 0,
    },
    {
      cit_id: 63,
      cit_name: "Vĩnh Long",
      cit_parent: 0,
    },
    {
      cit_id: 66,
      cit_name: "Quận Ba Đình",
      cit_parent: 1,
    },
    {
      cit_id: 67,
      cit_name: "Quận Hoàn Kiếm",
      cit_parent: 1,
    },
    {
      cit_id: 68,
      cit_name: "Quận Tây Hồ",
      cit_parent: 1,
    },
    {
      cit_id: 69,
      cit_name: "Quận Long Biên",
      cit_parent: 1,
    },
    {
      cit_id: 70,
      cit_name: "Quận Cầu Giấy",
      cit_parent: 1,
    },
    {
      cit_id: 71,
      cit_name: "Quận Đống Đa",
      cit_parent: 1,
    },
    {
      cit_id: 72,
      cit_name: "Quận Hai Bà Trưng",
      cit_parent: 1,
    },
    {
      cit_id: 73,
      cit_name: "Quận Hoàng Mai",
      cit_parent: 1,
    },
    {
      cit_id: 74,
      cit_name: "Quận Thanh Xuân",
      cit_parent: 1,
    },
    {
      cit_id: 75,
      cit_name: "Huyện Sóc Sơn",
      cit_parent: 1,
    },
    {
      cit_id: 76,
      cit_name: "Huyện Đông Anh",
      cit_parent: 1,
    },
    {
      cit_id: 77,
      cit_name: "Huyện Gia Lâm",
      cit_parent: 1,
    },
    {
      cit_id: 78,
      cit_name: "Quận Nam Từ Liêm",
      cit_parent: 1,
    },
    {
      cit_id: 79,
      cit_name: "Huyện Thanh Trì",
      cit_parent: 1,
    },
    {
      cit_id: 80,
      cit_name: "Quận Bắc Từ Liêm",
      cit_parent: 1,
    },
    {
      cit_id: 81,
      cit_name: "Huyện Mê Linh",
      cit_parent: 1,
    },
    {
      cit_id: 82,
      cit_name: "Quận Hà Đông",
      cit_parent: 1,
    },
    {
      cit_id: 83,
      cit_name: "Thị xã Sơn Tây",
      cit_parent: 1,
    },
    {
      cit_id: 84,
      cit_name: "Huyện Ba Vì",
      cit_parent: 1,
    },
    {
      cit_id: 85,
      cit_name: "Huyện Phúc Thọ",
      cit_parent: 1,
    },
    {
      cit_id: 86,
      cit_name: "Huyện Đan Phượng",
      cit_parent: 1,
    },
    {
      cit_id: 87,
      cit_name: "Huyện Hoài Đức",
      cit_parent: 1,
    },
    {
      cit_id: 88,
      cit_name: "Huyện Quốc Oai",
      cit_parent: 1,
    },
    {
      cit_id: 89,
      cit_name: "Huyện Thạch Thất",
      cit_parent: 1,
    },
    {
      cit_id: 90,
      cit_name: "Huyện Chương Mỹ",
      cit_parent: 1,
    },
    {
      cit_id: 91,
      cit_name: "Huyện Thanh Oai",
      cit_parent: 1,
    },
    {
      cit_id: 92,
      cit_name: "Huyện Thường Tín",
      cit_parent: 1,
    },
    {
      cit_id: 93,
      cit_name: "Huyện Phú Xuyên",
      cit_parent: 1,
    },
    {
      cit_id: 94,
      cit_name: "Huyện Ứng Hòa",
      cit_parent: 1,
    },
    {
      cit_id: 95,
      cit_name: "Huyện Mỹ Đức",
      cit_parent: 1,
    },
    {
      cit_id: 96,
      cit_name: "Thành phố Hà Giang",
      cit_parent: 10,
    },
    {
      cit_id: 97,
      cit_name: "Huyện Đồng Văn",
      cit_parent: 10,
    },
    {
      cit_id: 98,
      cit_name: "Huyện Mèo Vạc",
      cit_parent: 10,
    },
    {
      cit_id: 99,
      cit_name: "Huyện Yên Minh",
      cit_parent: 10,
    },
    {
      cit_id: 100,
      cit_name: "Huyện Quản Bạ",
      cit_parent: 10,
    },
    {
      cit_id: 101,
      cit_name: "Huyện Vị Xuyên",
      cit_parent: 10,
    },
    {
      cit_id: 102,
      cit_name: "Huyện Bắc Mê",
      cit_parent: 10,
    },
    {
      cit_id: 103,
      cit_name: "Huyện Hoàng Su Phì",
      cit_parent: 10,
    },
    {
      cit_id: 104,
      cit_name: "Huyện Xín Mần",
      cit_parent: 10,
    },
    {
      cit_id: 105,
      cit_name: "Huyện Bắc Quang",
      cit_parent: 10,
    },
    {
      cit_id: 106,
      cit_name: "Huyện Quang Bình",
      cit_parent: 10,
    },
    {
      cit_id: 107,
      cit_name: "Thành phố Cao Bằng",
      cit_parent: 6,
    },
    {
      cit_id: 108,
      cit_name: "Huyện Bảo Lâm",
      cit_parent: 6,
    },
    {
      cit_id: 109,
      cit_name: "Huyện Bảo Lạc",
      cit_parent: 6,
    },
    {
      cit_id: 110,
      cit_name: "Huyện Thông Nông",
      cit_parent: 6,
    },
    {
      cit_id: 111,
      cit_name: "Huyện Hà Quảng",
      cit_parent: 6,
    },
    {
      cit_id: 112,
      cit_name: "Huyện Trà Lĩnh",
      cit_parent: 6,
    },
    {
      cit_id: 113,
      cit_name: "Huyện Trùng Khánh",
      cit_parent: 6,
    },
    {
      cit_id: 114,
      cit_name: "Huyện Hạ Lang",
      cit_parent: 6,
    },
    {
      cit_id: 115,
      cit_name: "Huyện Quảng Uyên",
      cit_parent: 6,
    },
    {
      cit_id: 116,
      cit_name: "Huyện Phục Hoà",
      cit_parent: 6,
    },
    {
      cit_id: 117,
      cit_name: "Huyện Hoà An",
      cit_parent: 6,
    },
    {
      cit_id: 118,
      cit_name: "Huyện Nguyên Bình",
      cit_parent: 6,
    },
    {
      cit_id: 119,
      cit_name: "Huyện Thạch An",
      cit_parent: 6,
    },
    {
      cit_id: 120,
      cit_name: "Thành Phố Bắc Kạn",
      cit_parent: 4,
    },
    {
      cit_id: 121,
      cit_name: "Huyện Pác Nặm",
      cit_parent: 4,
    },
    {
      cit_id: 122,
      cit_name: "Huyện Ba Bể",
      cit_parent: 4,
    },
    {
      cit_id: 123,
      cit_name: "Huyện Ngân Sơn",
      cit_parent: 4,
    },
    {
      cit_id: 124,
      cit_name: "Huyện Bạch Thông",
      cit_parent: 4,
    },
    {
      cit_id: 125,
      cit_name: "Huyện Chợ Đồn",
      cit_parent: 4,
    },
    {
      cit_id: 126,
      cit_name: "Huyện Chợ Mới",
      cit_parent: 4,
    },
    {
      cit_id: 127,
      cit_name: "Huyện Na Rì",
      cit_parent: 4,
    },
    {
      cit_id: 128,
      cit_name: "Thành phố Tuyên Quang",
      cit_parent: 23,
    },
    {
      cit_id: 129,
      cit_name: "Huyện Lâm Bình",
      cit_parent: 23,
    },
    {
      cit_id: 130,
      cit_name: "Huyện Nà Hang",
      cit_parent: 23,
    },
    {
      cit_id: 131,
      cit_name: "Huyện Chiêm Hóa",
      cit_parent: 23,
    },
    {
      cit_id: 132,
      cit_name: "Huyện Hàm Yên",
      cit_parent: 23,
    },
    {
      cit_id: 133,
      cit_name: "Huyện Yên Sơn",
      cit_parent: 23,
    },
    {
      cit_id: 134,
      cit_name: "Huyện Sơn Dương",
      cit_parent: 23,
    },
    {
      cit_id: 135,
      cit_name: "Thành phố Lào Cai",
      cit_parent: 13,
    },
    {
      cit_id: 136,
      cit_name: "Huyện Bát Xát",
      cit_parent: 13,
    },
    {
      cit_id: 137,
      cit_name: "Huyện Mường Khương",
      cit_parent: 13,
    },
    {
      cit_id: 138,
      cit_name: "Huyện Si Ma Cai",
      cit_parent: 13,
    },
    {
      cit_id: 139,
      cit_name: "Huyện Bắc Hà",
      cit_parent: 13,
    },
    {
      cit_id: 140,
      cit_name: "Huyện Bảo Thắng",
      cit_parent: 13,
    },
    {
      cit_id: 141,
      cit_name: "Huyện Bảo Yên",
      cit_parent: 13,
    },
    {
      cit_id: 142,
      cit_name: "Thị xã Sa Pa",
      cit_parent: 13,
    },
    {
      cit_id: 143,
      cit_name: "Huyện Văn Bàn",
      cit_parent: 13,
    },
    {
      cit_id: 144,
      cit_name: "Thành phố Điện Biên Phủ",
      cit_parent: 7,
    },
    {
      cit_id: 145,
      cit_name: "Thị Xã Mường Lay",
      cit_parent: 7,
    },
    {
      cit_id: 146,
      cit_name: "Huyện Mường Nhé",
      cit_parent: 7,
    },
    {
      cit_id: 147,
      cit_name: "Huyện Mường Chà",
      cit_parent: 7,
    },
    {
      cit_id: 148,
      cit_name: "Huyện Tủa Chùa",
      cit_parent: 7,
    },
    {
      cit_id: 149,
      cit_name: "Huyện Tuần Giáo",
      cit_parent: 7,
    },
    {
      cit_id: 150,
      cit_name: "Huyện Điện Biên",
      cit_parent: 7,
    },
    {
      cit_id: 151,
      cit_name: "Huyện Điện Biên Đông",
      cit_parent: 7,
    },
    {
      cit_id: 152,
      cit_name: "Huyện Mường Ảng",
      cit_parent: 7,
    },
    {
      cit_id: 153,
      cit_name: "Huyện Nậm Pồ",
      cit_parent: 7,
    },
    {
      cit_id: 154,
      cit_name: "Thành phố Lai Châu",
      cit_parent: 14,
    },
    {
      cit_id: 155,
      cit_name: "Huyện Tam Đường",
      cit_parent: 14,
    },
    {
      cit_id: 156,
      cit_name: "Huyện Mường Tè",
      cit_parent: 14,
    },
    {
      cit_id: 157,
      cit_name: "Huyện Sìn Hồ",
      cit_parent: 14,
    },
    {
      cit_id: 158,
      cit_name: "Huyện Phong Thổ",
      cit_parent: 14,
    },
    {
      cit_id: 159,
      cit_name: "Huyện Than Uyên",
      cit_parent: 14,
    },
    {
      cit_id: 160,
      cit_name: "Huyện Tân Uyên",
      cit_parent: 14,
    },
    {
      cit_id: 161,
      cit_name: "Huyện Nậm Nhùn",
      cit_parent: 14,
    },
    {
      cit_id: 162,
      cit_name: "Thành phố Sơn La",
      cit_parent: 20,
    },
    {
      cit_id: 163,
      cit_name: "Huyện Quỳnh Nhai",
      cit_parent: 20,
    },
    {
      cit_id: 164,
      cit_name: "Huyện Thuận Châu",
      cit_parent: 20,
    },
    {
      cit_id: 165,
      cit_name: "Huyện Mường La",
      cit_parent: 20,
    },
    {
      cit_id: 166,
      cit_name: "Huyện Bắc Yên",
      cit_parent: 20,
    },
    {
      cit_id: 167,
      cit_name: "Huyện Phù Yên",
      cit_parent: 20,
    },
    {
      cit_id: 168,
      cit_name: "Huyện Mộc Châu",
      cit_parent: 20,
    },
    {
      cit_id: 169,
      cit_name: "Huyện Yên Châu",
      cit_parent: 20,
    },
    {
      cit_id: 170,
      cit_name: "Huyện Mai Sơn",
      cit_parent: 20,
    },
    {
      cit_id: 171,
      cit_name: "Huyện Sông Mã",
      cit_parent: 20,
    },
    {
      cit_id: 172,
      cit_name: "Huyện Sốp Cộp",
      cit_parent: 20,
    },
    {
      cit_id: 173,
      cit_name: "Huyện Vân Hồ",
      cit_parent: 20,
    },
    {
      cit_id: 174,
      cit_name: "Thành phố Yên Bái",
      cit_parent: 25,
    },
    {
      cit_id: 175,
      cit_name: "Thị xã Nghĩa Lộ",
      cit_parent: 25,
    },
    {
      cit_id: 176,
      cit_name: "Huyện Lục Yên",
      cit_parent: 25,
    },
    {
      cit_id: 177,
      cit_name: "Huyện Văn Yên",
      cit_parent: 25,
    },
    {
      cit_id: 178,
      cit_name: "Huyện Mù Căng Chải",
      cit_parent: 25,
    },
    {
      cit_id: 179,
      cit_name: "Huyện Trấn Yên",
      cit_parent: 25,
    },
    {
      cit_id: 180,
      cit_name: "Huyện Trạm Tấu",
      cit_parent: 25,
    },
    {
      cit_id: 181,
      cit_name: "Huyện Văn Chấn",
      cit_parent: 25,
    },
    {
      cit_id: 182,
      cit_name: "Huyện Yên Bình",
      cit_parent: 25,
    },
    {
      cit_id: 183,
      cit_name: "Thành phố Hòa Bình",
      cit_parent: 8,
    },
    {
      cit_id: 184,
      cit_name: "Huyện Đà Bắc",
      cit_parent: 8,
    },
    {
      cit_id: 185,
      cit_name: "Huyện Kỳ Sơn",
      cit_parent: 8,
    },
    {
      cit_id: 186,
      cit_name: "Huyện Lương Sơn",
      cit_parent: 8,
    },
    {
      cit_id: 187,
      cit_name: "Huyện Kim Bôi",
      cit_parent: 8,
    },
    {
      cit_id: 188,
      cit_name: "Huyện Cao Phong",
      cit_parent: 8,
    },
    {
      cit_id: 189,
      cit_name: "Huyện Tân Lạc",
      cit_parent: 8,
    },
    {
      cit_id: 190,
      cit_name: "Huyện Mai Châu",
      cit_parent: 8,
    },
    {
      cit_id: 191,
      cit_name: "Huyện Lạc Sơn",
      cit_parent: 8,
    },
    {
      cit_id: 192,
      cit_name: "Huyện Yên Thủy",
      cit_parent: 8,
    },
    {
      cit_id: 193,
      cit_name: "Huyện Lạc Thủy",
      cit_parent: 8,
    },
    {
      cit_id: 194,
      cit_name: "Thành phố Thái Nguyên",
      cit_parent: 22,
    },
    {
      cit_id: 195,
      cit_name: "Thành phố Sông Công",
      cit_parent: 22,
    },
    {
      cit_id: 196,
      cit_name: "Huyện Định Hóa",
      cit_parent: 22,
    },
    {
      cit_id: 197,
      cit_name: "Huyện Phú Lương",
      cit_parent: 22,
    },
    {
      cit_id: 198,
      cit_name: "Huyện Đồng Hỷ",
      cit_parent: 22,
    },
    {
      cit_id: 199,
      cit_name: "Huyện Võ Nhai",
      cit_parent: 22,
    },
    {
      cit_id: 200,
      cit_name: "Huyện Đại Từ",
      cit_parent: 22,
    },
    {
      cit_id: 201,
      cit_name: "Thị xã Phổ Yên",
      cit_parent: 22,
    },
    {
      cit_id: 202,
      cit_name: "Huyện Phú Bình",
      cit_parent: 22,
    },
    {
      cit_id: 203,
      cit_name: "Thành phố Lạng Sơn",
      cit_parent: 15,
    },
    {
      cit_id: 204,
      cit_name: "Huyện Tràng Định",
      cit_parent: 15,
    },
    {
      cit_id: 205,
      cit_name: "Huyện Bình Gia",
      cit_parent: 15,
    },
    {
      cit_id: 206,
      cit_name: "Huyện Văn Lãng",
      cit_parent: 15,
    },
    {
      cit_id: 207,
      cit_name: "Huyện Cao Lộc",
      cit_parent: 15,
    },
    {
      cit_id: 208,
      cit_name: "Huyện Văn Quan",
      cit_parent: 15,
    },
    {
      cit_id: 209,
      cit_name: "Huyện Bắc Sơn",
      cit_parent: 15,
    },
    {
      cit_id: 210,
      cit_name: "Huyện Hữu Lũng",
      cit_parent: 15,
    },
    {
      cit_id: 211,
      cit_name: "Huyện Chi Lăng",
      cit_parent: 15,
    },
    {
      cit_id: 212,
      cit_name: "Huyện Lộc Bình",
      cit_parent: 15,
    },
    {
      cit_id: 213,
      cit_name: "Huyện Đình Lập",
      cit_parent: 15,
    },
    {
      cit_id: 214,
      cit_name: "Thành phố Hạ Long",
      cit_parent: 19,
    },
    {
      cit_id: 215,
      cit_name: "Thành phố Móng Cái",
      cit_parent: 19,
    },
    {
      cit_id: 216,
      cit_name: "Thành phố Cẩm Phả",
      cit_parent: 19,
    },
    {
      cit_id: 217,
      cit_name: "Thành phố Uông Bí",
      cit_parent: 19,
    },
    {
      cit_id: 218,
      cit_name: "Huyện Bình Liêu",
      cit_parent: 19,
    },
    {
      cit_id: 219,
      cit_name: "Huyện Tiên Yên",
      cit_parent: 19,
    },
    {
      cit_id: 220,
      cit_name: "Huyện Đầm Hà",
      cit_parent: 19,
    },
    {
      cit_id: 221,
      cit_name: "Huyện Hải Hà",
      cit_parent: 19,
    },
    {
      cit_id: 222,
      cit_name: "Huyện Ba Chẽ",
      cit_parent: 19,
    },
    {
      cit_id: 223,
      cit_name: "Huyện Vân Đồn",
      cit_parent: 19,
    },
    {
      cit_id: 225,
      cit_name: "Thị xã Đông Triều",
      cit_parent: 19,
    },
    {
      cit_id: 226,
      cit_name: "Thị xã Quảng Yên",
      cit_parent: 19,
    },
    {
      cit_id: 227,
      cit_name: "Huyện Cô Tô",
      cit_parent: 19,
    },
    {
      cit_id: 228,
      cit_name: "Thành phố Bắc Giang",
      cit_parent: 3,
    },
    {
      cit_id: 229,
      cit_name: "Huyện Yên Thế",
      cit_parent: 3,
    },
    {
      cit_id: 230,
      cit_name: "Huyện Tân Yên",
      cit_parent: 3,
    },
    {
      cit_id: 231,
      cit_name: "Huyện Lạng Giang",
      cit_parent: 3,
    },
    {
      cit_id: 232,
      cit_name: "Huyện Lục Nam",
      cit_parent: 3,
    },
    {
      cit_id: 233,
      cit_name: "Huyện Lục Ngạn",
      cit_parent: 3,
    },
    {
      cit_id: 234,
      cit_name: "Huyện Sơn Động",
      cit_parent: 3,
    },
    {
      cit_id: 235,
      cit_name: "Huyện Yên Dũng",
      cit_parent: 3,
    },
    {
      cit_id: 236,
      cit_name: "Huyện Việt Yên",
      cit_parent: 3,
    },
    {
      cit_id: 237,
      cit_name: "Huyện Hiệp Hòa",
      cit_parent: 3,
    },
    {
      cit_id: 238,
      cit_name: "Thành phố Việt Trì",
      cit_parent: 18,
    },
    {
      cit_id: 239,
      cit_name: "Thị xã Phú Thọ",
      cit_parent: 18,
    },
    {
      cit_id: 240,
      cit_name: "Huyện Đoan Hùng",
      cit_parent: 18,
    },
    {
      cit_id: 241,
      cit_name: "Huyện Hạ Hoà",
      cit_parent: 18,
    },
    {
      cit_id: 242,
      cit_name: "Huyện Thanh Ba",
      cit_parent: 18,
    },
    {
      cit_id: 243,
      cit_name: "Huyện Phù Ninh",
      cit_parent: 18,
    },
    {
      cit_id: 244,
      cit_name: "Huyện Yên Lập",
      cit_parent: 18,
    },
    {
      cit_id: 245,
      cit_name: "Huyện Cẩm Khê",
      cit_parent: 18,
    },
    {
      cit_id: 246,
      cit_name: "Huyện Tam Nông",
      cit_parent: 18,
    },
    {
      cit_id: 247,
      cit_name: "Huyện Lâm Thao",
      cit_parent: 18,
    },
    {
      cit_id: 248,
      cit_name: "Huyện Thanh Sơn",
      cit_parent: 18,
    },
    {
      cit_id: 249,
      cit_name: "Huyện Thanh Thuỷ",
      cit_parent: 18,
    },
    {
      cit_id: 250,
      cit_name: "Huyện Tân Sơn",
      cit_parent: 18,
    },
    {
      cit_id: 251,
      cit_name: "Thành phố Vĩnh Yên",
      cit_parent: 24,
    },
    {
      cit_id: 252,
      cit_name: "Thành phố Phúc Yên",
      cit_parent: 24,
    },
    {
      cit_id: 253,
      cit_name: "Huyện Lập Thạch",
      cit_parent: 24,
    },
    {
      cit_id: 254,
      cit_name: "Huyện Tam Dương",
      cit_parent: 24,
    },
    {
      cit_id: 255,
      cit_name: "Huyện Tam Đảo",
      cit_parent: 24,
    },
    {
      cit_id: 256,
      cit_name: "Huyện Bình Xuyên",
      cit_parent: 24,
    },
    {
      cit_id: 257,
      cit_name: "Huyện Yên Lạc",
      cit_parent: 24,
    },
    {
      cit_id: 258,
      cit_name: "Huyện Vĩnh Tường",
      cit_parent: 24,
    },
    {
      cit_id: 259,
      cit_name: "Huyện Sông Lô",
      cit_parent: 24,
    },
    {
      cit_id: 260,
      cit_name: "Thành phố Bắc Ninh",
      cit_parent: 5,
    },
    {
      cit_id: 261,
      cit_name: "Huyện Yên Phong",
      cit_parent: 5,
    },
    {
      cit_id: 262,
      cit_name: "Huyện Quế Võ",
      cit_parent: 5,
    },
    {
      cit_id: 263,
      cit_name: "Huyện Tiên Du",
      cit_parent: 5,
    },
    {
      cit_id: 264,
      cit_name: "Thị xã Từ Sơn",
      cit_parent: 5,
    },
    {
      cit_id: 265,
      cit_name: "Huyện Thuận Thành",
      cit_parent: 5,
    },
    {
      cit_id: 266,
      cit_name: "Huyện Gia Bình",
      cit_parent: 5,
    },
    {
      cit_id: 267,
      cit_name: "Huyện Lương Tài",
      cit_parent: 5,
    },
    {
      cit_id: 268,
      cit_name: "Thành phố Hải Dương",
      cit_parent: 9,
    },
    {
      cit_id: 269,
      cit_name: "Thành phố Chí Linh",
      cit_parent: 9,
    },
    {
      cit_id: 270,
      cit_name: "Huyện Nam Sách",
      cit_parent: 9,
    },
    {
      cit_id: 271,
      cit_name: "Huyện Kinh Môn",
      cit_parent: 9,
    },
    {
      cit_id: 272,
      cit_name: "Huyện Kim Thành",
      cit_parent: 9,
    },
    {
      cit_id: 273,
      cit_name: "Huyện Thanh Hà",
      cit_parent: 9,
    },
    {
      cit_id: 274,
      cit_name: "Huyện Cẩm Giàng",
      cit_parent: 9,
    },
    {
      cit_id: 275,
      cit_name: "Huyện Bình Giang",
      cit_parent: 9,
    },
    {
      cit_id: 276,
      cit_name: "Huyện Gia Lộc",
      cit_parent: 9,
    },
    {
      cit_id: 277,
      cit_name: "Huyện Tứ Kỳ",
      cit_parent: 9,
    },
    {
      cit_id: 278,
      cit_name: "Huyện Ninh Giang",
      cit_parent: 9,
    },
    {
      cit_id: 279,
      cit_name: "Huyện Thanh Miện",
      cit_parent: 9,
    },
    {
      cit_id: 280,
      cit_name: "Quận Hồng Bàng",
      cit_parent: 2,
    },
    {
      cit_id: 281,
      cit_name: "Quận Ngô Quyền",
      cit_parent: 2,
    },
    {
      cit_id: 282,
      cit_name: "Quận Lê Chân",
      cit_parent: 2,
    },
    {
      cit_id: 283,
      cit_name: "Quận Hải An",
      cit_parent: 2,
    },
    {
      cit_id: 284,
      cit_name: "Quận Kiến An",
      cit_parent: 2,
    },
    {
      cit_id: 285,
      cit_name: "Quận Đồ Sơn",
      cit_parent: 2,
    },
    {
      cit_id: 286,
      cit_name: "Quận Dương Kinh",
      cit_parent: 2,
    },
    {
      cit_id: 287,
      cit_name: "Huyện Thuỷ Nguyên",
      cit_parent: 2,
    },
    {
      cit_id: 288,
      cit_name: "Huyện An Dương",
      cit_parent: 2,
    },
    {
      cit_id: 289,
      cit_name: "Huyện An Lão",
      cit_parent: 2,
    },
    {
      cit_id: 290,
      cit_name: "Huyện Kiến Thuỵ",
      cit_parent: 2,
    },
    {
      cit_id: 291,
      cit_name: "Huyện Tiên Lãng",
      cit_parent: 2,
    },
    {
      cit_id: 292,
      cit_name: "Huyện Vĩnh Bảo",
      cit_parent: 2,
    },
    {
      cit_id: 293,
      cit_name: "Huyện Cát Hải",
      cit_parent: 2,
    },
    {
      cit_id: 294,
      cit_name: "Thành phố Hưng Yên",
      cit_parent: 12,
    },
    {
      cit_id: 295,
      cit_name: "Huyện Văn Lâm",
      cit_parent: 12,
    },
    {
      cit_id: 296,
      cit_name: "Huyện Văn Giang",
      cit_parent: 12,
    },
    {
      cit_id: 297,
      cit_name: "Huyện Yên Mỹ",
      cit_parent: 12,
    },
    {
      cit_id: 298,
      cit_name: "Thị xã Mỹ Hào",
      cit_parent: 12,
    },
    {
      cit_id: 299,
      cit_name: "Huyện Ân Thi",
      cit_parent: 12,
    },
    {
      cit_id: 300,
      cit_name: "Huyện Khoái Châu",
      cit_parent: 12,
    },
    {
      cit_id: 301,
      cit_name: "Huyện Kim Động",
      cit_parent: 12,
    },
    {
      cit_id: 302,
      cit_name: "Huyện Tiên Lữ",
      cit_parent: 12,
    },
    {
      cit_id: 303,
      cit_name: "Huyện Phù Cừ",
      cit_parent: 12,
    },
    {
      cit_id: 304,
      cit_name: "Thành phố Thái Bình",
      cit_parent: 21,
    },
    {
      cit_id: 305,
      cit_name: "Huyện Quỳnh Phụ",
      cit_parent: 21,
    },
    {
      cit_id: 306,
      cit_name: "Huyện Hưng Hà",
      cit_parent: 21,
    },
    {
      cit_id: 307,
      cit_name: "Huyện Đông Hưng",
      cit_parent: 21,
    },
    {
      cit_id: 308,
      cit_name: "Huyện Thái Thụy",
      cit_parent: 21,
    },
    {
      cit_id: 309,
      cit_name: "Huyện Tiền Hải",
      cit_parent: 21,
    },
    {
      cit_id: 310,
      cit_name: "Huyện Kiến Xương",
      cit_parent: 21,
    },
    {
      cit_id: 311,
      cit_name: "Huyện Vũ Thư",
      cit_parent: 21,
    },
    {
      cit_id: 312,
      cit_name: "Thành phố Phủ Lý",
      cit_parent: 11,
    },
    {
      cit_id: 313,
      cit_name: "Thị xã Duy Tiên",
      cit_parent: 11,
    },
    {
      cit_id: 314,
      cit_name: "Huyện Kim Bảng",
      cit_parent: 11,
    },
    {
      cit_id: 315,
      cit_name: "Huyện Thanh Liêm",
      cit_parent: 11,
    },
    {
      cit_id: 316,
      cit_name: "Huyện Bình Lục",
      cit_parent: 11,
    },
    {
      cit_id: 317,
      cit_name: "Huyện Lý Nhân",
      cit_parent: 11,
    },
    {
      cit_id: 318,
      cit_name: "Thành phố Nam Định",
      cit_parent: 17,
    },
    {
      cit_id: 319,
      cit_name: "Huyện Mỹ Lộc",
      cit_parent: 17,
    },
    {
      cit_id: 320,
      cit_name: "Huyện Vụ Bản",
      cit_parent: 17,
    },
    {
      cit_id: 321,
      cit_name: "Huyện Ý Yên",
      cit_parent: 17,
    },
    {
      cit_id: 322,
      cit_name: "Huyện Nghĩa Hưng",
      cit_parent: 17,
    },
    {
      cit_id: 323,
      cit_name: "Huyện Nam Trực",
      cit_parent: 17,
    },
    {
      cit_id: 324,
      cit_name: "Huyện Trực Ninh",
      cit_parent: 17,
    },
    {
      cit_id: 325,
      cit_name: "Huyện Xuân Trường",
      cit_parent: 17,
    },
    {
      cit_id: 326,
      cit_name: "Huyện Giao Thủy",
      cit_parent: 17,
    },
    {
      cit_id: 327,
      cit_name: "Huyện Hải Hậu",
      cit_parent: 17,
    },
    {
      cit_id: 328,
      cit_name: "Thành phố Ninh Bình",
      cit_parent: 16,
    },
    {
      cit_id: 329,
      cit_name: "Thành phố Tam Điệp",
      cit_parent: 16,
    },
    {
      cit_id: 330,
      cit_name: "Huyện Nho Quan",
      cit_parent: 16,
    },
    {
      cit_id: 331,
      cit_name: "Huyện Gia Viễn",
      cit_parent: 16,
    },
    {
      cit_id: 332,
      cit_name: "Huyện Hoa Lư",
      cit_parent: 16,
    },
    {
      cit_id: 333,
      cit_name: "Huyện Yên Khánh",
      cit_parent: 16,
    },
    {
      cit_id: 334,
      cit_name: "Huyện Kim Sơn",
      cit_parent: 16,
    },
    {
      cit_id: 335,
      cit_name: "Huyện Yên Mô",
      cit_parent: 16,
    },
    {
      cit_id: 336,
      cit_name: "Thành phố Thanh Hóa",
      cit_parent: 44,
    },
    {
      cit_id: 337,
      cit_name: "Thị xã Bỉm Sơn",
      cit_parent: 44,
    },
    {
      cit_id: 338,
      cit_name: "Thành phố Sầm Sơn",
      cit_parent: 44,
    },
    {
      cit_id: 339,
      cit_name: "Huyện Mường Lát",
      cit_parent: 44,
    },
    {
      cit_id: 340,
      cit_name: "Huyện Quan Hóa",
      cit_parent: 44,
    },
    {
      cit_id: 341,
      cit_name: "Huyện Bá Thước",
      cit_parent: 44,
    },
    {
      cit_id: 342,
      cit_name: "Huyện Quan Sơn",
      cit_parent: 44,
    },
    {
      cit_id: 343,
      cit_name: "Huyện Lang Chánh",
      cit_parent: 44,
    },
    {
      cit_id: 344,
      cit_name: "Huyện Ngọc Lặc",
      cit_parent: 44,
    },
    {
      cit_id: 345,
      cit_name: "Huyện Cẩm Thủy",
      cit_parent: 44,
    },
    {
      cit_id: 346,
      cit_name: "Huyện Thạch Thành",
      cit_parent: 44,
    },
    {
      cit_id: 347,
      cit_name: "Huyện Hà Trung",
      cit_parent: 44,
    },
    {
      cit_id: 348,
      cit_name: "Huyện Vĩnh Lộc",
      cit_parent: 44,
    },
    {
      cit_id: 349,
      cit_name: "Huyện Yên Định",
      cit_parent: 44,
    },
    {
      cit_id: 350,
      cit_name: "Huyện Thọ Xuân",
      cit_parent: 44,
    },
    {
      cit_id: 351,
      cit_name: "Huyện Thường Xuân",
      cit_parent: 44,
    },
    {
      cit_id: 352,
      cit_name: "Huyện Triệu Sơn",
      cit_parent: 44,
    },
    {
      cit_id: 353,
      cit_name: "Huyện Thiệu Hóa",
      cit_parent: 44,
    },
    {
      cit_id: 354,
      cit_name: "Huyện Hoằng Hóa",
      cit_parent: 44,
    },
    {
      cit_id: 355,
      cit_name: "Huyện Hậu Lộc",
      cit_parent: 44,
    },
    {
      cit_id: 356,
      cit_name: "Huyện Nga Sơn",
      cit_parent: 44,
    },
    {
      cit_id: 357,
      cit_name: "Huyện Như Xuân",
      cit_parent: 44,
    },
    {
      cit_id: 358,
      cit_name: "Huyện Như Thanh",
      cit_parent: 44,
    },
    {
      cit_id: 359,
      cit_name: "Huyện Nông Cống",
      cit_parent: 44,
    },
    {
      cit_id: 360,
      cit_name: "Huyện Đông Sơn",
      cit_parent: 44,
    },
    {
      cit_id: 361,
      cit_name: "Huyện Quảng Xương",
      cit_parent: 44,
    },
    {
      cit_id: 362,
      cit_name: "Huyện Tĩnh Gia",
      cit_parent: 44,
    },
    {
      cit_id: 363,
      cit_name: "Thành phố Vinh",
      cit_parent: 37,
    },
    {
      cit_id: 364,
      cit_name: "Thị xã Cửa Lò",
      cit_parent: 37,
    },
    {
      cit_id: 365,
      cit_name: "Thị xã Thái Hoà",
      cit_parent: 37,
    },
    {
      cit_id: 366,
      cit_name: "Huyện Quế Phong",
      cit_parent: 37,
    },
    {
      cit_id: 367,
      cit_name: "Huyện Quỳ Châu",
      cit_parent: 37,
    },
    {
      cit_id: 368,
      cit_name: "Huyện Tương Dương",
      cit_parent: 37,
    },
    {
      cit_id: 369,
      cit_name: "Huyện Nghĩa Đàn",
      cit_parent: 37,
    },
    {
      cit_id: 370,
      cit_name: "Huyện Quỳ Hợp",
      cit_parent: 37,
    },
    {
      cit_id: 371,
      cit_name: "Huyện Quỳnh Lưu",
      cit_parent: 37,
    },
    {
      cit_id: 372,
      cit_name: "Huyện Con Cuông",
      cit_parent: 37,
    },
    {
      cit_id: 373,
      cit_name: "Huyện Tân Kỳ",
      cit_parent: 37,
    },
    {
      cit_id: 374,
      cit_name: "Huyện Anh Sơn",
      cit_parent: 37,
    },
    {
      cit_id: 375,
      cit_name: "Huyện Diễn Châu",
      cit_parent: 37,
    },
    {
      cit_id: 376,
      cit_name: "Huyện Yên Thành",
      cit_parent: 37,
    },
    {
      cit_id: 377,
      cit_name: "Huyện Đô Lương",
      cit_parent: 37,
    },
    {
      cit_id: 378,
      cit_name: "Huyện Thanh Chương",
      cit_parent: 37,
    },
    {
      cit_id: 379,
      cit_name: "Huyện Nghi Lộc",
      cit_parent: 37,
    },
    {
      cit_id: 380,
      cit_name: "Huyện Nam Đàn",
      cit_parent: 37,
    },
    {
      cit_id: 381,
      cit_name: "Huyện Hưng Nguyên",
      cit_parent: 37,
    },
    {
      cit_id: 382,
      cit_name: "Thị xã Hoàng Mai",
      cit_parent: 37,
    },
    {
      cit_id: 383,
      cit_name: "Thành phố Hà Tĩnh",
      cit_parent: 35,
    },
    {
      cit_id: 384,
      cit_name: "Thị xã Hồng Lĩnh",
      cit_parent: 35,
    },
    {
      cit_id: 385,
      cit_name: "Huyện Hương Sơn",
      cit_parent: 35,
    },
    {
      cit_id: 386,
      cit_name: "Huyện Đức Thọ",
      cit_parent: 35,
    },
    {
      cit_id: 387,
      cit_name: "Huyện Vũ Quang",
      cit_parent: 35,
    },
    {
      cit_id: 388,
      cit_name: "Huyện Nghi Xuân",
      cit_parent: 35,
    },
    {
      cit_id: 389,
      cit_name: "Huyện Can Lộc",
      cit_parent: 35,
    },
    {
      cit_id: 390,
      cit_name: "Huyện Hương Khê",
      cit_parent: 35,
    },
    {
      cit_id: 391,
      cit_name: "Huyện Thạch Hà",
      cit_parent: 35,
    },
    {
      cit_id: 392,
      cit_name: "Huyện Cẩm Xuyên",
      cit_parent: 35,
    },
    {
      cit_id: 393,
      cit_name: "Huyện Kỳ Anh",
      cit_parent: 35,
    },
    {
      cit_id: 394,
      cit_name: "Huyện Lộc Hà",
      cit_parent: 35,
    },
    {
      cit_id: 395,
      cit_name: "Thị xã Kỳ Anh",
      cit_parent: 35,
    },
    {
      cit_id: 396,
      cit_name: "Thành Phố Đồng Hới",
      cit_parent: 40,
    },
    {
      cit_id: 397,
      cit_name: "Huyện Minh Hóa",
      cit_parent: 40,
    },
    {
      cit_id: 398,
      cit_name: "Huyện Tuyên Hóa",
      cit_parent: 40,
    },
    {
      cit_id: 399,
      cit_name: "Huyện Quảng Trạch",
      cit_parent: 40,
    },
    {
      cit_id: 400,
      cit_name: "Huyện Bố Trạch",
      cit_parent: 40,
    },
    {
      cit_id: 401,
      cit_name: "Huyện Quảng Ninh",
      cit_parent: 40,
    },
    {
      cit_id: 402,
      cit_name: "Huyện Lệ Thủy",
      cit_parent: 40,
    },
    {
      cit_id: 403,
      cit_name: "Thị xã Ba Đồn",
      cit_parent: 40,
    },
    {
      cit_id: 404,
      cit_name: "Thành phố Đông Hà",
      cit_parent: 43,
    },
    {
      cit_id: 405,
      cit_name: "Thị xã Quảng Trị",
      cit_parent: 43,
    },
    {
      cit_id: 406,
      cit_name: "Huyện Vĩnh Linh",
      cit_parent: 43,
    },
    {
      cit_id: 407,
      cit_name: "Huyện Hướng Hóa",
      cit_parent: 43,
    },
    {
      cit_id: 408,
      cit_name: "Huyện Gio Linh",
      cit_parent: 43,
    },
    {
      cit_id: 409,
      cit_name: "Huyện Đa Krông",
      cit_parent: 43,
    },
    {
      cit_id: 410,
      cit_name: "Huyện Cam Lộ",
      cit_parent: 43,
    },
    {
      cit_id: 411,
      cit_name: "Huyện Triệu Phong",
      cit_parent: 43,
    },
    {
      cit_id: 412,
      cit_name: "Huyện Hải Lăng",
      cit_parent: 43,
    },
    {
      cit_id: 413,
      cit_name: "Thành phố Huế",
      cit_parent: 27,
    },
    {
      cit_id: 414,
      cit_name: "Huyện Phong Điền",
      cit_parent: 27,
    },
    {
      cit_id: 415,
      cit_name: "Huyện Quảng Điền",
      cit_parent: 27,
    },
    {
      cit_id: 416,
      cit_name: "Huyện Phú Vang",
      cit_parent: 27,
    },
    {
      cit_id: 417,
      cit_name: "Thị xã Hương Thủy",
      cit_parent: 27,
    },
    {
      cit_id: 418,
      cit_name: "Thị xã Hương Trà",
      cit_parent: 27,
    },
    {
      cit_id: 419,
      cit_name: "Huyện A Lưới",
      cit_parent: 27,
    },
    {
      cit_id: 420,
      cit_name: "Huyện Phú Lộc",
      cit_parent: 27,
    },
    {
      cit_id: 421,
      cit_name: "Huyện Nam Đông",
      cit_parent: 27,
    },
    {
      cit_id: 422,
      cit_name: "Quận Liên Chiểu",
      cit_parent: 26,
    },
    {
      cit_id: 423,
      cit_name: "Quận Thanh Khê",
      cit_parent: 26,
    },
    {
      cit_id: 424,
      cit_name: "Quận Hải Châu",
      cit_parent: 26,
    },
    {
      cit_id: 425,
      cit_name: "Quận Sơn Trà",
      cit_parent: 26,
    },
    {
      cit_id: 426,
      cit_name: "Quận Ngũ Hành Sơn",
      cit_parent: 26,
    },
    {
      cit_id: 427,
      cit_name: "Quận Cẩm Lệ",
      cit_parent: 26,
    },
    {
      cit_id: 428,
      cit_name: "Huyện Hòa Vang",
      cit_parent: 26,
    },
    {
      cit_id: 429,
      cit_name: "Thành phố Tam Kỳ",
      cit_parent: 41,
    },
    {
      cit_id: 430,
      cit_name: "Thành phố Hội An",
      cit_parent: 41,
    },
    {
      cit_id: 431,
      cit_name: "Huyện Tây Giang",
      cit_parent: 41,
    },
    {
      cit_id: 432,
      cit_name: "Huyện Đông Giang",
      cit_parent: 41,
    },
    {
      cit_id: 433,
      cit_name: "Huyện Đại Lộc",
      cit_parent: 41,
    },
    {
      cit_id: 434,
      cit_name: "Thị xã Điện Bàn",
      cit_parent: 41,
    },
    {
      cit_id: 435,
      cit_name: "Huyện Duy Xuyên",
      cit_parent: 41,
    },
    {
      cit_id: 436,
      cit_name: "Huyện Quế Sơn",
      cit_parent: 41,
    },
    {
      cit_id: 437,
      cit_name: "Huyện Nam Giang",
      cit_parent: 41,
    },
    {
      cit_id: 438,
      cit_name: "Huyện Phước Sơn",
      cit_parent: 41,
    },
    {
      cit_id: 439,
      cit_name: "Huyện Hiệp Đức",
      cit_parent: 41,
    },
    {
      cit_id: 440,
      cit_name: "Huyện Thăng Bình",
      cit_parent: 41,
    },
    {
      cit_id: 441,
      cit_name: "Huyện Tiên Phước",
      cit_parent: 41,
    },
    {
      cit_id: 442,
      cit_name: "Huyện Bắc Trà My",
      cit_parent: 41,
    },
    {
      cit_id: 443,
      cit_name: "Huyện Nam Trà My",
      cit_parent: 41,
    },
    {
      cit_id: 444,
      cit_name: "Huyện Núi Thành",
      cit_parent: 41,
    },
    {
      cit_id: 445,
      cit_name: "Huyện Phú Ninh",
      cit_parent: 41,
    },
    {
      cit_id: 446,
      cit_name: "Huyện Nông Sơn",
      cit_parent: 41,
    },
    {
      cit_id: 447,
      cit_name: "Thành phố Quảng Ngãi",
      cit_parent: 42,
    },
    {
      cit_id: 448,
      cit_name: "Huyện Bình Sơn",
      cit_parent: 42,
    },
    {
      cit_id: 449,
      cit_name: "Huyện Trà Bồng",
      cit_parent: 42,
    },
    {
      cit_id: 450,
      cit_name: "Huyện Tây Trà",
      cit_parent: 42,
    },
    {
      cit_id: 451,
      cit_name: "Huyện Sơn Tịnh",
      cit_parent: 42,
    },
    {
      cit_id: 452,
      cit_name: "Huyện Tư Nghĩa",
      cit_parent: 42,
    },
    {
      cit_id: 453,
      cit_name: "Huyện Sơn Hà",
      cit_parent: 42,
    },
    {
      cit_id: 454,
      cit_name: "Huyện Sơn Tây",
      cit_parent: 42,
    },
    {
      cit_id: 455,
      cit_name: "Huyện Minh Long",
      cit_parent: 42,
    },
    {
      cit_id: 456,
      cit_name: "Huyện Nghĩa Hành",
      cit_parent: 42,
    },
    {
      cit_id: 457,
      cit_name: "Huyện Mộ Đức",
      cit_parent: 42,
    },
    {
      cit_id: 458,
      cit_name: "Thị xã Đức Phổ",
      cit_parent: 42,
    },
    {
      cit_id: 459,
      cit_name: "Huyện Ba Tơ",
      cit_parent: 42,
    },
    {
      cit_id: 460,
      cit_name: "Huyện Lý Sơn",
      cit_parent: 42,
    },
    {
      cit_id: 461,
      cit_name: "Thành phố Quy Nhơn",
      cit_parent: 30,
    },
    {
      cit_id: 462,
      cit_name: "Huyện Hoài Nhơn",
      cit_parent: 30,
    },
    {
      cit_id: 463,
      cit_name: "Huyện Hoài Ân",
      cit_parent: 30,
    },
    {
      cit_id: 464,
      cit_name: "Huyện Phù Mỹ",
      cit_parent: 30,
    },
    {
      cit_id: 465,
      cit_name: "Huyện Vĩnh Thạnh",
      cit_parent: 30,
    },
    {
      cit_id: 466,
      cit_name: "Huyện Tây Sơn",
      cit_parent: 30,
    },
    {
      cit_id: 467,
      cit_name: "Huyện Phù Cát",
      cit_parent: 30,
    },
    {
      cit_id: 468,
      cit_name: "Thị xã An Nhơn",
      cit_parent: 30,
    },
    {
      cit_id: 469,
      cit_name: "Huyện Tuy Phước",
      cit_parent: 30,
    },
    {
      cit_id: 470,
      cit_name: "Huyện Vân Canh",
      cit_parent: 30,
    },
    {
      cit_id: 471,
      cit_name: "Thành phố Tuy Hoà",
      cit_parent: 39,
    },
    {
      cit_id: 472,
      cit_name: "Thị xã Sông Cầu",
      cit_parent: 39,
    },
    {
      cit_id: 473,
      cit_name: "Huyện Đồng Xuân",
      cit_parent: 39,
    },
    {
      cit_id: 474,
      cit_name: "Huyện Tuy An",
      cit_parent: 39,
    },
    {
      cit_id: 475,
      cit_name: "Huyện Sơn Hòa",
      cit_parent: 39,
    },
    {
      cit_id: 476,
      cit_name: "Huyện Sông Hinh",
      cit_parent: 39,
    },
    {
      cit_id: 477,
      cit_name: "Huyện Tây Hoà",
      cit_parent: 39,
    },
    {
      cit_id: 478,
      cit_name: "Huyện Phú Hoà",
      cit_parent: 39,
    },
    {
      cit_id: 479,
      cit_name: "Huyện Đông Hòa",
      cit_parent: 39,
    },
    {
      cit_id: 480,
      cit_name: "Thành phố Nha Trang",
      cit_parent: 28,
    },
    {
      cit_id: 481,
      cit_name: "Thành phố Cam Ranh",
      cit_parent: 28,
    },
    {
      cit_id: 482,
      cit_name: "Huyện Cam Lâm",
      cit_parent: 28,
    },
    {
      cit_id: 483,
      cit_name: "Huyện Vạn Ninh",
      cit_parent: 28,
    },
    {
      cit_id: 484,
      cit_name: "Thị xã Ninh Hòa",
      cit_parent: 28,
    },
    {
      cit_id: 485,
      cit_name: "Huyện Khánh Vĩnh",
      cit_parent: 28,
    },
    {
      cit_id: 486,
      cit_name: "Huyện Diên Khánh",
      cit_parent: 28,
    },
    {
      cit_id: 487,
      cit_name: "Huyện Khánh Sơn",
      cit_parent: 28,
    },
    {
      cit_id: 488,
      cit_name: "Huyện Trường Sa",
      cit_parent: 28,
    },
    {
      cit_id: 489,
      cit_name: "Thành phố Phan Rang-Tháp Chàm",
      cit_parent: 38,
    },
    {
      cit_id: 490,
      cit_name: "Huyện Bác Ái",
      cit_parent: 38,
    },
    {
      cit_id: 491,
      cit_name: "Huyện Ninh Sơn",
      cit_parent: 38,
    },
    {
      cit_id: 492,
      cit_name: "Huyện Ninh Hải",
      cit_parent: 38,
    },
    {
      cit_id: 493,
      cit_name: "Huyện Ninh Phước",
      cit_parent: 38,
    },
    {
      cit_id: 494,
      cit_name: "Huyện Thuận Bắc",
      cit_parent: 38,
    },
    {
      cit_id: 495,
      cit_name: "Huyện Thuận Nam",
      cit_parent: 38,
    },
    {
      cit_id: 496,
      cit_name: "Thành phố Phan Thiết",
      cit_parent: 31,
    },
    {
      cit_id: 497,
      cit_name: "Thị xã La Gi",
      cit_parent: 31,
    },
    {
      cit_id: 498,
      cit_name: "Huyện Tuy Phong",
      cit_parent: 31,
    },
    {
      cit_id: 499,
      cit_name: "Huyện Bắc Bình",
      cit_parent: 31,
    },
    {
      cit_id: 500,
      cit_name: "Huyện Hàm Thuận Bắc",
      cit_parent: 31,
    },
    {
      cit_id: 501,
      cit_name: "Huyện Hàm Thuận Nam",
      cit_parent: 31,
    },
    {
      cit_id: 502,
      cit_name: "Huyện Tánh Linh",
      cit_parent: 31,
    },
    {
      cit_id: 503,
      cit_name: "Huyện Đức Linh",
      cit_parent: 31,
    },
    {
      cit_id: 504,
      cit_name: "Huyện Hàm Tân",
      cit_parent: 31,
    },
    {
      cit_id: 505,
      cit_name: "Huyện Phú Quí",
      cit_parent: 31,
    },
    {
      cit_id: 506,
      cit_name: "Thành phố Kon Tum",
      cit_parent: 36,
    },
    {
      cit_id: 507,
      cit_name: "Huyện Đắk Glei",
      cit_parent: 36,
    },
    {
      cit_id: 508,
      cit_name: "Huyện Ngọc Hồi",
      cit_parent: 36,
    },
    {
      cit_id: 509,
      cit_name: "Huyện Đắk Tô",
      cit_parent: 36,
    },
    {
      cit_id: 510,
      cit_name: "Huyện Kon Plông",
      cit_parent: 36,
    },
    {
      cit_id: 511,
      cit_name: "Huyện Kon Rẫy",
      cit_parent: 36,
    },
    {
      cit_id: 512,
      cit_name: "Huyện Đắk Hà",
      cit_parent: 36,
    },
    {
      cit_id: 513,
      cit_name: "Huyện Sa Thầy",
      cit_parent: 36,
    },
    {
      cit_id: 514,
      cit_name: "Huyện Tu Mơ Rông",
      cit_parent: 36,
    },
    {
      cit_id: 515,
      cit_name: "Huyện Ia H' Drai",
      cit_parent: 36,
    },
    {
      cit_id: 516,
      cit_name: "Thành phố Pleiku",
      cit_parent: 34,
    },
    {
      cit_id: 517,
      cit_name: "Thị xã An Khê",
      cit_parent: 34,
    },
    {
      cit_id: 518,
      cit_name: "Thị xã Ayun Pa",
      cit_parent: 34,
    },
    {
      cit_id: 519,
      cit_name: "Huyện KBang",
      cit_parent: 34,
    },
    {
      cit_id: 520,
      cit_name: "Huyện Đăk Đoa",
      cit_parent: 34,
    },
    {
      cit_id: 521,
      cit_name: "Huyện Chư Păh",
      cit_parent: 34,
    },
    {
      cit_id: 522,
      cit_name: "Huyện Ia Grai",
      cit_parent: 34,
    },
    {
      cit_id: 523,
      cit_name: "Huyện Mang Yang",
      cit_parent: 34,
    },
    {
      cit_id: 524,
      cit_name: "Huyện Kông Chro",
      cit_parent: 34,
    },
    {
      cit_id: 525,
      cit_name: "Huyện Đức Cơ",
      cit_parent: 34,
    },
    {
      cit_id: 526,
      cit_name: "Huyện Chư Prông",
      cit_parent: 34,
    },
    {
      cit_id: 527,
      cit_name: "Huyện Chư Sê",
      cit_parent: 34,
    },
    {
      cit_id: 528,
      cit_name: "Huyện Đăk Pơ",
      cit_parent: 34,
    },
    {
      cit_id: 529,
      cit_name: "Huyện Ia Pa",
      cit_parent: 34,
    },
    {
      cit_id: 530,
      cit_name: "Huyện Krông Pa",
      cit_parent: 34,
    },
    {
      cit_id: 531,
      cit_name: "Huyện Phú Thiện",
      cit_parent: 34,
    },
    {
      cit_id: 532,
      cit_name: "Huyện Chư Pưh",
      cit_parent: 34,
    },
    {
      cit_id: 533,
      cit_name: "Thành phố Buôn Ma Thuột",
      cit_parent: 32,
    },
    {
      cit_id: 534,
      cit_name: "Thị Xã Buôn Hồ",
      cit_parent: 32,
    },
    {
      cit_id: 535,
      cit_name: "Huyện Ea H'leo",
      cit_parent: 32,
    },
    {
      cit_id: 536,
      cit_name: "Huyện Ea Súp",
      cit_parent: 32,
    },
    {
      cit_id: 537,
      cit_name: "Huyện Buôn Đôn",
      cit_parent: 32,
    },
    {
      cit_id: 538,
      cit_name: "Huyện Cư M'gar",
      cit_parent: 32,
    },
    {
      cit_id: 539,
      cit_name: "Huyện Krông Búk",
      cit_parent: 32,
    },
    {
      cit_id: 679,
      cit_name: "Thành phố Vĩnh Long",
      cit_parent: 63,
    },
    {
      cit_id: 541,
      cit_name: "Huyện Krông Năng",
      cit_parent: 32,
    },
    {
      cit_id: 542,
      cit_name: "Huyện Ea Kar",
      cit_parent: 32,
    },
    {
      cit_id: 543,
      cit_name: "Huyện M'Đrắk",
      cit_parent: 32,
    },
    {
      cit_id: 544,
      cit_name: "Huyện Krông Bông",
      cit_parent: 32,
    },
    {
      cit_id: 545,
      cit_name: "Huyện Krông Pắc",
      cit_parent: 32,
    },
    {
      cit_id: 546,
      cit_name: "Huyện Krông A Na",
      cit_parent: 32,
    },
    {
      cit_id: 547,
      cit_name: "Huyện Lắk",
      cit_parent: 32,
    },
    {
      cit_id: 548,
      cit_name: "Huyện Cư Kuin",
      cit_parent: 32,
    },
    {
      cit_id: 549,
      cit_name: "Thị xã Gia Nghĩa",
      cit_parent: 33,
    },
    {
      cit_id: 550,
      cit_name: "Huyện Đăk Glong",
      cit_parent: 33,
    },
    {
      cit_id: 551,
      cit_name: "Huyện Cư Jút",
      cit_parent: 33,
    },
    {
      cit_id: 552,
      cit_name: "Huyện Đắk Mil",
      cit_parent: 33,
    },
    {
      cit_id: 553,
      cit_name: "Huyện Krông Nô",
      cit_parent: 33,
    },
    {
      cit_id: 554,
      cit_name: "Huyện Đắk Song",
      cit_parent: 33,
    },
    {
      cit_id: 555,
      cit_name: "Huyện Đắk R'Lấp",
      cit_parent: 33,
    },
    {
      cit_id: 556,
      cit_name: "Huyện Tuy Đức",
      cit_parent: 33,
    },
    {
      cit_id: 557,
      cit_name: "Thành phố Đà Lạt",
      cit_parent: 29,
    },
    {
      cit_id: 558,
      cit_name: "Thành phố Bảo Lộc",
      cit_parent: 29,
    },
    {
      cit_id: 559,
      cit_name: "Huyện Đam Rông",
      cit_parent: 29,
    },
    {
      cit_id: 560,
      cit_name: "Huyện Lạc Dương",
      cit_parent: 29,
    },
    {
      cit_id: 561,
      cit_name: "Huyện Lâm Hà",
      cit_parent: 29,
    },
    {
      cit_id: 562,
      cit_name: "Huyện Đơn Dương",
      cit_parent: 29,
    },
    {
      cit_id: 563,
      cit_name: "Huyện Đức Trọng",
      cit_parent: 29,
    },
    {
      cit_id: 564,
      cit_name: "Huyện Di Linh",
      cit_parent: 29,
    },
    {
      cit_id: 565,
      cit_name: "Huyện Đạ Huoai",
      cit_parent: 29,
    },
    {
      cit_id: 566,
      cit_name: "Huyện Đạ Tẻh",
      cit_parent: 29,
    },
    {
      cit_id: 567,
      cit_name: "Huyện Cát Tiên",
      cit_parent: 29,
    },
    {
      cit_id: 568,
      cit_name: "Thị xã Phước Long",
      cit_parent: 51,
    },
    {
      cit_id: 569,
      cit_name: "Thị xã Đồng Xoài",
      cit_parent: 51,
    },
    {
      cit_id: 570,
      cit_name: "Thị xã Bình Long",
      cit_parent: 51,
    },
    {
      cit_id: 571,
      cit_name: "Huyện Bù Gia Mập",
      cit_parent: 51,
    },
    {
      cit_id: 572,
      cit_name: "Huyện Lộc Ninh",
      cit_parent: 51,
    },
    {
      cit_id: 573,
      cit_name: "Huyện Bù Đốp",
      cit_parent: 51,
    },
    {
      cit_id: 574,
      cit_name: "Huyện Hớn Quản",
      cit_parent: 51,
    },
    {
      cit_id: 575,
      cit_name: "Huyện Đồng Phú",
      cit_parent: 51,
    },
    {
      cit_id: 576,
      cit_name: "Huyện Bù Đăng",
      cit_parent: 51,
    },
    {
      cit_id: 577,
      cit_name: "Huyện Chơn Thành",
      cit_parent: 51,
    },
    {
      cit_id: 578,
      cit_name: "Huyện Phú Riềng",
      cit_parent: 51,
    },
    {
      cit_id: 579,
      cit_name: "Thành phố Tây Ninh",
      cit_parent: 61,
    },
    {
      cit_id: 580,
      cit_name: "Huyện Tân Biên",
      cit_parent: 61,
    },
    {
      cit_id: 581,
      cit_name: "Huyện Tân Châu",
      cit_parent: 61,
    },
    {
      cit_id: 582,
      cit_name: "Huyện Dương Minh Châu",
      cit_parent: 61,
    },
    {
      cit_id: 583,
      cit_name: "Huyện Châu Thành",
      cit_parent: 61,
    },
    {
      cit_id: 584,
      cit_name: "Thị xã Hòa Thành",
      cit_parent: 61,
    },
    {
      cit_id: 585,
      cit_name: "Huyện Gò Dầu",
      cit_parent: 61,
    },
    {
      cit_id: 586,
      cit_name: "Huyện Bến Cầu",
      cit_parent: 61,
    },
    {
      cit_id: 587,
      cit_name: "Thị xã Trảng Bàng",
      cit_parent: 61,
    },
    {
      cit_id: 588,
      cit_name: "Thành phố Thủ Dầu Một",
      cit_parent: 46,
    },
    {
      cit_id: 589,
      cit_name: "Huyện Bàu Bàng",
      cit_parent: 46,
    },
    {
      cit_id: 590,
      cit_name: "Huyện Dầu Tiếng",
      cit_parent: 46,
    },
    {
      cit_id: 591,
      cit_name: "Thị xã Bến Cát",
      cit_parent: 46,
    },
    {
      cit_id: 592,
      cit_name: "Huyện Phú Giáo",
      cit_parent: 46,
    },
    {
      cit_id: 593,
      cit_name: "Thị xã Tân Uyên",
      cit_parent: 46,
    },
    {
      cit_id: 594,
      cit_name: "Thành phố Dĩ An",
      cit_parent: 46,
    },
    {
      cit_id: 595,
      cit_name: "Thành phố Thuận An",
      cit_parent: 46,
    },
    {
      cit_id: 596,
      cit_name: "Huyện Bắc Tân Uyên",
      cit_parent: 46,
    },
    {
      cit_id: 597,
      cit_name: "Thành phố Biên Hòa",
      cit_parent: 55,
    },
    {
      cit_id: 598,
      cit_name: "Thành phố Long Khánh",
      cit_parent: 55,
    },
    {
      cit_id: 599,
      cit_name: "Huyện Tân Phú",
      cit_parent: 55,
    },
    {
      cit_id: 600,
      cit_name: "Huyện Vĩnh Cửu",
      cit_parent: 55,
    },
    {
      cit_id: 601,
      cit_name: "Huyện Định Quán",
      cit_parent: 55,
    },
    {
      cit_id: 602,
      cit_name: "Huyện Trảng Bom",
      cit_parent: 55,
    },
    {
      cit_id: 603,
      cit_name: "Huyện Thống Nhất",
      cit_parent: 55,
    },
    {
      cit_id: 604,
      cit_name: "Huyện Cẩm Mỹ",
      cit_parent: 55,
    },
    {
      cit_id: 605,
      cit_name: "Huyện Long Thành",
      cit_parent: 55,
    },
    {
      cit_id: 606,
      cit_name: "Huyện Xuân Lộc",
      cit_parent: 55,
    },
    {
      cit_id: 607,
      cit_name: "Huyện Nhơn Trạch",
      cit_parent: 55,
    },
    {
      cit_id: 608,
      cit_name: "Thành phố Vũng Tàu",
      cit_parent: 47,
    },
    {
      cit_id: 609,
      cit_name: "Thành phố Bà Rịa",
      cit_parent: 47,
    },
    {
      cit_id: 610,
      cit_name: "Huyện Châu Đức",
      cit_parent: 47,
    },
    {
      cit_id: 611,
      cit_name: "Huyện Xuyên Mộc",
      cit_parent: 47,
    },
    {
      cit_id: 612,
      cit_name: "Huyện Long Điền",
      cit_parent: 47,
    },
    {
      cit_id: 613,
      cit_name: "Huyện Đất Đỏ",
      cit_parent: 47,
    },
    {
      cit_id: 614,
      cit_name: "Huyện Tân Thành",
      cit_parent: 47,
    },
    {
      cit_id: 615,
      cit_name: "Quận 1",
      cit_parent: 45,
    },
    {
      cit_id: 616,
      cit_name: "Quận 12",
      cit_parent: 45,
    },
    {
      cit_id: 617,
      cit_name: "Quận Thủ Đức",
      cit_parent: 45,
    },
    {
      cit_id: 618,
      cit_name: "Quận 9",
      cit_parent: 45,
    },
    {
      cit_id: 619,
      cit_name: "Quận Gò Vấp",
      cit_parent: 45,
    },
    {
      cit_id: 620,
      cit_name: "Quận Bình Thạnh",
      cit_parent: 45,
    },
    {
      cit_id: 621,
      cit_name: "Quận Tân Bình",
      cit_parent: 45,
    },
    {
      cit_id: 622,
      cit_name: "Quận Tân Phú",
      cit_parent: 45,
    },
    {
      cit_id: 623,
      cit_name: "Quận Phú Nhuận",
      cit_parent: 45,
    },
    {
      cit_id: 624,
      cit_name: "Quận 2",
      cit_parent: 45,
    },
    {
      cit_id: 625,
      cit_name: "Quận 3",
      cit_parent: 45,
    },
    {
      cit_id: 626,
      cit_name: "Quận 10",
      cit_parent: 45,
    },
    {
      cit_id: 627,
      cit_name: "Quận 11",
      cit_parent: 45,
    },
    {
      cit_id: 628,
      cit_name: "Quận 4",
      cit_parent: 45,
    },
    {
      cit_id: 629,
      cit_name: "Quận 5",
      cit_parent: 45,
    },
    {
      cit_id: 630,
      cit_name: "Quận 6",
      cit_parent: 45,
    },
    {
      cit_id: 631,
      cit_name: "Quận 8",
      cit_parent: 45,
    },
    {
      cit_id: 632,
      cit_name: "Quận Bình Tân",
      cit_parent: 45,
    },
    {
      cit_id: 633,
      cit_name: "Quận 7",
      cit_parent: 45,
    },
    {
      cit_id: 634,
      cit_name: "Huyện Củ Chi",
      cit_parent: 45,
    },
    {
      cit_id: 635,
      cit_name: "Huyện Hóc Môn",
      cit_parent: 45,
    },
    {
      cit_id: 636,
      cit_name: "Huyện Bình Chánh",
      cit_parent: 45,
    },
    {
      cit_id: 637,
      cit_name: "Huyện Nhà Bè",
      cit_parent: 45,
    },
    {
      cit_id: 638,
      cit_name: "Huyện Cần Giờ",
      cit_parent: 45,
    },
    {
      cit_id: 639,
      cit_name: "Thành phố Tân An",
      cit_parent: 58,
    },
    {
      cit_id: 640,
      cit_name: "Thị xã Kiến Tường",
      cit_parent: 58,
    },
    {
      cit_id: 641,
      cit_name: "Huyện Tân Hưng",
      cit_parent: 58,
    },
    {
      cit_id: 774,
      cit_name: "Huyện Châu Thành",
      cit_parent: 62,
    },
    {
      cit_id: 643,
      cit_name: "Huyện Mộc Hóa",
      cit_parent: 58,
    },
    {
      cit_id: 644,
      cit_name: "Huyện Tân Thạnh",
      cit_parent: 58,
    },
    {
      cit_id: 645,
      cit_name: "Huyện Thạnh Hóa",
      cit_parent: 58,
    },
    {
      cit_id: 646,
      cit_name: "Huyện Đức Huệ",
      cit_parent: 58,
    },
    {
      cit_id: 647,
      cit_name: "Huyện Đức Hòa",
      cit_parent: 58,
    },
    {
      cit_id: 648,
      cit_name: "Huyện Bến Lức",
      cit_parent: 58,
    },
    {
      cit_id: 649,
      cit_name: "Huyện Thủ Thừa",
      cit_parent: 58,
    },
    {
      cit_id: 650,
      cit_name: "Huyện Tân Trụ",
      cit_parent: 58,
    },
    {
      cit_id: 651,
      cit_name: "Huyện Cần Đước",
      cit_parent: 58,
    },
    {
      cit_id: 652,
      cit_name: "Huyện Cần Giuộc",
      cit_parent: 58,
    },
    {
      cit_id: 653,
      cit_name: "Thành phố Mỹ Tho",
      cit_parent: 60,
    },
    {
      cit_id: 654,
      cit_name: "Thị xã Gò Công",
      cit_parent: 60,
    },
    {
      cit_id: 655,
      cit_name: "Thị xã Cai Lậy",
      cit_parent: 60,
    },
    {
      cit_id: 656,
      cit_name: "Huyện Tân Phước",
      cit_parent: 60,
    },
    {
      cit_id: 657,
      cit_name: "Huyện Cái Bè",
      cit_parent: 60,
    },
    {
      cit_id: 658,
      cit_name: "Huyện Cai Lậy",
      cit_parent: 60,
    },
    {
      cit_id: 772,
      cit_name: "Huyện Châu Thành",
      cit_parent: 52,
    },
    {
      cit_id: 660,
      cit_name: "Huyện Gò Công Tây",
      cit_parent: 60,
    },
    {
      cit_id: 661,
      cit_name: "Huyện Gò Công Đông",
      cit_parent: 60,
    },
    {
      cit_id: 662,
      cit_name: "Huyện Tân Phú Đông",
      cit_parent: 60,
    },
    {
      cit_id: 663,
      cit_name: "Thành phố Bến Tre",
      cit_parent: 52,
    },
    {
      cit_id: 664,
      cit_name: "Huyện Chợ Lách",
      cit_parent: 52,
    },
    {
      cit_id: 665,
      cit_name: "Huyện Mỏ Cày Nam",
      cit_parent: 52,
    },
    {
      cit_id: 666,
      cit_name: "Huyện Giồng Trôm",
      cit_parent: 52,
    },
    {
      cit_id: 667,
      cit_name: "Huyện Bình Đại",
      cit_parent: 52,
    },
    {
      cit_id: 668,
      cit_name: "Huyện Ba Tri",
      cit_parent: 52,
    },
    {
      cit_id: 669,
      cit_name: "Huyện Thạnh Phú",
      cit_parent: 52,
    },
    {
      cit_id: 670,
      cit_name: "Huyện Mỏ Cày Bắc",
      cit_parent: 52,
    },
    {
      cit_id: 671,
      cit_name: "Thành phố Trà Vinh",
      cit_parent: 62,
    },
    {
      cit_id: 672,
      cit_name: "Huyện Càng Long",
      cit_parent: 62,
    },
    {
      cit_id: 673,
      cit_name: "Huyện Cầu Kè",
      cit_parent: 62,
    },
    {
      cit_id: 674,
      cit_name: "Huyện Tiểu Cần",
      cit_parent: 62,
    },
    {
      cit_id: 675,
      cit_name: "Huyện Cầu Ngang",
      cit_parent: 62,
    },
    {
      cit_id: 676,
      cit_name: "Huyện Trà Cú",
      cit_parent: 62,
    },
    {
      cit_id: 677,
      cit_name: "Huyện Duyên Hải",
      cit_parent: 62,
    },
    {
      cit_id: 678,
      cit_name: "Thị xã Duyên Hải",
      cit_parent: 62,
    },
    {
      cit_id: 680,
      cit_name: "Huyện Long Hồ",
      cit_parent: 63,
    },
    {
      cit_id: 681,
      cit_name: "Huyện Mang Thít",
      cit_parent: 63,
    },
    {
      cit_id: 682,
      cit_name: "Huyện  Vũng Liêm",
      cit_parent: 63,
    },
    {
      cit_id: 683,
      cit_name: "Huyện Tam Bình",
      cit_parent: 63,
    },
    {
      cit_id: 684,
      cit_name: "Thị xã Bình Minh",
      cit_parent: 63,
    },
    {
      cit_id: 685,
      cit_name: "Huyện Trà Ôn",
      cit_parent: 63,
    },
    {
      cit_id: 686,
      cit_name: "Huyện Bình Tân",
      cit_parent: 63,
    },
    {
      cit_id: 687,
      cit_name: "Thành phố Cao Lãnh",
      cit_parent: 54,
    },
    {
      cit_id: 688,
      cit_name: "Thành phố Sa Đéc",
      cit_parent: 54,
    },
    {
      cit_id: 689,
      cit_name: "Huyện Hồng Ngự",
      cit_parent: 54,
    },
    {
      cit_id: 690,
      cit_name: "Huyện Tân Hồng",
      cit_parent: 54,
    },
    {
      cit_id: 691,
      cit_name: "Thành phố Hồng Ngự",
      cit_parent: 54,
    },
    {
      cit_id: 692,
      cit_name: "Huyện Tháp Mười",
      cit_parent: 54,
    },
    {
      cit_id: 693,
      cit_name: "Huyện Cao Lãnh",
      cit_parent: 54,
    },
    {
      cit_id: 694,
      cit_name: "Huyện Thanh Bình",
      cit_parent: 54,
    },
    {
      cit_id: 695,
      cit_name: "Huyện Lấp Vò",
      cit_parent: 54,
    },
    {
      cit_id: 696,
      cit_name: "Huyện Lai Vung",
      cit_parent: 54,
    },
    {
      cit_id: 697,
      cit_name: "Thành phố Long Xuyên",
      cit_parent: 49,
    },
    {
      cit_id: 698,
      cit_name: "Thành phố Châu Đốc",
      cit_parent: 49,
    },
    {
      cit_id: 699,
      cit_name: "Huyện An Phú",
      cit_parent: 49,
    },
    {
      cit_id: 700,
      cit_name: "Thị xã Tân Châu",
      cit_parent: 49,
    },
    {
      cit_id: 701,
      cit_name: "Huyện Phú Tân",
      cit_parent: 49,
    },
    {
      cit_id: 702,
      cit_name: "Huyện Châu Phú",
      cit_parent: 49,
    },
    {
      cit_id: 703,
      cit_name: "Huyện Tịnh Biên",
      cit_parent: 49,
    },
    {
      cit_id: 704,
      cit_name: "Huyện Tri Tôn",
      cit_parent: 49,
    },
    {
      cit_id: 705,
      cit_name: "Huyện Thoại Sơn",
      cit_parent: 49,
    },
    {
      cit_id: 706,
      cit_name: "Thành phố Rạch Giá",
      cit_parent: 57,
    },
    {
      cit_id: 707,
      cit_name: "Thành phố Hà Tiên",
      cit_parent: 57,
    },
    {
      cit_id: 708,
      cit_name: "Huyện Kiên Lương",
      cit_parent: 57,
    },
    {
      cit_id: 709,
      cit_name: "Huyện Hòn Đất",
      cit_parent: 57,
    },
    {
      cit_id: 717,
      cit_name: "Huyện Phú Quốc",
      cit_parent: 57,
    },
    {
      cit_id: 711,
      cit_name: "Huyện Tân Hiệp",
      cit_parent: 57,
    },
    {
      cit_id: 712,
      cit_name: "Huyện Giồng Riềng",
      cit_parent: 57,
    },
    {
      cit_id: 713,
      cit_name: "Huyện Gò Quao",
      cit_parent: 57,
    },
    {
      cit_id: 714,
      cit_name: "Huyện An Biên",
      cit_parent: 57,
    },
    {
      cit_id: 715,
      cit_name: "Huyện An Minh",
      cit_parent: 57,
    },
    {
      cit_id: 716,
      cit_name: "Huyện Vĩnh Thuận",
      cit_parent: 57,
    },
    {
      cit_id: 718,
      cit_name: "Huyện Kiên Hải",
      cit_parent: 57,
    },
    {
      cit_id: 719,
      cit_name: "Huyện U Minh Thượng",
      cit_parent: 57,
    },
    {
      cit_id: 720,
      cit_name: "Huyện Giang Thành",
      cit_parent: 57,
    },
    {
      cit_id: 721,
      cit_name: "Quận Ninh Kiều",
      cit_parent: 48,
    },
    {
      cit_id: 722,
      cit_name: "Quận Ô Môn",
      cit_parent: 48,
    },
    {
      cit_id: 723,
      cit_name: "Quận Bình Thuỷ",
      cit_parent: 48,
    },
    {
      cit_id: 724,
      cit_name: "Quận Cái Răng",
      cit_parent: 48,
    },
    {
      cit_id: 725,
      cit_name: "Quận Thốt Nốt",
      cit_parent: 48,
    },
    {
      cit_id: 726,
      cit_name: "Huyện Cờ Đỏ",
      cit_parent: 48,
    },
    {
      cit_id: 727,
      cit_name: "Huyện Thới Lai",
      cit_parent: 48,
    },
    {
      cit_id: 728,
      cit_name: "Thành phố Vị Thanh",
      cit_parent: 56,
    },
    {
      cit_id: 729,
      cit_name: "Thành phố Ngã Bảy",
      cit_parent: 56,
    },
    {
      cit_id: 730,
      cit_name: "Huyện Châu Thành A",
      cit_parent: 56,
    },
    {
      cit_id: 731,
      cit_name: "Huyện Phụng Hiệp",
      cit_parent: 56,
    },
    {
      cit_id: 732,
      cit_name: "Huyện Vị Thuỷ",
      cit_parent: 56,
    },
    {
      cit_id: 733,
      cit_name: "Huyện Long Mỹ",
      cit_parent: 56,
    },
    {
      cit_id: 734,
      cit_name: "Thị xã Long Mỹ",
      cit_parent: 56,
    },
    {
      cit_id: 735,
      cit_name: "Thành phố Sóc Trăng",
      cit_parent: 59,
    },
    {
      cit_id: 736,
      cit_name: "Huyện Kế Sách",
      cit_parent: 59,
    },
    {
      cit_id: 737,
      cit_name: "Huyện Mỹ Tú",
      cit_parent: 59,
    },
    {
      cit_id: 738,
      cit_name: "Huyện Cù Lao Dung",
      cit_parent: 59,
    },
    {
      cit_id: 739,
      cit_name: "Huyện Long Phú",
      cit_parent: 59,
    },
    {
      cit_id: 740,
      cit_name: "Huyện Mỹ Xuyên",
      cit_parent: 59,
    },
    {
      cit_id: 741,
      cit_name: "Thị xã Ngã Năm",
      cit_parent: 59,
    },
    {
      cit_id: 742,
      cit_name: "Huyện Thạnh Trị",
      cit_parent: 59,
    },
    {
      cit_id: 743,
      cit_name: "Thị xã Vĩnh Châu",
      cit_parent: 59,
    },
    {
      cit_id: 744,
      cit_name: "Huyện Trần Đề",
      cit_parent: 59,
    },
    {
      cit_id: 745,
      cit_name: "Thành phố Bạc Liêu",
      cit_parent: 50,
    },
    {
      cit_id: 746,
      cit_name: "Huyện Hồng Dân",
      cit_parent: 50,
    },
    {
      cit_id: 747,
      cit_name: "Huyện Phước Long",
      cit_parent: 50,
    },
    {
      cit_id: 748,
      cit_name: "Huyện Vĩnh Lợi",
      cit_parent: 50,
    },
    {
      cit_id: 749,
      cit_name: "Thị xã Giá Rai",
      cit_parent: 50,
    },
    {
      cit_id: 750,
      cit_name: "Huyện Đông Hải",
      cit_parent: 50,
    },
    {
      cit_id: 751,
      cit_name: "Huyện Hoà Bình",
      cit_parent: 50,
    },
    {
      cit_id: 752,
      cit_name: "Thành phố Cà Mau",
      cit_parent: 53,
    },
    {
      cit_id: 753,
      cit_name: "Huyện U Minh",
      cit_parent: 53,
    },
    {
      cit_id: 754,
      cit_name: "Huyện Thới Bình",
      cit_parent: 53,
    },
    {
      cit_id: 755,
      cit_name: "Huyện Trần Văn Thời",
      cit_parent: 53,
    },
    {
      cit_id: 756,
      cit_name: "Huyện Cái Nước",
      cit_parent: 53,
    },
    {
      cit_id: 757,
      cit_name: "Huyện Đầm Dơi",
      cit_parent: 53,
    },
    {
      cit_id: 758,
      cit_name: "Huyện Năm Căn",
      cit_parent: 53,
    },
    {
      cit_id: 759,
      cit_name: "Huyện Ngọc Hiển",
      cit_parent: 53,
    },
    {
      cit_id: 760,
      cit_name: "Huyện Chợ Mới",
      cit_parent: 49,
    },
    {
      cit_id: 761,
      cit_name: "Huyện Châu Thành",
      cit_parent: 56,
    },
    {
      cit_id: 762,
      cit_name: "Huyện Châu Thành",
      cit_parent: 49,
    },
    {
      cit_id: 763,
      cit_name: "Thành phố Cam Đường",
      cit_parent: 13,
    },
    {
      cit_id: 764,
      cit_name: "Huyện Châu Thành",
      cit_parent: 54,
    },
    {
      cit_id: 765,
      cit_name: "Huyện Tam Nông",
      cit_parent: 54,
    },
    {
      cit_id: 766,
      cit_name: "Huyện Bạch Long Vĩ",
      cit_parent: 2,
    },
    {
      cit_id: 767,
      cit_name: "Huyện Bảo Lâm",
      cit_parent: 29,
    },
    {
      cit_id: 768,
      cit_name: "Huyện Vĩnh Hưng",
      cit_parent: 58,
    },
    {
      cit_id: 769,
      cit_name: "Huyện Châu Thành",
      cit_parent: 58,
    },
    {
      cit_id: 771,
      cit_name: "Huyện Châu Thành",
      cit_parent: 60,
    },
    {
      cit_id: 777,
      cit_name: "Thị xã Phú Mỹ",
      cit_parent: 47,
    },
    {
      cit_id: 775,
      cit_name: "Huyện Phong Điền",
      cit_parent: 48,
    },
    {
      cit_id: 776,
      cit_name: "Huyện Vĩnh Thạnh",
      cit_parent: 48,
    },
    {
      cit_id: 778,
      cit_name: "Thị xã Nghi Sơn",
      cit_parent: 44,
    },
    {
      cit_id: 779,
      cit_name: "Huyện Châu Thành",
      cit_parent: 59,
    },
  ];
  
  export const getAllCity = () => {
    return city_array
      .filter((city) => city.cit_parent === 0)
      .map((city) => ({
        label: city.cit_name,
        value: city.cit_id,
      }));
  };


  export const job_array = [
    {
      cat_id: 1,
      cat_name: "Kế toán - Kiểm toán",
    },
    {
      cat_id: 2,
      cat_name: "Hành chính - Văn phòng",
    },
    {
      cat_id: 83,
      cat_name: "Việc làm thời vụ",
    },
    {
      cat_id: 3,
      cat_name: "Sinh viên làm thêm",
    },
    {
      cat_id: 4,
      cat_name: "Xây dựng",
    },
    {
      cat_id: 5,
      cat_name: "Điện - Điện tử",
    },
    {
      cat_id: 6,
      cat_name: "Làm bán thời gian",
    },
    {
      cat_id: 7,
      cat_name: "Vận tải - Lái xe",
    },
    {
      cat_id: 8,
      cat_name: "Khách sạn - Nhà hàng",
    },
    {
      cat_id: 9,
      cat_name: "Nhân viên kinh doanh",
    },
    {
      cat_id: 10,
      cat_name: "Bán hàng",
    },
    {
      cat_id: 11,
      cat_name: "Cơ khí - Chế tạo",
    },
    {
      cat_id: 12,
      cat_name: "Lao động phổ thông",
    },
    {
      cat_id: 13,
      cat_name: "IT phần mềm",
    },
    {
      cat_id: 14,
      cat_name: "Marketing-PR",
    },
    {
      cat_id: 43,
      cat_name: "Nhập liệu",
    },
    {
      cat_id: 17,
      cat_name: "Giáo dục-Đào tạo",
    },
    {
      cat_id: 18,
      cat_name: "Kỹ thuật",
    },
    {
      cat_id: 19,
      cat_name: "Y tế-Dược",
    },
    {
      cat_id: 20,
      cat_name: "Quản trị kinh doanh",
    },
    {
      cat_id: 21,
      cat_name: "Dịch vụ",
    },
    {
      cat_id: 22,
      cat_name: "Biên - Phiên dịch",
    },
    {
      cat_id: 23,
      cat_name: "Dệt may - Da giày",
    },
    {
      cat_id: 87,
      cat_name: "Tìm việc làm thêm",
    },
    {
      cat_id: 24,
      cat_name: "Kiến trúc - Tk nội thất",
    },
    {
      cat_id: 25,
      cat_name: "Xuất nhập khẩu",
    },
    {
      cat_id: 26,
      cat_name: "IT Phần cứng - mạng",
    },
    {
      cat_id: 27,
      cat_name: "Nhân sự",
    },
    {
      cat_id: 28,
      cat_name: "Thiết kế - Mỹ thuật",
    },
    {
      cat_id: 29,
      cat_name: "Tư vấn",
    },
    {
      cat_id: 30,
      cat_name: "Bảo vệ",
    },
    {
      cat_id: 31,
      cat_name: "Ô tô - xe máy",
    },
    {
      cat_id: 32,
      cat_name: "Thư ký - Trợ lý",
    },
    {
      cat_id: 33,
      cat_name: "KD bất động sản",
    },
    {
      cat_id: 34,
      cat_name: "Du lịch",
    },
    {
      cat_id: 35,
      cat_name: "Báo chí - Truyền hình",
    },
    {
      cat_id: 36,
      cat_name: "Thực phẩm-Đồ uống",
    },
    {
      cat_id: 37,
      cat_name: "Ngành nghề khác",
    },
    {
      cat_id: 38,
      cat_name: "Vật tư-Thiết bị",
    },
    {
      cat_id: 39,
      cat_name: "Thiết kế web",
    },
    {
      cat_id: 40,
      cat_name: "In ấn - Xuất bản",
    },
    {
      cat_id: 41,
      cat_name: "Nông - Lâm - Ngư - Nghiệp",
    },
    {
      cat_id: 42,
      cat_name: "Thương mại điện tử",
    },
    {
      cat_id: 44,
      cat_name: "Việc làm thêm tại nhà",
    },
    {
      cat_id: 45,
      cat_name: "Chăm sóc khách hàng",
    },
    {
      cat_id: 46,
      cat_name: "Sinh viên mới tốt nghiệp - Thực tập",
    },
    {
      cat_id: 47,
      cat_name: "Kỹ thuật ứng dụng",
    },
    {
      cat_id: 48,
      cat_name: "Bưu chính viễn thông",
    },
    {
      cat_id: 112,
      cat_name: "Telesales",
    },
    {
      cat_id: 49,
      cat_name: "Dầu khí - Địa chất",
    },
    {
      cat_id: 50,
      cat_name: "Giao thông vận tải - Thủy lợi - Cầu đường",
    },
    {
      cat_id: 51,
      cat_name: "Khu chế xuất - Khu công nghiệp",
    },
    {
      cat_id: 52,
      cat_name: "Làm đẹp - Thể lực - Spa",
    },
    {
      cat_id: 53,
      cat_name: "Luật - Pháp lý",
    },
    {
      cat_id: 54,
      cat_name: "Môi trường - Xử lý chất thải",
    },
    {
      cat_id: 55,
      cat_name: "Mỹ phẩm - Thời trang - Trang sức",
    },
    {
      cat_id: 56,
      cat_name: "Ngân hàng - Chứng khoán - Đầu tư",
    },
    {
      cat_id: 57,
      cat_name: "Nghệ thuật - Điện ảnh",
    },
    {
      cat_id: 58,
      cat_name: "Phát triển thị trường",
    },
    {
      cat_id: 59,
      cat_name: "Phục vụ - Tạp vụ",
    },
    {
      cat_id: 60,
      cat_name: "Quan hệ đối ngoại",
    },
    {
      cat_id: 61,
      cat_name: "Quản lý điều hành",
    },
    {
      cat_id: 62,
      cat_name: "Sản xuất - Vận hành sản xuất",
    },
    {
      cat_id: 63,
      cat_name: "Thẩm định - Giám thẩm định - Quản lý chất lượng",
    },
    {
      cat_id: 64,
      cat_name: "Thể dục - Thể thao",
    },
    {
      cat_id: 65,
      cat_name: "Hóa học - Sinh học",
    },
    {
      cat_id: 66,
      cat_name: "Bảo hiểm",
    },
    {
      cat_id: 67,
      cat_name: "Freelancer",
    },
    {
      cat_id: 68,
      cat_name: "Công chức - Viên chức ",
    },
    {
      cat_id: 71,
      cat_name: "Điện tử viễn thông",
    },
    {
      cat_id: 73,
      cat_name: "Hoạch định - Dự án",
    },
    {
      cat_id: 75,
      cat_name: "Lương cao",
    },
    {
      cat_id: 77,
      cat_name: "Tiếp thị - Quảng cáo",
    },
    {
      cat_id: 79,
      cat_name: "Việc làm Tết",
    },
    {
      cat_id: 81,
      cat_name: "Giúp việc",
    },
    {
      cat_id: 88,
      cat_name: "Thủy sản",
    },
    {
      cat_id: 89,
      cat_name: "Công nghệ thực phẩm",
    },
    {
      cat_id: 90,
      cat_name: "Chăn nuôi / Thú y",
    },
    {
      cat_id: 91,
      cat_name: "An toàn lao động",
    },
    {
      cat_id: 92,
      cat_name: "Hàng không",
    },
    {
      cat_id: 102,
      cat_name: "Thư viện",
    },
    {
      cat_id: 94,
      cat_name: "Tổ chức sự kiện",
    },
    {
      cat_id: 95,
      cat_name: "Trắc địa",
    },
    {
      cat_id: 103,
      cat_name: "Thống kê",
    },
    {
      cat_id: 97,
      cat_name: "Bảo trì",
    },
    {
      cat_id: 98,
      cat_name: "Hàng hải",
    },
    {
      cat_id: 99,
      cat_name: "Nấu ăn",
    },
    {
      cat_id: 100,
      cat_name: "Truyền thông",
    },
    {
      cat_id: 101,
      cat_name: "Startup",
    },
    {
      cat_id: 104,
      cat_name: "Copywriter",
    },
    {
      cat_id: 105,
      cat_name: "Xuất khẩu lao động",
    },
    {
      cat_id: 106,
      cat_name: "Công nghệ cao",
    },
    {
      cat_id: 107,
      cat_name: "Tài chính",
    },
    {
      cat_id: 108,
      cat_name: "Thu ngân",
    },
    {
      cat_id: 114,
      cat_name: "Lễ tân - PG - PB",
    },
    {
      cat_id: 115,
      cat_name: "Pha chế - Bar",
    },
    {
      cat_id: 116,
      cat_name: "Đầu bếp - phụ bếp",
    },
    {
      cat_id: 117,
      cat_name: "Logistic",
    },
    {
      cat_id: 118,
      cat_name: "Vận chuyển - giao nhận",
    },
    {
      cat_id: 119,
      cat_name: "Quản lý đơn hàng",
    },
    {
      cat_id: 120,
      cat_name: "It",
    },
    {
      cat_id: 121,
      cat_name: "Tài chính - Ngân hàng",
    },
    {
      cat_id: 122,
      cat_name: "An ninh - Bảo vệ",
    },
    {
      cat_id: 123,
      cat_name: "Dịch vụ du lịch",
    },
    {
      cat_id: 124,
      cat_name: "Giao thông vận tải",
    },
    {
      cat_id: 125,
      cat_name: "Bất động sản",
    },
    {
      cat_id: 126,
      cat_name: "Kiến trúc - Nội thất",
    },
    {
      cat_id: 127,
      cat_name: "Môi trường",
    },
    {
      cat_id: 128,
      cat_name: "Sức khỏe - Spa",
    },
    {
      cat_id: 129,
      cat_name: "Mỹ phẩm - Thời trang",
    },
    {
      cat_id: 130,
      cat_name: "Marketing",
    },
    {
      cat_id: 131,
      cat_name: "Kinh doanh - Bán hàng",
    },
    {
      cat_id: 132,
      cat_name: "Thiết kế",
    },
    {
      cat_id: 133,
      cat_name: "Truyền thông PR",
    },
    {
      cat_id: 134,
      cat_name: "Y tế",
    },
    {
      cat_id: 135,
      cat_name: "Việc làm online",
    },
    {
      cat_id: 136,
      cat_name: "Việc làm nước ngoài",
    },
    {
      cat_id: 137,
      cat_name: "Phi chính phủ - Phi lợi nhuận",
    },
  ];
  
  export const getJob = () => {
    return job_array.map((job) => ({
      label: job.cat_name,
      value: job.cat_id,
    }));
  };