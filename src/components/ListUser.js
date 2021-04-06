import React,{useCallback, useContext,useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import {MainContext} from '../contexts/Main.context';

import defaultImage from '../assets/images/default-avatar.png'

import {Card,
    ResourceItem,
    TextStyle,
    ResourceList,
    Avatar,
    Layout,
    Pagination
} from '@shopify/polaris';
import styled from 'styled-components';

let itemShowNumber = 4;

function ListUser(props) {
    const {state} = useContext(MainContext);
    let userShow = []

    const totalPage = Math.ceil(state.length/itemShowNumber);
    console.log(totalPage);
    const [activePage,setActivePage] = useState(1);
    const [itemShow,setItemShow] = useState({
        min : 0,
        max : itemShowNumber
    });
    useEffect(() => {
        setItemShow({
            min : (activePage-1)*itemShowNumber,
            max : activePage*itemShowNumber
        })
        
    }, [activePage])
    function handelClickUser(value) {
        props.handelClick(value);
    }
    userShow = state.slice(itemShow.min, itemShow.max);
    
    const onNext = useCallback(() =>{
        setActivePage(activePage + 1)
    }, [activePage]);
    const onPrevious = useCallback(() =>{setActivePage(activePage - 1)}, [activePage]);
    return (
        <ListUserWrap>
            <Card title="List User">
                <ResourceList
                    resourceName={{singular: 'customer', plural: 'customers'}}
                    items={[
                    ...userShow
                    ]}
                    renderItem={(item) => {
                    const {id, url, full_name, adress, email,phone,lng = 105.570639 ,lat = 18.5955223} = item;
                    return (
                        <ResourceItem
                        verticalAlignment="center"
                        media={
                            <Avatar customer size="medium" name={full_name} source={defaultImage} />
                        }
                        accessibilityLabel={`View details for ${full_name}`}
                        name={full_name}
                        onClick ={()=>handelClickUser({lng,lat})}
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
            <PaginationWrap>
                
                <Pagination
                    hasPrevious = {activePage > 1 ? true:false}
                    previousKeys={[74]}
                    previousTooltip="Prev"
                    onPrevious={onPrevious}
                    hasNext = {activePage < totalPage}
                    nextKeys={[75]}
                    nextTooltip="Next"
                    onNext={onNext}
                />
                <p className = "sub-title">
                    Show
                    <TextStyle variation="positive">{activePage}</TextStyle>
                    of
                    <TextStyle variation="positive">{totalPage}</TextStyle>
                </p>
            </PaginationWrap>
            
            
            
        </ListUserWrap>
    )
}

ListUser.propTypes = {

}

const ListUserWrap = styled.div`

`
const PaginationWrap = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    padding-left: 5px;
    .sub-title{
        margin-left: 15px;
        span{
            padding: 3px;
        }
    }
`

export default ListUser

