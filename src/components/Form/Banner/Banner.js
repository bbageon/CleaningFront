import './Banner.css';

const Banner = ({
    width,
    height,
    img,
    href,
}) => {
    return (
        <div className='banner-container'>
            <img src={'https://cleaning-image.s3.ap-northeast-2.amazonaws.com/banner.png'} />
        </div>
    );
};

export default Banner;