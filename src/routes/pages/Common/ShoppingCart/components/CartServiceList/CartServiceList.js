import { Content, ImageUpload } from 'components';
import CartServiceCard from '../CartServiceCard/CartServiceCard';
import './CartServiceList.css';

const CartServiceList = ({
    company,
    navigate,
    handleNavigateCompany,

    userCartServiceList,

    handleDeleteCartList,

    setCartList,

    totalPrice,

    filteredUserAddress,

    uploadedImages,
    setUploadedImages,
}) => {

    return (
        <Content
            paddingBottom={75}
            paddingLeft={0}
            paddingRight={0}
            paddingTop={0}
            gap={20}
        >
            <div className='cart-service-list-container'>
                {userCartServiceList?.length === 0 ? (
                    <div style={{
                        textAlign: 'center'
                    }}>
                        <span
                            className='gray1'
                            styles={{
                                width: '100%',
                            }}>장바구니에 담긴 서비스가 없습니다.</span>
                    </div>
                ) : (
                    userCartServiceList.map((service) => {
                        return (
                            <div className='cart-service-list-wrap'>
                                <CartServiceCard
                                    key={service.service_id}

                                    service={service}

                                    handleDeleteCartList={handleDeleteCartList}

                                    setCartList={setCartList}

                                    filteredUserAddress={filteredUserAddress}
                                />
                            </div>
                        )
                    })
                )}
                <div className="cart-service-total-price-wrap">
                    <div className="divide"></div>
                    <div className="cart-service-total-price">
                        <span>총 서비스 금액</span>
                        <span className='bolder'>{totalPrice.toLocaleString()}원</span>
                    </div>
                </div>
            </div>
            <div className='cart-service-list-button'>
                <button
                    onClick={company ? handleNavigateCompany : () => navigate('/companies')}
                >+ 서비스 더 담기</button>
            </div>
            <ImageUpload
                uploadedImages={uploadedImages}
                setUploadedImages={setUploadedImages}
                isTitle={true}
            />
        </Content>
    );
};

export default CartServiceList;