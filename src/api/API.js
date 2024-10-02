import ApiManager from './ApiManager';
const $http = new ApiManager();

const parameterToPath = (path, params = {}) => {
  const keys = Object.keys(params);
  let newStr = path;
  for (let key of keys) {
    newStr = newStr.replace(`:${key}`, params[key]);
  }
  return newStr;
};

const API = {
  /**
   * ====================
   *         인 증
   * ====================
   */
  /**
   * 사이트 토큰 발급
  */
  getCounselors: () => $http.get('/counselor'),

  /**
   * 토큰 검사
  */
  postAuthCheck: () => $http.post('/auth/check'),

  /**
   * 고객 로그인
  */
  postAuthUserSignin: (body) => $http.post('/auth/user/signin', body),


  /**
   * ====================
   *         고 객
   * ====================
   */
  /*
   * 고객 생성
   */
  postUser: (body) => $http.post('/user', body),

  /*
   * 고객 전체 조회
   */
  getUser: () => $http.get('/user'),

  /*
   * 고객 단일 조회
   */
  getOneUser: (user_id) => $http.get(parameterToPath('/user/:user_id', { user_id })),

  /*
   * 프로필 정보 조회
   */
  getProfile: (user_id) => $http.get(parameterToPath('/user/profile/:user_id', { user_id })),

  /**
   * 고객 정보 수정
   */
  putUser: (user_id, body) => $http.put(parameterToPath('/user/:user_id', { user_id }), body),

  /**
   * 고객 정보 삭제
   */
  deleteUser: (user_id) => $http.delete(parameterToPath('/user/:user_id', { user_id })),


  /**
   * ====================
   *       고 객 주 소
   * ====================
   */
  /**
   * 고객 주소 생성
   */
  postUserAddress: (body) => $http.post('/user_address', body),

  /**
   * 고객 주소 전체 조회
   */
  getUserAddresses: () => $http.get('/user_address'),

  /**
   * 고객 주소 단일 조회
   */
  getOneUserAddress: (user_address_id) => $http.get(parameterToPath('/user_address/user/:user_address_id', { user_address_id })),

  /**
   * 고객 주소 조회
   */
  getUserAddress: (user_id) => $http.get(parameterToPath('/user_address/:user_id', { user_id })),

  /**
   * 고객 주소 수정
   */
  putUserAddress: (user_address_id, body) => $http.put(parameterToPath('/user_address/:user_address_id', { user_address_id }), body),

  /**
   * 고객 주소 삭제
   */
  deleteUserAddress: (user_address_id) => $http.delete(parameterToPath('/user_address/:user_address_id', { user_address_id })),


  /**
   * ==============================
   *       고 객 주 소 즐 겨 찾 기
   * ==============================
   */
  /**
   * 고객 즐겨찾기 생성
   */
  postUserFavoriteAddress: (body) => $http.post('/user_favorite_address', body),

  /**
   * 고객 즐겨찾기 전체 조회
   */
  getUserFavoriteAddress: () => $http.get('/user_favorite_address'),

  /**
   * 고객 즐겨찾기 단일 조회
   */
  getUserOneFavoriteAddress: (favorite_id) => $http.get(parameterToPath('/user_favorite_address/:favorite_id', { favorite_id })),

  /**
   * 고객 즐겨찾기 조회
   */
  getOneUserFavoriteAddress: (user_id) => $http.get(parameterToPath('/user_favorite_address/:user_id', { user_id })),

  /**
   * 고객 즐겨찾기 수정
   */
  putUserFavoriteAddress: (user_id, body) => $http.put(parameterToPath('/user_favorite_address/:user_id', { user_id }), body),

  /**
   * 고객 즐겨찾기 삭제
   */
  deleteUserFavoriteAddress: (favorite_id) => $http.delete(parameterToPath('/user_favorite_address/:favorite_id', { favorite_id })),

  /**
   * 주소 즐겨찾기 조회
   */
  getFavoriteAddress: (user_address_id) => $http.get(parameterToPath('/user_favorite_address/user_address/:user_address_id', { user_address_id })),


  /**
   * =====================
   *       청 소 업 체
   * =====================
   */
  /**
   * 청소업체 생성
   */
  postCompany: (body) => $http.post('/company', body),

  /**
   * 청소업체 전제 조회
   */
  getCompany: () => $http.get('/company'),

  /**
   * 청소업체 단일 조회
   */
  getOneCompany: (company_id) => $http.get(parameterToPath('/company/:company_id', { company_id })),

  /**
   * 청소업체 정보 수정
   */
  putCompany: (company_id, body) => $http.put(parameterToPath('/company/:company_id', { company_id }), body),

  /**
   * 청소업체 삭제
   */
  deleteCompany: (company_id) => $http.delete(parameterToPath('/company/:company_id', { company_id })),


  /**
   * =============================
   *       청 소 업 체 카 테 고 리
   * =============================
   */
  /**
   * 청소업체 카테고리 생성
   */
  postCompanyCategory: (body) => $http.post('/company_category', body),

  /**
   * 청소업체 카테고리 전체 조회
   */
  getCompanyCategory: () => $http.get('/company_category'),

  /**
   * 청소업체 카테고리 단일 조회
   */
  getOneCompanyCategory: (category_id) => $http.get(parameterToPath('/company_category/:category_id', { category_id })),

  /**
   * 청소업체 카테고리 수정
   */
  putCompanyCategory: (category_id, body) => $http.put(parameterToPath('/company_category/:category_id', { category_id }), body),

  /**
   * 청소업체 카테고리 삭제
   */
  deleteCompanyCategory: (category_id) => $http.delete(parameterToPath('/company_category/:category_id', { category_id })),


  /**
   * ==================================
   *       청 소 업 체 카 테 고 리 지 정
   * ==================================
   */
  /**
   * 청소업체 카테고리 지정 생성
   */
  postCompanyCategory: (body) => $http.post('/designate_company_category', body),

  /**
   * 청소업체 카테고리 지정 전체 조회
   */
  getCompanyCategory: () => $http.get('/designate_company_category'),

  /**
   * 청소업체 카테고리 지정 단일 조회
   */
  getOneCompanyCategory: (designate_id) => $http.get(parameterToPath('/designate_company_category/:designate_id', { designate_id })),

  /**
   * 청소업체 카테고리 지정 수정
   */
  putCompanyCategory: (designate_id, body) => $http.put(parameterToPath('/designate_company_category/:designate_id', { designate_id }), body),

  /**
   * 청소업체 카테고리 지정 삭제
   */
  deleteCompanyCategory: (designate_id) => $http.delete(parameterToPath('/designate_company_category/:designate_id', { designate_id })),


  /**
   * ==================
   *       채 팅 방
   * ==================
   */
  /**
   * 채팅방 생성
   */
  postChatRoom: (body) => $http.post('/chat_room', body),

  /**
   * 채팅방 전체 조회
   */
  getChatRoom: () => $http.get('/chat_room'),

  /**
   * 채팅방 단일 조회
   */
  getOneChatRoom: (room_id) => $http.get(parameterToPath('/chat_room/:room_id', { room_id })),

  /**
   * 채팅방 수정
  */
  putChatRoom: (room_id, body) => $http.put(parameterToPath('/chat_room/:room_id', { room_id }), body),

  /**
   * 채팅방 삭제
   */
  deleteChatRoom: (room_id) => $http.delete(parameterToPath('/chat_room/:room_id', { room_id })),


  /**
   * ======================
   *       채 팅 메 시 지
   * ======================
   */
  /**
   * 채팅 메시지 생성
   */
  postChatMessage: (body) => $http.post('/chat_message', body),

  /**
   * 채팅 메시지 전체 조회
   */
  getChatMessage: () => $http.get('/chat_message'),

  /**
   * 채팅 메시지 단일 조회
   */
  getChatOneMessage: (message_id) => $http.get(parameterToPath('/chat_message/:message_id', { message_id })),

  /**
   * 채팅방 메시지 조회
   */
  getOneChatMessage: (room_id) => $http.get(parameterToPath('/chat_message/chat/:room_id', { room_id })),

  /**
   * 채팅 메시지 수정
  */
  putChatMessage: (message_id, body) => $http.put(parameterToPath('/chat_message/:message_id', { message_id }), body),

  /**
   * 채팅 메시지 삭제
   */
  deleteChatMessage: (message_id) => $http.delete(parameterToPath('/chat_message/:message_id', { message_id })),


  /**
   * =====================
   *       청 소 요 청
   * =====================
   */
  /**
   * 청소요청 생성
   */
  postRequestClean: (body) => $http.post('/request_clean', body),

  /**
   * 청소요청 전체 조회
   */
  getRequestClean: () => $http.get('/request_clean'),

  /**
   * 청소요청 단일 조회
   */
  getOneRequestClean: (request_clean_id) => $http.get(parameterToPath('/request_clean/:request_clean_id', { request_clean_id })),

  /**
   * 유저 청소요청 조회
   */
  getUserRequestClean: (user_id) => $http.get(parameterToPath('/request_clean/user/:user_id', { user_id })),

  /**
   * 청소업체 청소요청 조회
   */
  getCompanyRequestClean: (company_id) => $http.get(parameterToPath('/request_clean/company/:company_id', { company_id })),

  /**
   * 청소요청 수정
  */
  putRequestClean: (request_clean_id, body) => $http.put(parameterToPath('/request_clean/:request_clean_id', { request_clean_id }), body),

  /**
   * 청소요청 삭제
   */
  deleteRequestClean: (request_clean_id) => $http.delete(parameterToPath('/request_clean/:request_clean_id', { request_clean_id })),


  /**
   * ======================
   *       견 적 서 요 청
   * ======================
   */
  /**
   * 견적서 요청 생성
   */
  postRequestEstimate: (body) => $http.post('/request_estimate', body),

  /**
   * 견적서 요청 전체 조회
   */
  getRequestEstimate: () => $http.get('/request_estimate'),

  /**
   * 견적서 요청 단일 조회
   */
  getOneRequestEstimate: (request_estimate_id) => $http.get(parameterToPath('/request_estimate/:request_estimate_id', { request_estimate_id })),

  /**
   * 유저 견적서 요청 조회
   */
  getUserRequestEstimate: (user_id) => $http.get(parameterToPath('/request_estimate/user/:user_id', { user_id })),

  /**
   * 견적서 요청 수정
  */
  putRequestEstimate: (request_estimate_id, body) => $http.put(parameterToPath('/request_estimate/:request_estimate_id', { request_estimate_id }), body),

  /**
   * 견적서 요청 삭제
   */
  deleteRequestEstimate: (request_estimate_id) => $http.delete(parameterToPath('/request_estimate/:request_estimate_id', { request_estimate_id })),


  /**
   * =================
   *       견 적 서 
   * =================
   */
  /**
   * 견적서 생성
   */
  postRequestEstimateList: (body) => $http.post('/estimate', body),

  /**
   * 견적서 전체 조회
   */
  getRequestEstimateList: () => $http.get('/estimate'),

  /**
   * 견적서 단일 조회
   */
  getOneRequestEstimateList: (estimate_id) => $http.get(parameterToPath('/estimate/:estimate_id', { estimate_id })),

  /**
   * 청소업체 견적서 조회
   */
  getCompanyRequestEstimateList: (company_id) => $http.get(parameterToPath('/estimate/company/:company_id', { company_id })),

  /**
   * 견적서 요청에 관한 견적서 전체 조회
   */
  getEstimateRequestEstimateList: (request_estimate_id) => $http.get(parameterToPath('/estimate/request_estimate/:request_estimate_id', { request_estimate_id })),

  /**
   * 견적서 수정
  */
  putRequestEstimateList: (estimate_id, body) => $http.put(parameterToPath('/estimate/:estimate_id', { estimate_id }), body),

  /**
   * 견적서 삭제
   */
  deleteRequestEstimateList: (estimate_id) => $http.delete(parameterToPath('/estimate/:estimate_id', { estimate_id })),


  /**
   * =================
   *     장 바 구 니
   * =================
   */
  /**
   * 장바구니 생성
   */
  postCart: (body) => $http.post('/cart', body),

  /**
   * 장바구니 전체 조회
   */
  getCart: () => $http.get('/cart'),

  /**
   * 장바구니 단일 조회
   */
  getOneCart: (cart_id) => $http.get(parameterToPath('/cart/:cart_id', { cart_id })),

  /**
   * 고객 장바구니 조회
  */
  getUserCart: (user_id) => $http.get(parameterToPath('/cart/user/:user_id', { user_id })),

  /**
   * 장바구니 수정
   */
  putCart: (cart_id, body) => $http.put(parameterToPath('/cart/:cart_id', { cart_id }), body),

  /**
   * 장바구니 삭제
   */
  deleteCart: (cart_id) => $http.put(parameterToPath('/cart/:cart_id', { cart_id })),


  /**
   * =====================
   *     장 바 구 니 목 록
   * =====================
   */
  /**
   * 장바구니 목록 생성
   */
  postCartList: (body) => $http.post('/cart_list', body),

  /**
   * 장바구니 목록 전체 조회
   */
  getCartList: () => $http.get('/cart_list'),

  /**
   * 장바구니 목록 단일 조회
   */
  getOneCartList: (cart_list_id) => $http.get(parameterToPath('/cart_list/:cart_list_id', { cart_list_id })),

  /**
   * 청소업체 장바구니 목록 조회
  */
  getCompanyCartList: (company_id) => $http.get(parameterToPath('/cart_list/company/:company_id', { company_id })),

  /**
   * 장바구니 목록 수정
   */
  putCartList: (cart_list_id, body) => $http.put(parameterToPath('/cart_list/:cart_list_id', { cart_list_id }), body),

  /**
   * 장바구니 목록 삭제
   */
  deleteCartList: (cart_list_id) => $http.put(parameterToPath('/cart_list/:cart_list_id', { cart_list_id })),


  /**
   * ============
   *     결 제
   * ============
   */
  /**
   * 결제 생성
   */
  postPay: (body) => $http.post('/pay', body),

  /**
   * 결제 전체 조회
   */
  getPay: () => $http.get('/pay'),

  /**
   * 결제 단일 조회
   */
  getOnePay: (pay_id) => $http.get(parameterToPath('/pay/:pay_id', { pay_id })),

  /**
   * 고객 결제 조회
  */
  getUserPay: (user_id) => $http.get(parameterToPath('/pay/user/:user_id', { user_id })),

  /**
   * 청소업체 결제 조회
  */
  getCompanyPay: (company_id) => $http.get(parameterToPath('/pay/company/:company_id', { company_id })),

  /**
   * 결제 수정
   */
  putPay: (pay_id, body) => $http.put(parameterToPath('/pay/:pay_id', { pay_id }), body),

  /**
   * 결제 삭제
   */
  deletePay: (pay_id) => $http.put(parameterToPath('/pay/:pay_id', { pay_id })),


  /**
   * ============
   *     리 뷰
   * ============
   */
  /**
   * 리뷰 생성
   */
  postReview: (body) => $http.post('/review', body),

  /**
   * 리뷰 전체 조회
   */
  getReview: () => $http.get('/review'),

  /**
   * 리뷰 단일 조회
   */
  getOneReview: (review_id) => $http.get(parameterToPath('/review/:review_id', { review_id })),

  /**
   * 고객 작성 리뷰 조회
  */
  getUserReview: (user_id) => $http.get(parameterToPath('/review/user/:user_id', { user_id })),

  /**
   * 리뷰 수정
   */
  putReview: (review_id, body) => $http.put(parameterToPath('/review/:review_id', { review_id }), body),

  /**
   * 리뷰 삭제
   */
  deleteReview: (review_id) => $http.put(parameterToPath('/review/:review_id', { review_id })),


  /**
   * ===================
   *     리 뷰 이 미 지
   * ===================
   */
  /**
   * 리뷰 이미지 생성
   */
  postReviewImage: (body) => $http.post('/review_image', body),

  /**
   * 리뷰 이미지 전체 조회
   */
  getReviewImage: () => $http.get('/review_image'),

  /**
   * 리뷰 이미지 단일 조회
   */
  getOneReviewImage: (review_image_id) => $http.get(parameterToPath('/review_image/:review_image_id', { review_image_id })),

  /**
   * 리뷰에 대한 리뷰 이미지 조회
  */
  getReviewImageAboutReview: (review_id) => $http.get(parameterToPath('/review_image/review/:review_id', { review_id })),

  /**
   * 리뷰 이미지 수정
   */
  putReviewImage: (review_image_id, body) => $http.put(parameterToPath('/review_image/:review_image_id', { review_image_id }), body),

  /**
   * 리뷰 이미지 삭제
   */
  deleteReviewImage: (review_image_id) => $http.put(parameterToPath('/review_image/:review_image_id', { review_image_id })),


  /**
   * ===================
   *     서 비 스 옵 션
   * ===================
   */
  /**
   * 서비스 옵션 생성
   */
  postServiceOption: (body) => $http.post('/service_option', body),

  /**
   * 서비스 옵션 전체 조회
   */
  getServiceOption: () => $http.get('/service_option'),

  /**
   * 서비스 옵션 단일 조회
   */
  getOneServiceOption: (service_option_id) => $http.get(parameterToPath('/service_option/:service_option_id', { service_option_id })),

  /**
   * 청소업체 서비스 옵션 조회
   */
  getCompanyServiceOption: (company_id) => $http.get(parameterToPath('/company/:company_id', { company_id })),

  /**
   * 서비스 옵션 수정
   */
  putServiceOption: (body) => $http.put(parameterToPath('/service_option/:service_option_id', { service_option_id }), body),

  /**
   * 서비스 옵션 삭제
   */
  deleteServiceOption: (service_option_id) => $http.delete(parameterToPath('/service_option/:service_option_id', { service_option_id })),
};

export default API;