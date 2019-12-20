import styled from "styled-components";

const Info = styled.div`
    .email{
        font-size: 12px;
    }
    .address{
        font-size: 10px;
    }
`;

const Avatar = styled.div`
cursor: pointer;
 &:after{
           content: "Edit";
           text-transform: uppercase;
           display: flex;
            justify-content: center;
            align-items: center;
           width: 68px;
           height: 68px;
           position: absolute;
           top: 50%;
           left: 50%;
           transform: translate(-50%, -50%);
           opacity: 0;
           transition: all 0.5s;
           margin-top: -8px;
           border-radius: 50%;
           background-color: #000;
           color: #FFF;
       }
       &:hover:after{
           opacity: 0.7;
       }
   .avatar{
      
   }
`;

export { Info, Avatar };