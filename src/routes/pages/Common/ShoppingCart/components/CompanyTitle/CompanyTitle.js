import './CompanyTitle.css';
import { Content } from 'components';
import { useGetUserAddress } from 'hooks/UserAddressHooks';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from 'store';

const CompanyTitle = ({
    company,
    handleNavigateCompany,
}) => {
    /* ===== STATE ===== */
    const [userFavoriteAddress, setUserFavoriteAddress] = useState({
        address: '',
        address_detail: '',
    });



    /* ===== VARIABLES ===== */
    const navigate = useNavigate();



    /* ===== STORE ===== */
    const userId = useAuthStore(state => state.user_id);



    /* ===== VARIABLES ===== */
    const { data: userAddressesRes, isLoading: userAddressesLoading, isError: userAddressesError } = useGetUserAddress(userId);
    const userAddresses = userAddressesRes?.data.user_addresses || [];



    /* ===== EFFECTS ===== */
    useEffect(() => {
        if (!userAddressesLoading && userAddresses) {
            const filteredUserFavoriteAddress = userAddresses?.filter((address) => address.is_favorite === 1);
            setUserFavoriteAddress(...filteredUserFavoriteAddress);
        }
    }, [userAddresses]);



    /* ===== RENDER ===== */
    return (
        <Content
            paddingBottom={0}
            paddingLeft={0}
            paddingRight={0}
            paddingTop={0}
        >
            <div
                className='company-title-container'
                onClick={handleNavigateCompany}
            >
                <div className="company-title-text">
                    <div className="company-title">
                        청소업체
                    </div>
                    <span className='company-text'>{company.company_name}</span>
                </div>
                <span className='right-bracket'></span>
            </div>
            <div
                className='company-title-container'
                onClick={() => navigate('/addressregistration')}
            >
                <div className="company-title-text">
                    <div className="company-title">
                        청소 요청 주소
                    </div>
                    {
                        userFavoriteAddress?.address && userFavoriteAddress?.address_detail ? (
                            <>
                                <span className='company-text'>{userFavoriteAddress.address} ⟩</span>
                                <span className='gray1 company-text'>({userFavoriteAddress.address_detail})</span>
                            </>
                        ) : (
                            <span className='company-text'>등록된 주소가 없습니다.</span>
                        )
                    }
                </div>
                <span className='right-bracket'></span>
            </div>
        </Content>
    );
};

export default CompanyTitle;
