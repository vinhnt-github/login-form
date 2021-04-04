import React from 'react'
import PropTypes from 'prop-types'
import { useContext } from 'react';
import {MainContext} from './../contexts/Main.context';

import {Card,ResourceItem,TextStyle,ResourceList,Avatar} from '@shopify/polaris';
import defaultImage from '../assets/images/default-avatar.png'

function ListAccount(props) {
    const {state} = useContext(MainContext);
    const listUser = state.map((s)=>Object.values(s))
    const handelClick = (value) =>{
        console.log(value);
    }
    return (
        <div>
            <Card>
                <ResourceList
                    resourceName={{singular: 'customer', plural: 'customers'}}
                    items={[
                    ...state
                    ]}
                    renderItem={(item) => {
                    const {id, url, full_name, adress, email,phone} = item;
                    return (
                        <ResourceItem
                        verticalAlignment="center"
                        // id={id}
                        // url={url}
                        media={
                            <Avatar customer size="medium" name={full_name} source={defaultImage} />
                        }
                        accessibilityLabel={`View details for ${full_name}`}
                        name={full_name}
                        onClick ={()=>handelClick(full_name)}
                        >
                        <h3>
                            <TextStyle variation="strong">{full_name}</TextStyle>
                        </h3>
                        <div>{adress}</div>
                        <div>{email}</div>
                        <div>{phone}</div>
                        </ResourceItem>
                    );
                    }}
                />
            </Card>
        </div>
    )
}

ListAccount.propTypes = {

}

export default ListAccount

