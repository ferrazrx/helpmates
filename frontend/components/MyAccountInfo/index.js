import React from "react";
import Link from "next/link";
import {GET_LOCAL_USER_LOGGED} from './queries';
import { Query } from 'react-apollo';
import { Info, Avatar } from './style'
import Modal from '../Modal'

function AvatarButton (){
    return (
        <Avatar>
            <img className="w-100 p-2 avatar" src="https://cdn3.iconfinder.com/data/icons/yumminky-pc/100/yumminky-pc-43-512.png" alt="avatar"></img>
        </Avatar>
    )
}

function EditProfileButton (){
    return (
        <button className="w-100 p-1 btn btn-outline-primary">
            Edit Profile
        </button>
    )
}

export default function MyAccountMenu(props) {
    return(
        <Query query={GET_LOCAL_USER_LOGGED}>
        {({data: {loggedUser}})=> (
          <div className="w-100 row border mb-3 mx-0">
            <Modal link={<AvatarButton />} style={'col-md-4 p-0'}>
                {
                    (closeModal)=>( 
                        <div className="bg-white p-5"></div>
                     )
                }
            </Modal>
            <div className="col-md-8 p-0">
            <Info className="p-2">
                <div className='text-uppercase font-weight-bold text-dark'>{`${loggedUser.fname} ${loggedUser.lname}`}</div>
                <div className="email text-info">{`${loggedUser.email}`}</div>
                <div className="address">{`${loggedUser.address.line1}`}</div>
                <div className="address">{`${loggedUser.address.line2}`}</div>
                <div className="address">{`${loggedUser.address.city} - ${loggedUser.address.zip}`}</div>
            </Info>
            </div>
            <Modal link={<EditProfileButton />} style={'w-100 m-2'}>
                {
                    (closeModal)=>( 
                        <div className="bg-white p-5">
                            <h1 className="text-nowrap">Profile Information</h1>
                            <hr />
                            <div className="d-flex w-100 justify-content-between border-bottom py-2">
                                <div className="title">Fist Name:</div>
                                <div className="content">{`${loggedUser.fname}`}</div>
                                <div className="edit"><i class="fas fa-pen"></i></div>
                            </div>
                            <div className="d-flex w-100 justify-content-between border-bottom py-2">
                                <div className="title">Last Name:</div>
                                <div className="content">{`${loggedUser.lname}`}</div>
                                <div className="edit"><i class="fas fa-pen"></i></div>
                                
                            </div>
                            <div>{`${loggedUser.email}`}</div>
                            <div>{`${loggedUser.address.line1}`}</div>
                            <div>{`${loggedUser.address.line2}`}</div>
                            <div>{`${loggedUser.address.city} - ${loggedUser.address.zip}`}</div>
                        </div>
                     )
                }
            </Modal>
           
            
          </div>
          
        )}
      </Query>
    )
}