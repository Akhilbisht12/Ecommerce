import React from 'react';
import ProductComp from './ProductComp';
import StyledHeading from '../Styled Components/StyledHeading'
import StyledButton from '../Styled Components/StyledButton';

export default function Products() {
    const styles ={
        input : {
            width : '8rem',
            outline : 'none',
        }
    }
    return (
        <div style={{display : 'flex', justifyContent : 'space-between', marginTop : '4rem'}}>
            <div style={{display : 'flex', flexDirection : 'column'}}>
                <StyledHeading med >Filters</StyledHeading>
                <StyledHeading small>Brands</StyledHeading>
                <label>
                <input
                type = 'checkbox'
                />
                Adidas</label>
                <label>
                <input
                type = 'checkbox'
                />
                Nike</label>
                <label>
                <input
                type = 'checkbox'
                />
                Abibas</label>
                <label>
                <input
                type = 'checkbox'
                />
                Nice</label>

                <StyledHeading small>Price Range</StyledHeading>

                <input style={styles.input}
                    type='number'
                    />
                    to
                <input style={styles.input}
                    type='number'
                    />
                <StyledButton primary>Search</StyledButton>
            </div>
            <div>
                <div style={{display : 'flex' , marginBottom : '4rem'}}>
                    <ProductComp 
                        url='https://apollo-singapore.akamaized.net/v1/files/zps0m1zojdn01-IN/image'
                        name = 'Yellow Ball'
                        price = 'Very Cheap'/>
                    <ProductComp 
                        url='https://apollo-singapore.akamaized.net/v1/files/zps0m1zojdn01-IN/image'
                        name = 'Yellow Ball'
                        price = 'Very Cheap'/>
                    <ProductComp 
                        url='https://apollo-singapore.akamaized.net/v1/files/zps0m1zojdn01-IN/image'
                        name = 'Yellow Ball'
                        price = 'Very Cheap'/>
                    <ProductComp 
                        url='https://apollo-singapore.akamaized.net/v1/files/zps0m1zojdn01-IN/image'
                        name = 'Yellow Ball'
                        price = 'Very Cheap'/>
                    <ProductComp 
                        url='https://apollo-singapore.akamaized.net/v1/files/zps0m1zojdn01-IN/image'
                        name = 'Yellow Ball'
                        price = 'Very Cheap'/>
                    
                </div>

                <div style={{display : 'flex'}}>
                    <ProductComp 
                        url='https://apollo-singapore.akamaized.net/v1/files/zps0m1zojdn01-IN/image'
                        name = 'Yellow Ball'
                        price = 'Very Cheap'/>
                    <ProductComp 
                        url='https://apollo-singapore.akamaized.net/v1/files/zps0m1zojdn01-IN/image'
                        name = 'Yellow Ball'
                        price = 'Very Cheap'/>
                    <ProductComp 
                        url='https://apollo-singapore.akamaized.net/v1/files/zps0m1zojdn01-IN/image'
                        name = 'Yellow Ball'
                        price = 'Very Cheap'/>
                    <ProductComp 
                        url='https://apollo-singapore.akamaized.net/v1/files/zps0m1zojdn01-IN/image'
                        name = 'Yellow Ball'
                        price = 'Very Cheap'/>
                    <ProductComp 
                        url='https://apollo-singapore.akamaized.net/v1/files/zps0m1zojdn01-IN/image'
                        name = 'Yellow Ball'
                        price = 'Very Cheap'/>
                    
                </div>
            </div>
        </div>
    )
}
