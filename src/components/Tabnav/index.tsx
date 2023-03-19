import React from 'react'
import ProductPage from '../ProductPage';
import UserPage from '../UserPage';
import './styles.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './styles.css'

window.onload = function () {
    window.location.hash = 'section1'
    document.documentElement.scrollTop = 0
}

function Tabnav() {

    const handleSelect = (index: number, lastIndex: number, event: Event) => {
        if (index === 0) {
            window.location.reload();
        }
    }
    return (
        <Tabs classID='tab-container' onSelect={handleSelect}> 
            <TabList>
                <Tab color='blue'>PRODUTOS</Tab>
                <Tab>USUÁRIOS</Tab>
            </TabList>
            <TabPanel>
                <ProductPage />
            </TabPanel>
            <TabPanel>
                <UserPage />
            </TabPanel>
        </Tabs>
    )
}

export default Tabnav