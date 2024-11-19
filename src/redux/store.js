import { configureStore } from "@reduxjs/toolkit";

import coursesReducer from './store/Courses'
import coursesPopularReducer from './store/CoursesPopular'
import articlesReducer from './store/Articles'
import authMeReducer from './store/AuthMe'
import coursesCategoryReducer from './store/CoursesCategory'
import articleSelectedReducer from './store/ArticleSelected'
import menusReducer from './store/Menus'
import topBarReducer from './store/TopbarMenus'
import searchingPageReducer from './store/SearchingPage'
import sessionsReducer from './store/Sessions'
import messagesReducer from './store/Messages'
import usersReducer from './store/Users'
import ticketsReducer from './store/Tickets'
import commentsReducer from './store/Comments'
import menusPanelReducer from './store/MenusPanel'
import offsReducer from './store/Off'
import categoriesReducer from './store/Categories'

const store = configureStore({
    reducer : {
    courses : coursesReducer,
    coursesCategory : coursesCategoryReducer,
    coursesPopular : coursesPopularReducer,
    articles : articlesReducer,
    articleSelected : articleSelectedReducer,
    infosMe : authMeReducer,
    menus : menusReducer,
    topBar : topBarReducer,
    searchingPage : searchingPageReducer,
    sessions : sessionsReducer,
    messages : messagesReducer,
    users : usersReducer ,
    tickets : ticketsReducer ,
    comments : commentsReducer,
    menusPanel : menusPanelReducer ,
    categories : categoriesReducer ,
    offs : offsReducer



    }
})

export default  store