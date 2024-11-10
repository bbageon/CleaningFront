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
        >
            <div className='company-title-container'>
                <span className='bold large' onClick={handleNavigateCompany}>{company.company_name} ⟩</span>
            </div>
            <div
                className='company-title-address'
                onClick={() => navigate('/addressregistration')}
            >
                {
                    userFavoriteAddress?.address && userFavoriteAddress?.address_detail ? (
                        <>
                            <span>{userFavoriteAddress.address} ⟩</span>
                            <span className='gray1'>({userFavoriteAddress.address_detail})</span>
                        </>
                    ) : (
                        <span>등록된 주소가 없습니다. ⟩</span>
                    )
                }
            </div>
        </Content>
    );
};

export default CompanyTitle;
