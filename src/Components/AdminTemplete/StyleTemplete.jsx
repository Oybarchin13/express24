import styled from 'styled-components';

const  StyleTemplete = styled.section`
        width: 100%;
        position: relative;
        Link{
                text-decoration: none;
            }
        .menu{
            position: sticky;
            top: 0;
            bottom: 0;
            width: 360px;
            height: 100vh;
            background-color: #FFFCED;
            padding: 20px 20px;
            .logo img{
                width: 240px;
            }
            
            ul{
                margin-top: 45px;
                list-style-type: none;
                li{
                    display: flex;
                    align-items: center;
                    &:hover{
                        background-color: #FFDC03
                        ;
                    }
                }
                span{
                    display: block;
                }
                .span-teg2{
                    font-size: 12px;
                }
            }
            .list-icon img{
                width: 32px;
                height: 32px;
                padding-right: px;
            }
        }
        header{
            position: sticky;
            top: 0;
            width: 1176px;
            height: 84px !important;
            padding: 0 24px;
            background-color: #fff;
            
        }

        .title{
            h2{
                font-size: 26px;
            }
            p{
                font-size: 12px;
                color: #676C6F;
            }
        }
        .ctegory-btn{
            padding: 20px 0;
            button{
                width: 185px;
                font-size: 20px;
            }
        }
        .category-name, .food-name{
            button{
                width: 185px;
                font-size: 20px;
                margin-top: 40px;
            }
        }
        table th{
            color: #919699;
            font-size: 14px;
        }
        
`;

export default StyleTemplete ;