import Article from "./Article";
import Profile from "./Profile";
import NotFound from "./common/NotFound";

export const ARITCLE_ROUTES = [ 
    {
        path: "/404",
        component: NotFound,
    },
    {
        path: "/articles",
        component: Article,
    },
    {
        path: "/profile",
        component: Profile,
    },
    
]