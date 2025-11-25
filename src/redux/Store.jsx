import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import bookYourTickets from './Slice'

const Store = configureStore({

    reducer : {
        bookYourTickets : bookYourTickets
    }

})

export default Store